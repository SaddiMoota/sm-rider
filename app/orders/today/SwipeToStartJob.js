import React, { useState, useRef, useCallback, useEffect } from "react";
import { ChevronRight, Check } from "lucide-react";

const SwipableButton = ({
  onConfirm,
  text = "Swipe to confirm",
  confirmText = "Confirmed!",
  className = "",
  disabled = false,
  showReset = true,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const buttonRef = useRef(null);
  const handleRef = useRef(null);
  const dragPosRef = useRef(0);

  // Keep ref updated
  useEffect(() => {
    dragPosRef.current = dragPosition;
  }, [dragPosition]);

  const getMaxDrag = () => {
    const buttonWidth = buttonRef.current?.offsetWidth || 0;
    const handleWidth = handleRef.current?.offsetWidth || 0;
    return buttonWidth - handleWidth - 10;
  };    

  const handleStart = useCallback((clientX) => {
    if (disabled || isConfirmed) return;
    setIsDragging(true);
  }, [disabled, isConfirmed]);

  const handleMove = useCallback((clientX) => {
    if (!isDragging || !buttonRef.current || !handleRef.current) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const handleWidth = handleRef.current.offsetWidth;
    const maxPosition = getMaxDrag();

    const newPosition = Math.max(0, Math.min(clientX - buttonRect.left - handleWidth / 2, maxPosition));
    setDragPosition(newPosition);
  }, [isDragging]);

  const handleEnd = useCallback(() => {
    if (!isDragging || !buttonRef.current || !handleRef.current) return;

    const maxPosition = getMaxDrag();
    const threshold = maxPosition * 0.8;

    const finalPosition = dragPosRef.current;

    if (finalPosition >= threshold) {
      setIsConfirmed(true);
      setDragPosition(maxPosition);
      onConfirm?.();
    } else {
      setDragPosition(0);
    }

    setIsDragging(false);
  }, [isDragging, onConfirm]);

  const handleMouseDown = (e) => handleStart(e.clientX);
  const handleTouchStart = (e) => handleStart(e.touches[0].clientX);

  // Attach mousemove/mouseup and touchmove/touchend to document
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e) => handleMove(e.clientX);
    const handleMouseUp = () => handleEnd();
    const handleTouchMove = (e) => {
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    };
    const handleTouchEnd = () => handleEnd();

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, handleMove, handleEnd]);

  const reset = () => {
    setIsConfirmed(false);
    setDragPosition(0);
    setIsDragging(false);
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        ref={buttonRef}
        className={`
          relative h-14 rounded-full border-2 overflow-hidden select-none cursor-pointer transition-all shadow active:scale-95
          ${isConfirmed
            ? "border-red-600 text-white bg-gradient-to-r from-red-600 to-red-400 hover:from-red-700 hover:to-red-500"
            : disabled
            ? "bg-gray-200 border-gray-300 cursor-not-allowed"
            : "bg-smgreen-50 border-smgreen-600 bg-gradient-to-r from-smgreen-600 to-smgreen-400 hover:from-smgreen-700 hover:to-smgreen-500"}
        `}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      > 
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`
            text-lg font-medium transition-opacity duration-200
            ${isConfirmed ? "text-white opacity-100" : disabled ? "text-gray-400" : "text-white"}
          `}>
            {isConfirmed ? confirmText : text}
          </span>
        </div>

        <div
          ref={handleRef}
          className={`
            absolute top-0.5 left-1 h-12 w-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200
            ${isConfirmed ? "bg-white" : disabled ? "bg-gray-300" : "bg-smyellow-500 hover:bg-smyellow-400"}
            ${isDragging ? "scale-110" : "scale-100"} select-none
          `}
          style={{
            transform: `translateX(${dragPosition}px) ${isDragging ? "scale(1.1)" : "scale(1)"}`,
            transition: isDragging ? "none" : "transform 0.2s ease-out",
          }}
        >
          {isConfirmed ? (
            <Check className="w-8 h-8 text-smgreen-900" />
          ) : (
            <ChevronRight className={`w-8 h-8 ${disabled ? "text-white" : "text-smgreen-900"}`} />
          )}
        </div>

        {!isConfirmed && (
          <div
            className="absolute top-0 left-0 h-full bg-smgreen-200 rounded-full transition-all duration-100 pointer-events-none"
            style={{
              width: `${Math.max(0, (dragPosition / (buttonRef.current?.offsetWidth || 1)) * 100)}%`,
              opacity: isDragging ? 0.3 : 0,
            }}
          />
        )}
      </div>

      {/* {isConfirmed && showReset && (
        <button
          onClick={reset}
          className="mt-4 px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
        >
          Reset
        </button>
      )} */}
    </div>
  );
};

export default SwipableButton;

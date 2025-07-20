import React from "react";
import { FileText } from "lucide-react";

export default function DocumentLibrary({ documents, onDocClick }) {
  return (
    <div className="mb-8">
      <div className="text-lg font-semibold text-gray-900 mb-3">Document Library</div>
      <div className="grid grid-cols-2 gap-4">
        {documents.map((doc) => (
          <button
            key={doc.name}
            className="flex flex-col items-center bg-gray-50 rounded-lg p-4 border border-gray-100 hover:bg-green-50 transition cursor-pointer focus:outline-none"
            onClick={() => onDocClick(doc)}
            type="button"
          >
            <FileText size={24} className="text-green-900 mb-2" />
            <span className="text-gray-700 font-medium mb-1 text-center">{doc.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

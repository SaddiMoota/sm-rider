'use client';

import Image from 'next/image'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PartyPopper } from 'lucide-react'

const Login = () => {
  const [showOTP, setShowOTP] = useState(false)
  const [showCongratulationsModal, setShowCongratulationsModal] = useState(false)
  const router = useRouter()

  const handleContinue = () => {
    setShowOTP(true)
  }

  const handleVerifyOTP = () => {
    // Show congratulations modal
    setShowCongratulationsModal(true)
  }


  return (
    <div className='bg-white h-dvh flex flex-col'>
      <div className='flex-1 flex justify-center items-center py-6 px-6'
        style={{
          backgroundImage: 'url(/images/login-bg-banner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Image
          src="/images/partner-logo-one.png"
          alt="Saddi Moota Logo"
          width={448}
          height={98}
          priority
          className="w-full max-w-[280px] md:max-w-sm lg:max-w-md h-auto"
        />
      </div>
      <div className='w-full max-w-[480px] mx-auto flex flex-col p-6 pb-7'>
        <h1 className='font-smserif text-2xl md:text-3xl font-normal text-smgreen-900 leading-normal text-center mb-6'>Login</h1>
        
        {!showOTP ? (
          <div>
            <div className='font-smsans text-base text-gray-900 font-medium mb-3'>Mobile Number</div>
            <div className='h-14 relative flex items-center border border-gray-400 rounded mt-2 focus-within:border-smgreen-500 focus-within:ring-1 focus-within:ring-smgreen-500 mb-4'>
              <span className='text-gray-900 bg-gray-200 px-3 h-full flex items-center rounded-l border-r border-gray-300'>+91</span>
              <input 
                type='tel' 
                placeholder='Enter mobile number'
                className='flex-1 outline-none text-base text-gray-900 font-medium placeholder:font-normal px-3 focus:ring-0'
                maxLength='10'
              />
            </div>
            <button 
              onClick={handleContinue}
              className='w-full h-14 bg-smgreen-900 text-white font-smsans text-base sm:text-lg rounded hover:bg-smgreen-800 transition-colors cursor-pointer'
            >
              Request OTP to Login
            </button>
          </div>
        ) : (
          <div>
            <div className='font-smsans text-sm md:text-base text-gray-700 mb-3'>We have sent you 6 digit OTP to your mobile number</div>
            <div className='flex gap-2 sm:gap-3 md:gap-4 justify-between mb-4'>
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type='text'
                  maxLength='1'
                  className='w-full h-14 text-center text-lg font-medium text-gray-900 border border-gray-400 rounded focus:border-smgreen-500 focus:ring-1 focus:ring-smgreen-500 outline-none '
                  onChange={(e) => {
                    if (e.target.value && index < 5) {
                      const nextInput = e.target.parentElement.children[index + 1];
                      if (nextInput) nextInput.focus();
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Backspace' && !e.target.value && index > 0) {
                      const prevInput = e.target.parentElement.children[index - 1];
                      if (prevInput) prevInput.focus();
                    }
                  }}
                />
              ))}
            </div>
            <button 
              onClick={() => router.push('/home')}
              className='w-full h-14 bg-smgreen-900 text-white font-smsans text-base sm:text-lg rounded hover:bg-smgreen-800 transition-colors cursor-pointer'
            >
              Verify OTP 
            </button>
            <div className='mt-6'>
              <span className='font-smsans text-base font-normal text-gray-700 block mb-1'>Not Received OTP?</span>
              <button className='text-smgreen-900 font-smsans text-base font-medium hover:underline cursor-pointer'>Request Again</button>
            </div>
          </div>
        )}
      </div>

      {/* Congratulations Modal */}
      {showCongratulationsModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className='px-4 sm:px-6 lg:px-8 py-9'>
              <div className='max-w-4xl mx-auto text-center'>
                <div className='rounded-full w-20 h-20 shadow flex items-center justify-center mx-auto mb-4 bg-smgreen-800'>
                  <PartyPopper size={32} className='text-smyellow-500'/>
                </div>
                <h1 className='font-smserif text-2xl sm:text-3xl md:text-4xl font-medium text-smgreen-900 mb-4'>
                  Congratulations!
                </h1>
                <h2 className='text-base sm:text-lg font-normal text-gray-900 mb-6'>
                  One more step to explore SaddiMoota
                </h2>
                <button 
                  onClick={() => {
                    setShowCongratulationsModal(false)
                    router.push('/choose-location')
                  }}
                  className='w-full bg-smgreen-900 text-white px-6 h-14 rounded hover:bg-smgreen-800 transition-colors font-medium cursor-pointer'
                >
                  Choose Location
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Login

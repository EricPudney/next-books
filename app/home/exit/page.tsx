'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
    const router = useRouter();
  
    useEffect(() => {
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, []);
    const handleConfirm = () => {
      router.push('/');
    };
  
    const handleCancel = () => {
      router.back();
    };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-xl shadow-lg max-w-md w-full mx-auto p-6 space-y-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <h2 
          id="modal-title"
          className="text-lg md:text-xl font-semibold text-gray-900"
        >
          Return to CV page?
        </h2>
        
        <p className="text-gray-600">
          Are you sure you want to return to the CV page?
        </p>

        <div className="flex space-x-4 pt-4">
          <button
            onClick={handleCancel}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
// Path: d-n-a/src/app/delete-account-rememo/page.tsx
'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

// Enum to manage the steps in the process
enum DeletionStep {
  EnterPhone, // Step for entering the phone number
  EnterCode,  // Step for entering the verification code
  Success,    // Step for displaying the success message
}

export default function DeleteAccountPage() {
  // State variables to manage the component's logic
  const [step, setStep] = useState<DeletionStep>(DeletionStep.EnterPhone);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to handle sending the verification code
  const handleSendVerificationCode = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // TODO: Replace this URL with your actual cloud function URL
    const sendCodeUrl = 'https://your-cloud-functions-url.net/sendDeletionCode';

    try {
      const response = await fetch(sendCodeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });

      if (!response.ok) {
        // If the server returns an error, display it
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send verification code.');
      }

      // If sending the code was successful, move to the next step
      setStep(DeletionStep.EnterCode);

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle code verification and account deletion
  const handleDeleteAccount = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // TODO: Replace this URL with your actual cloud function URL
    const deleteAccountUrl = 'https://your-cloud-functions-url.net/deleteAccount';

    try {
      const response = await fetch(deleteAccountUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, code: verificationCode }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Verification failed or account deletion failed.');
      }

      // If deletion was successful, move to the success screen
      setStep(DeletionStep.Success);

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Function to render content based on the current step
  const renderStepContent = () => {
    switch (step) {
      case DeletionStep.EnterPhone:
        return (
          <form onSubmit={handleSendVerificationCode} className="w-full">
            <h2 className="text-xl font-semibold mb-2">Step 1: Enter Your Phone Number</h2>
            <p className="text-gray-600 mb-4">
              Please enter the full phone number (including international prefix) associated with your account.
            </p>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+1234567890"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
            >
              {isLoading ? 'Sending...' : 'Send Verification Code'}
            </button>
          </form>
        );

      case DeletionStep.EnterCode:
        return (
          <form onSubmit={handleDeleteAccount} className="w-full">
            <h2 className="text-xl font-semibold mb-2">Step 2: Confirm Deletion</h2>
            <p className="text-gray-600 mb-4">
              We sent a 6-digit verification code to your phone number. Please enter it to confirm account deletion.
            </p>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="123456"
              maxLength={6}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 disabled:bg-gray-400"
            >
              {isLoading ? 'Deleting...' : 'Permanently Delete Account'}
            </button>
          </form>
        );

      case DeletionStep.Success:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-600">Account Deleted Successfully</h2>
            {/* --- FIX: Replaced ' with &apos; to fix the build error --- */}
            <p className="text-gray-700 mt-2">We&apos;re sorry to see you go.</p>
            <Link href="/" className="text-blue-600 hover:underline mt-6 inline-block">
              Back to Home Page
            </Link>
          </div>
        );
    }
  };

  return (
    <main className="bg-white text-black min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">Delete REMEMO Account</h1>
        <p className="text-center text-gray-600 mb-6">
          You are about to permanently delete your REMEMO account. This action is irreversible and will erase all data associated with your account.
        </p>
        
        {renderStepContent()}

        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}
      </div>
    </main>
  );
}

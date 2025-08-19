// הנתיב לקובץ זה: d-n-a/src/app/delete-account-rememo/page.tsx
'use client';

import { useState, FormEvent } from 'react';

// הגדרת enum לניהול השלבים בתהליך
enum DeletionStep {
  EnterPhone, // שלב הזנת מספר הטלפון
  EnterCode,  // שלב הזנת קוד האימות
  Success,    // שלב הצגת הודעת הצלחה
}

export default function DeleteAccountPage() {
  // State variables to manage the component's logic
  const [step, setStep] = useState<DeletionStep>(DeletionStep.EnterPhone);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // פונקציה שתופעל לשליחת קוד האימות
  const handleSendVerificationCode = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // TODO: החלף את כתובת ה-URL הזו בכתובת האמיתית של פונקציית הענן שלך
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
        // אם השרת החזיר שגיאה, נציג אותה
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send verification code.');
      }

      // אם שליחת הקוד הצליחה, נעבור לשלב הבא
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

  // פונקציה שתופעל לאימות הקוד וביצוע המחיקה
  const handleDeleteAccount = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // TODO: החלף את כתובת ה-URL הזו בכתובת האמיתית של פונקציית הענן שלך
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

      // אם המחיקה הצליחה, נעבור למסך ההצלחה
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

  // פונקציה לעיבוד התצוגה בהתאם לשלב הנוכחי
  const renderStepContent = () => {
    switch (step) {
      case DeletionStep.EnterPhone:
        return (
          <form onSubmit={handleSendVerificationCode} className="w-full">
            <h2 className="text-xl font-semibold mb-2">שלב 1: הזן את מספר הטלפון שלך</h2>
            <p className="text-gray-600 mb-4">
              אנא הזן את מספר הטלפון המלא (כולל קידומת בינלאומית) המשויך לחשבונך.
            </p>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+972501234567"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
            >
              {isLoading ? 'שולח...' : 'שלח קוד אימות'}
            </button>
          </form>
        );

      case DeletionStep.EnterCode:
        return (
          <form onSubmit={handleDeleteAccount} className="w-full">
            <h2 className="text-xl font-semibold mb-2">שלב 2: אשר את המחיקה</h2>
            <p className="text-gray-600 mb-4">
              שלחנו קוד אימות בן 6 ספרות למספר הטלפון שלך. אנא הזן אותו כדי לאשר את מחיקת החשבון.
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
              {isLoading ? 'מוחק...' : 'מחק את החשבון לצמיתות'}
            </button>
          </form>
        );

      case DeletionStep.Success:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-600">החשבון נמחק בהצלחה</h2>
            <p className="text-gray-700 mt-2">אנחנו מצטערים לראות אותך עוזב.</p>
            {/* Note: In a real Next.js app, prefer using the <Link> component for internal navigation. */}
            <a href="/" className="text-blue-600 hover:underline mt-6 inline-block">
              חזרה לדף הבית
            </a>
          </div>
        );
    }
  };

  return (
    <main className="bg-white text-black min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">מחיקת חשבון REMEMO</h1>
        <p className="text-center text-gray-600 mb-6">
          אתה עומד למחוק לצמיתות את חשבון ה-REMEMO שלך. פעולה זו אינה הפיכה ותמחק את כל הנתונים המשויכים לחשבונך.
        </p>
        
        {renderStepContent()}

        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}
      </div>
    </main>
  );
}

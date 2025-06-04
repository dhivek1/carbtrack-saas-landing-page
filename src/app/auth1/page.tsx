'use client';

import { useState } from 'react';

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);

  const handleAuth = () => {
    const redirectUrl = isRegister ? '/api/auth/login?screen_hint=signup' : '/api/auth/login';
    window.location.href = redirectUrl;
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 border">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {isRegister ? 'Create Your Account' : 'Sign in to Your Account'}
        </h2>

        <button
          onClick={handleAuth}
          className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
        >
          {isRegister ? 'Register with Auth0' : 'Login with Auth0'}
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-green-600 hover:underline font-medium"
          >
            {isRegister ? 'Sign In' : 'Register'}
          </button>
        </p>
      </div>
    </main>
  );
}

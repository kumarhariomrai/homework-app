import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../lib/supabase';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  // Redirect if already logged in
  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) router.push('/dashboard'); // Redirect to dashboard if logged in
    };
    checkUser();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">School App Login</h1>
        <Auth
          supabaseClient={supabase}
          providers={['google']} // Enable Google Auth
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#4f46e5', // Customize button color
                  brandAccent: '#4338ca',
                },
              },
            },
          }}
          theme="light"
        />
      </div>
    </div>
  );
}
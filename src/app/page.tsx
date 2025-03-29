import { redirect } from 'next/navigation';

// This is a server component that redirects to login
export default function HomePage() {
  redirect('/login');
}

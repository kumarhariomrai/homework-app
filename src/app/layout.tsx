import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'School Homework App',
  description: 'App for teachers and students',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  );
}

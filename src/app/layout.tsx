// app/layout.tsx
import './styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Basketball League Seasons',
  description: 'Landing page for basketball league seasons',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        {children}
      </body>
    </html>
  );
}

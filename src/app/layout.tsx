// app/layout.tsx
import './styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Yabangan',
  description: 'Landing page for Yabangan league',
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

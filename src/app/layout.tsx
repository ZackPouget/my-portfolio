// app/layout.tsx
import Navigation from '@/components/navigation';
import './globals.css';

export const metadata = {
  title: "Zack Pouget | Portfolio",
  description: "Portfolio showcasing projects built with React, Svelte, and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 min-h-screen flex flex-col">
        <Navigation/>

        {children}

        <footer className="mt-auto text-center py-6 text-gray-500 text-sm bg-white">
          © {new Date().getFullYear()} Zack Pouget — Built with Next.js
        </footer>
      </body>
    </html>
  );
}

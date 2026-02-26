import type {Metadata} from 'next';
import './globals.css'; // Global styles
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import MainLayoutWrapper from '@/components/layout/MainLayoutWrapper';

export const metadata: Metadata = {
  title: 'B2B E-commerce Platform',
  description: 'Cross-border e-commerce platform',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50" suppressHydrationWarning>
        <AppHeader />
        <MainLayoutWrapper>
          {children}
        </MainLayoutWrapper>
        <AppFooter />
      </body>
    </html>
  );
}

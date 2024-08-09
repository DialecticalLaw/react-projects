import './global.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Star Wars - Planets search'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

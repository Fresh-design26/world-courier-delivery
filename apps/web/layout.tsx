import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'World Courier Delivery', description: 'Track your shipment' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}

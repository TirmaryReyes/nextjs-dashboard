import '@/app/ui/global.css';
import { inter, lusitana } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <p
      className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
    ></p>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

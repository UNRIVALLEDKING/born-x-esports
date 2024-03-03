import { Inter, Electrolize } from 'next/font/google';
import './globals.css';
import Navbar from '@/Components/Nav/Navbar';
import Footer from '@/Components/Footer/Footer';
import { FullTitle } from '@/constants/constant';

const electrolize = Electrolize({ subsets: ['latin'], weight: '400' });
export const metadata = {
  title: FullTitle,
  description:
    'Step into the exhilarating world of BORNX ESPORTS, your gateway to immersive gaming experiences and thrilling competitions. As pioneers in the esports arena, we&apos;re dedicated to fueling your passion for gaming and fostering a vibrant community of gamers from all walks of life.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`text-[#fff] bg-header ${electrolize.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

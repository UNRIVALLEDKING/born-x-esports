import { Menu, SecondaryTitle } from '@/constants/constant';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });
export default function Navbar() {
  return (
    <div className="flex justify-between py-4 fixed top-0 w-full left-0 z-50 bg-header">
      <h1
        className={`text-[#fff] text-3xl xl:text-4xl font-bold ${poppins.className} pl-5`}
      >
        {SecondaryTitle.slice(0, 4)}
        <span className="text-logoRed">{SecondaryTitle.slice(4, 5)}</span>
      </h1>
      <div className="hidden 2xl:flex justify-around w-1/2 items-center">
        {Menu.map((item, id) => (
          <Link
            key={id}
            href={item.url}
            className="text-2xl text-[#fff] hover:text-primary"
          >
            {item.navMenu}
          </Link>
        ))}
      </div>
    </div>
  );
}

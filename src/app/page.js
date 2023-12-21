import TournamentCards from '@/Components/Cards/TournamentCards';
import HomeCarousel from '@/Components/Home/HomeCarousel';
import { FullLogo, MainLogo } from '@/assets/Logo';
import { Title } from '@/constants/constant';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main id="home" className=" pt-24">
      <HomeCarousel />
      {/* Tournaments */}
      <div className="mt-[100vh] px-4 xl:px-24">
        <h2 className="text-4xl xl:text-6xl">Tournaments</h2>
        <hr className="w-1/3 xl:w-1/12 border-logoRed border-2 rounded-full" />
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-2 mt-10 xl:items-center">
          <TournamentCards />
          <Link href="/" className="rounded-xl px-4 py-2 text-2xl">
            New Tournaments Coming Soon{' > > '}
          </Link>
        </div>
      </div>
      {/* About Us */}
      <div className="mt-10 px-4 xl:px-24">
        <h2 className="text-4xl xl:text-6xl">About Us</h2>
        <hr className="w-1/12 border-logoRed border-2 rounded-full mb-4 xl:mb-0" />
        <div className="flex flex-col-reverse xl:flex-row xl:justify-between xl:items-center">
          <p className="text-lg w-full xl:w-3/4">
            Bornxesports, is the leading esports tournament organizer in Bihar
            renowned for hosting major tournaments spanning multiple gaming
            titles. Founded in 2020, The company was founded with the goal of
            elevating esports from the grassroots level and bringing competitive
            gaming to every nook and corner of India and the world. Three years
            later, our team has grown to an experienced 10+ people, who are
            committed to growing and redefining esports. The sky&apos;s the
            limit for us and as one of the best esports tournament organizers we
            aim to achieve that every day by breaking barriers in production,
            content creation, media rights, LAN events, and talent management.
          </p>
          <Image
            className="rounded-xl w-64 mx-auto"
            src={FullLogo}
            alt={Title}
          />
        </div>
      </div>
    </main>
  );
}

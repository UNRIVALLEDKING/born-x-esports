import { TournamentCardImg } from '@/assets';
import { FullTitle, Title } from '@/constants/constant';
import Image from 'next/image';
import React from 'react';

export default function TournamentCards() {
  return (
    <div className="group relative block bg-black">
      <Image
        alt={FullTitle}
        src={TournamentCardImg}
        className="absolute inset-0 h-full w-full object-fill opacity-80 transition-opacity group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <div className="bg-[#00000086] backdrop-blur-xl pl-4 rounded-xl">
          <p className="uppercase tracking-widest text-logoRed ;font-bold text-lg">
            {Title}
          </p>

          <p className="text-xl font-bold text-white sm:text-2xl">
            ESPORTS FEST
          </p>
        </div>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 rounded-xl group-hover:opacity-100 bg-[#00000086] backdrop-blur-xl p-3 text-lg">
            <p className="text-sm text-white">
              Date : 07 April 2024
              <br />
              <span>Venue : VR Marriage Hall, Sonpur, Bihar</span>
            </p>
            <a
              href="https://forms.gle/Z9vTjLkWnmDntGLc6"
              className="px-4 w-fit py-2 mt-5 border-x border-[#fff] text-lg hover:scale-110"
              target="_blank"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

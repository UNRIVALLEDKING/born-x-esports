'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { HomeBg, HomeBg2 } from '@/assets';
import { FullTitle, Title } from '@/constants/constant';

import { Autoplay } from 'swiper/modules';

export default function HomeCarousel() {
  return (
    <div className="w-full h-[100vh] absolute top-0 left-0 z-20">
      <div
        className="w-full h-full absolute z-[60] top-[4.1rem] xl:top-[4.5rem] left-0"
        style={{
          background:
            'linear-gradient(74deg, rgb(23,27,68,80%)50%,rgb(23,27,68,14%))',
        }}
      ></div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <Image
            src={HomeBg}
            priority={true}
            className="object-cover object-bottom h-screen"
            alt={`Home Background - ${Title}`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={HomeBg2}
            priority={true}
            className="w-full h-screen object-cover object-left-bottom"
            alt={`Home Background - ${Title}`}
          />
        </SwiperSlide>
      </Swiper>
      <div className="z-[70] absolute flex justify-start flex-col top-36 left-0 h-[100vh] w-full px-4 xl:px-20">
        <h1 className="text-4xl xl:text-6xl mt-20">{FullTitle} FEST</h1>
        <hr className="w-1/3 xl:w-1/12 border-logoRed border-2 rounded-full" />
        <p className="xl:w-1/2 text-lg xl:text-2xl my-3">
          Step into the exhilarating world of BORNX ESPORTS, your gateway to
          immersive gaming experiences and thrilling competitions. As pioneers
          in the esports arena, we&apos;re dedicated to fueling your passion for
          gaming and fostering a vibrant community of gamers from all walks of
          life.
        </p>
        <a
          href="https://forms.gle/Z9vTjLkWnmDntGLc6"
          className="bg-logoRed px-4 py-2 rounded-full w-fit text-xl hover:scale-110"
          target="_blank"
        >
          Register Now
        </a>
      </div>
    </div>
  );
}

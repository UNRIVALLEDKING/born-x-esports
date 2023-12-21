import {
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
  FaDiscord,
} from 'react-icons/fa';

export const Title = 'Born-X';
export const SecondaryTitle = 'BORNX';
export const FullTitle = 'BORN-X ESPORTS';

export const SNSLinks = [
  {
    id: 0,
    title: 'Instagram',
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/bornxesports',
  },
  {
    id: 1,
    title: 'Youtube',
    icon: <FaYoutube />,
    url: 'https://www.youtube.com/@BORNXESPORTS',
  },
  {
    id: 2,
    title: 'Telegram',
    icon: <FaTelegramPlane />,
    url: 'https://t.me/bornxesports',
  },
  {
    id: 2,
    title: 'Discord',
    icon: <FaDiscord />,
    url: 'https://discord.gg/PMjrdV5U',
  },
];

export const Menu = [
  {
    id: 0,
    navMenu: 'Home',
    url: '/',
  },
  {
    id: 1,
    navMenu: 'Tournaments',
    url: '/tournaments',
  },
  {
    id: 2,
    navMenu: 'About Us',
    url: '/about-us',
  },
  {
    id: 3,
    navMenu: 'Contact Us',
    url: '/contact-us',
  },
];

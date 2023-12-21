import { HomeBg2 } from '@/assets';
import { FullTitle, SNSLinks, Title } from '@/constants/constant';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white xl:mt-20">
      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs uppercase tracking-wide text-gray-500">
                {' '}
                Call us{' '}
              </span>

              <a
                href="tel:+917545867933"
                className="block text-2xl font-medium text-gray-900 hover:text-logoRed sm:text-3xl"
              >
                +917545867933
              </a>
            </p>
            <p>
              <span className="text-xs uppercase tracking-wide text-gray-500">
                {' '}
                Mail us{' '}
              </span>

              <a
                href="mailto:bornxesports@gmail.com"
                className="block text-2xl font-medium text-gray-900 hover:text-logoRed sm:text-3xl"
              >
                bornxesports@gmail.com
              </a>
            </p>

            <ul className="mt-8 flex gap-6">
              {SNSLinks.map((item, id) => (
                <li key={id}>
                  <a
                    href={item.url}
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:text-logoRed"
                  >
                    <span className="sr-only">{item.title}</span>
                    <span className="text-2xl">{item.icon}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-medium text-gray-900">Services</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-logoRed"
                  >
                    {' '}
                    1on1 Coaching{' '}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-logoRed"
                  >
                    {' '}
                    Company Review{' '}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-logoRed"
                  >
                    {' '}
                    Accounts Review{' '}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-logoRed"
                  >
                    {' '}
                    HR Consulting{' '}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-logoRed"
                  >
                    {' '}
                    SEO Optimisation{' '}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-logoRed"
                  >
                    {' '}
                    About{' '}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-logoRed"
                  >
                    {' '}
                    Meet the Team{' '}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-logoRed"
                  >
                    {' '}
                    Accounts Review{' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-500 transition hover:text-logoRed"
                >
                  {' '}
                  Terms & Conditions{' '}
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-500 transition hover:text-logoRed"
                >
                  {' '}
                  Privacy Policy{' '}
                </Link>
              </li>
            </ul>

            <p className="mt-8 text-xs text-gray-500 sm:mt-0">
              &copy; 2020. {FullTitle}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

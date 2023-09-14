import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { Open_Sans, Raleway } from 'next/font/google';
import { domAnimation, LazyMotion } from 'framer-motion';
import { RecoilRoot } from 'recoil';
import Preloads from '../components/app/Preloads';
import '../styles/globals.scss';

const bebas = localFont({
  src: '../public/fonts/BebasNeue Regular.otf',
});
const bebasBook = localFont({
  src: '../public/fonts/BebasNeue Book.otf',
});
const openSans = Open_Sans({ subsets: ['latin'] });
const raleway = Raleway({ subsets: ['latin'] });

export const fonts = {
  bebas: bebas.className,
  bebasBook: bebasBook.className,
  openSans: openSans.className,
  raleway: raleway.className,
} satisfies Record<string, string>;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <LazyMotion strict features={domAnimation}>
        <Preloads>
          <Component {...pageProps} />
        </Preloads>
      </LazyMotion>
    </RecoilRoot>
  );
}

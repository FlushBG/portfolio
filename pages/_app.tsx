import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { domAnimation, LazyMotion } from 'framer-motion';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion strict features={domAnimation}>
      <Component {...pageProps} />
    </LazyMotion>
  );
}

import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { domAnimation, LazyMotion } from 'framer-motion';
import Layout from '../components/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion strict features={domAnimation}>
      {/* <Layout> */}
        <Component {...pageProps} />
      {/* </Layout> */}
    </LazyMotion>
  );
}

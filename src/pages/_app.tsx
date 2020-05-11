import React from 'react';
import { AppProps } from 'next/app';
import 'semantic-ui-css/semantic.min.css'
import Footer from 'components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
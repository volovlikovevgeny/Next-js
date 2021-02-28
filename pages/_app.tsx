// import App from "next/app";
import React from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default MyApp;

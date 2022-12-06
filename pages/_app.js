import '../styles/globals.css'
import MainLayout from "../components/layout/MainLayout"
import Script from 'next/script'

const GA_MEASUREMENT_ID = 'UA-250984486-1';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=UA-250984486-1`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-250984486-1');
        `}
      </Script>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>

  )
}

export default MyApp

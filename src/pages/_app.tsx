// import Layout from '@/components/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  console.log(Component)
  return(
    // <Layout>
      <Component {...pageProps} />
    // </Layout>
  ) 
}

import Head from 'next/head';
import { Inter } from 'next/font/google'
import { Avatar, Doodles, Logo, NavBar } from '@/design-system';
import { Icon } from '@/design-system/icon/icon';


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="AJP - HR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
         <Logo logoVariation={'horizontal'} colors={'dark'}/>
      
    </>
  );
}

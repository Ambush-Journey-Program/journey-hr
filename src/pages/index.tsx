import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Button, Doodles, Input } from '@/design-system';
import { Logo } from '@ambush/ui';

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

      <Input label='a'/>
    </>
  );
}

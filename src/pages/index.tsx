import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Avatar, Doodles, NavBar } from '@/design-system';
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
      <Avatar src={'/static/images/UserPhoto.png'} />
      <NavBar navigationLinks={[]} colors={'dark'} />
      <Doodles icon={'arrow1'} colors={'dark'} />
      <Doodles icon={'spinningArrow'} colors={'dark'} />
      <Icon icon="TvIcon" size="58px" color={'error'} />
    </>
  );
}

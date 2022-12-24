import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Douglas Matos</title>
        <meta name="description" content="This is my website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-9xl font-bold underline">Hello world!</h1>
        <h2 className="text-4xl">This is my website</h2>
      </main>
    </>
  );
}

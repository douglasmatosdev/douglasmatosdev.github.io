import Head from "next/head";

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
        <header>
          <ul
            className={`flex flex-col p-8 
              sm:hidden sm:flex-row
            `}
          >
            {["DMS", "Home", "Portfolio", "Contact"].map(
              (item: string, index: number) => (
                <li
                  key={`header_${item}_${index}`}
                  className="text-md first:basis-10/12 border border-sky-500"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </header>
      </main>
    </>
  );
}

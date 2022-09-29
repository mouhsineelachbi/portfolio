import { BsFillMoonStarsFill } from "react-icons/bs";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mouhsine ELACHBI Portfolio</title>
        <meta name="description" content="Created by Mouhsine ELACHBI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-10">
        <section className="h-screen">
          <nav className="flex justify-between py-10 mb-12">
            <h1 className="text-xl">mythosedevelop</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}

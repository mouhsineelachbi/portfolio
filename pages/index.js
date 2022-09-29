import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

import { BsFillMoonStarsFill } from "react-icons/bs";
import Head from "next/head";
import Image from "next/image";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import design from "../public/design.png";
import mouhsine from "../public/mouhsine_wave.png";
import { useState } from "react";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Mouhsine ELACHBI Portfolio</title>
        <meta name="description" content="Created by Mouhsine ELACHBI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="flex justify-between py-10 mb-12">
            <h1 className="text-xl font-burtons dark:text-gray-200">mythosedevelop</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl dark:text-gray-200"
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Elachbi Mouhsine
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-200">
              Software Engineer/Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200">
              Developer providing services for programming and design content.
              Join me down below and lets get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600 py-2">
            <AiFillLinkedin className="dark:text-gray-200" />
            <AiFillTwitterCircle className="dark:text-gray-200" />
            <AiFillYoutube className="dark:text-gray-200" />
          </div>
          <div className="relative bg-gradient-to-b from-teal-400 rounded-full w-80 h-80 md:h-96 md:w-96 mt-20 mx-auto overflow-hidden">
            <Image
              src={mouhsine}
              alt="mouhsine waving image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        {/* Services section */}
        <section>
          <div className="">
            <h3 className="text-3xl py-2 dark:text-gray-200">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a software engineer and
              developer, I have done remote work for{" "}
              <span className="text-teal-500"> agencies </span> consulted for{" "}
              <span className="text-teal-500">startups </span>and collaborated
              with talanted people to create digital products for both business
              and consumer use.
            </p>
            <p className="py-2 leading-8 text-md text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={design} alt="design" width={100} height={100} />
              <h2 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h2>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={code} alt="code" width={100} height={100} />
              <h2 className="text-lg font-medium pt-8 pb-2">
                Code your dream project
              </h2>
              <p className="py-2">
                Lets make your great website idea into reality to show It to the world.
              </p>
              <h4 className="py-4 text-teal-600">Code Frameworks I Use</h4>
              <p className="text-gray-800 py-1">Angular</p>
              <p className="text-gray-800 py-1">ReactJs</p>
              <p className="text-gray-800 py-1">NextJs</p>
              <p className="text-gray-800 py-1">NestJs</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white w-min-sm">
              <Image
                src={consulting}
                alt="consulting"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                I can give you tips and tricks to level it up your current project
              </p>
              <h4 className="py-4 text-teal-600">Consulting approches I Use</h4>
              <p className="text-gray-800 py-1">Power mapping</p>
              <p className="text-gray-800 py-1">Issue analysis</p>
              <p className="text-gray-800 py-1">Levels of intervention</p>
              <p className="text-gray-800 py-1">Organisation agility</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-200">Portfolio</h3>
            <p className="text-md py-2 dark:text-gray-200">
              Since the beginning of my journey as a software engineer and
              developer, I have done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                width={"100%"}
                height={"100%"}
                alt=""
                layout="responsive"
                className="rounded-xl object-cover"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                width={"100%"}
                height={"100%"}
                alt=""
                layout="responsive"
                className="rounded-xl object-cover"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                width={"100%"}
                height={"100%"}
                alt=""
                layout="responsive"
                className="rounded-xl object-cover"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                width={"100%"}
                height={"100%"}
                alt=""
                layout="responsive"
                className="rounded-xl object-cover"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                width={"100%"}
                height={"100%"}
                alt=""
                layout="responsive"
                className="rounded-xl object-cover"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                width={"100%"}
                height={"100%"}
                alt=""
                layout="responsive"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

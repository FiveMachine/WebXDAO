// 'use client'

import Partners from "@/components/containers/Partners";
import CursorHoverster from "@/components/cursor-hoverster";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import ScrollToTopButton from "@/components/ui/TopButton";
export default function IndexPage() {
  return (
    <>
      {/* TODO: How can i put the image in the background.. absolute / relative thingy */}

      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center">
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex max-w-[980px] flex-col items-center gap-2 ">
            <h1 className="bg-gradient-to-r from-indigo-700 via-purple-700 to-slate-900 bg-clip-text text-3xl font-medium leading-tight tracking-tighter text-transparent mix-blend-difference sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Shaping web</span>
              <span className="block">that will captivate</span>
              <span className="block">the world.</span>
            </h1>
          </div>

          <div className="flex justify-center gap-4">
            <Link
              href={siteConfig.links.webxdao_getstarted}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: "lg" })}
            >
              Get started
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.webxdao_gh}
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <Icons.gitHub className="mr-2 h-5 w-5" />
              GitHub
            </Link>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <p className="max-w-[700px] text-lg text-slate-900 dark:text-white sm:text-xl">
              Our community is based on open-source principles and we&apos;re focused on shaping the
              future of the web. Join us as we collaborate on projects, share knowledge, and build
              community.
            </p>
          </div>
        </div>

        <div className="absolute">
          <Image
            src="/12.png"
            width={1200}
            height={1200}
            alt="logo"
            className="mix-blend-difference"
          />
        </div>

        <Image
          src="/flying-card-001.png"
          alt="flying card 001"
          width={135}
          height={165}
          className="absolute left-[12rem] top-[12rem]"
        />

        <Image
          src="/flying-card-002.png"
          alt="flying card 001"
          width={208}
          height={259}
          className="absolute bottom-[15rem] right-[12rem]"
        />
        <CursorHoverster />
      </section>

      {/* Headline */}
      <section className="container mt-20 grid items-center justify-center gap-6 pb-8 pt-6 text-center md:py-10">
        <div className="flex max-w-[980px] flex-col items-center gap-2">
          <h3 className="inline-block bg-gradient-to-r from-indigo-700 via-purple-400 to-slate-400 bg-clip-text px-32 text-xl font-extrabold leading-tight tracking-tighter text-transparent sm:text-2xl md:text-3xl lg:text-2xl">
            Become an integral part of a dynamic and vibrant network of like-minded developers
          </h3>
          <div className="mt-4 flex gap-4">
            <Link target="_blank" rel="noreferrer" href={siteConfig.links.webxdao_twitter}>
              <div className="flex items-center">
                <Icons.twitter className="mr-1 h-5 w-5 cursor-pointer fill-current" />
                <span className="cursor-pointer">Twitter</span>
              </div>
            </Link>

            <Link target="_blank" rel="noreferrer" href={siteConfig.links.webxdao_discord}>
              <div className="flex items-center">
                <Icons.discord className="mr-1 h-5 w-5 cursor-pointer fill-current" />
                <span className="cursor-pointer">Discord</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Blurbs */}
      <section className="flex justify-center px-40 py-0">
        <div className="my-12 flex gap-8">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <div className="border-l-3 flex justify-center rounded-lg border-white bg-white p-8 shadow-md shadow-purple-300">
              <Icons.collaborate className="h-15 w-15 mr-1" />
            </div>
            <div className="text-lg font-bold">Collaborate</div>
            <span className="text-sm">
              Collaborate with other members to achieve common goals and objectives.
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <div className="border-l-3 flex justify-center rounded-lg border-white bg-white p-8 shadow-md shadow-purple-300">
              <Icons.blockchain className="h-15 w-15 mr-1" />
            </div>
            <div className="text-lg font-bold">Blockchain</div>
            <span className="text-sm">
              Dedicated to exploring new ways to leverage the power Of this transformative
              technology.
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <div className="border-l-3 flex justify-center rounded-lg border-white bg-white p-8 shadow-md shadow-purple-300">
              <Icons.decentralization className="h-15 w-15 mr-1" />
            </div>
            <div className="text-lg font-bold">Decentralization</div>
            <span className="text-sm">
              Operates in a decentralized manner, giving power to its community members.
            </span>
          </div>
        </div>
      </section>

      {/* Partners */}
      <Partners />

      {/* Features */}
      {/* <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 justify-center text-center">
        <div className="flex max-w-[980px] flex-col items-center gap-2">

          <h3 className="text-xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-2xl px-32">
            Become an integral part of a dynamic and vibrant network of like-minded developers
          </h3>
          <div className="flex gap-4">

            <div className="flex items-center">
            <Icons.twitter className="h-5 w-5 mr-1 fill-current" />
              <span className="">Twitter</span>
            </div>

            <div className="flex items-center">
              <Icons.discord className="h-5 w-5 mr-1 fill-current" />
              <span className="">Discord</span>
            </div>
          </div>
        
        </div>
      </section> */}

      {/* Blurbs: not ok.. i should not use grid */}
      {/* <section className="flex">
        
          <div className="flex my-12 gap-8">

            <div className="flex flex-col gap-3">
              <div className="shadow-lg p-8 rounded-md border-2 border-transparent flex justify-center">
                <Icons.users className="h-5 w-5 mr-1" />
                </div>
              <div className="font-bold text-lg">
                Collaborate
              </div>
              <span className="text-sm">Collaborate with other members to achieve
                common goals and objectives.</span>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="shadow-lg p-8 rounded-md border-2 border-transparent flex justify-center">
              <Icons.zap className="h-5 w-5 mr-1" />


              </div>
              <div className="font-bold text-lg">
                Blockchain
              </div>
              <span className="text-sm">Dedicated to exploring new ways to leverage
                the power Of this transformative technology.</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="shadow-lg p-8 rounded-md border-2 border-transparent flex justify-center">
              <Icons.rocket className="h-5 w-5 mr-1" />
              </div>
              <div className="font-bold text-lg">
                Decentralization
              </div>
              <span className="text-sm">Operates in a decentralized manner, giving
                power to its community members.</span>
            </div>

          </div>
      </section> */}

      {/* Footer Section */}

      <section
        className="
      from-violet-950 from-10% via-violet-950 via-30% to-background to-90% dark:bg-gradient-to-t "
      >-
        <div className="flex h-1/2 w-full flex-col content-center justify-around gap-80 max-sm:gap-10 py-20 md:flex-row md:items-start  max-sm:items-center">
          <div className="py-5 ">
            <ul>
              <div className="flex">
                <p className="flex pb-6 text-3xl  text-slate-900 dark:text-white  ">
                  <span>
                    <img
                      src="logo.png"
                      alt="logo_image"
                      className="h-20  w-auto sm:h-14 md:h-20 "
                    />
                  </span>
                  <div className="whitespace-pre-wrap ">
                    <h1 className="mt-3 text-lg ">WEBX</h1>

                    <h1 className=" -mt-2 text-2xl font-bold">DAO</h1>
                  </div>
                </p>
              </div>
              <div className="flex gap-5 px-5  ">
                <Link
                  href={siteConfig.links.webxdao_discord}
                  target="_blank"
                  className="dark:fill-white "
                >
                  <Icons.discord
                    className="cursor-pointer transition duration-500 hover:scale-150 hover:fill-blue-800"
                    width={25}
                    height={25}
                  />
                </Link>
                <Link href={siteConfig.links.webxdao_twitter} target="_blank">
                  <Icons.twitter
                    className="cursor-pointer transition duration-500 hover:scale-150 hover:fill-blue-800"
                    width={25}
                    height={25}
                  />
                </Link>
                <Link href={siteConfig.links.webxdao_gh} target="_blank">
                  <Icons.gitHub
                    className="cursor-pointer transition duration-500 hover:scale-150 hover:fill-blue-800"
                    width={25}
                    height={25}
                  />
                </Link>
                <Link href={siteConfig.links.webxdao_linkedin} target="_blank">
                  <Icons.linkedin
                    className="cursor-pointer transition  duration-500 hover:scale-150 hover:fill-blue-800"
                    width={25}
                    height={25}
                  />
                </Link>
              </div>
            </ul>
          </div>

          <div className="flex   ">
            <div className="p-5  ">
              <ul>
                <p className="select-none pb-3 text-xl font-normal text-slate-900 dark:text-white">
                  About Us
                </p>
                <li className="cursor-pointer pb-2 text-base font-normal text-gray-500">
                  Who we are?
                </li>
                <li className="cursor-pointer pb-2 text-base font-normal text-gray-500">
                  What we do?
                </li>
                <li className="cursor-pointer pb-2 text-base font-normal text-gray-500">
                  Team WebX
                </li>
              </ul>
            </div>

            <div className="p-5">
              <ul>
                <p className="select-none pb-3 text-xl font-normal text-slate-900 dark:text-white">
                  Contact
                </p>
                <li className="cursor-pointer pb-2 text-base font-normal text-gray-500">
                  Contact us
                </li>
              </ul>
            </div>
            <div className="p-5">
              <ul>
                <p className="select-none pb-3 text-xl font-normal text-slate-900 dark:text-white">
                  Partner
                </p>

                <li className="cursor-pointer pb-2 text-base font-normal text-gray-500">
                  Partner with us
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20 max-sm:mt-4 flex max-sm:flex-col justify-center gap-96 max-sm:gap-1 ">
          <div className=" flex flex-col  items-center pt-4    ">
            <h1 className=" select-none text-base font-medium text-slate-900 dark:text-white max-sm:items-left ">
              © 2023 All rights reserved | Build with ❤ by{" "}
              <span className="cursor-pointer  select-none hover:text-blue-600">WebXDAO </span>
            </h1>
          </div>
          <div className=" pl-36 max-sm:pl-10 max-sm:items-center text-base font-medium text-slate-500 dark:text-white max-sm:text-sm">
            <div className="flex max-sm:flex-col max-sm:items-center ">
              <div className="flex  pt-3 max-sm:ml-18  ">
                Powered by
                <img src="Footlogo1.png" alt="logo_image" className=" -mt-2" />
                <img src="Footlogo2.png" alt="logo_image" className=" h-6 " />
              </div>
              <div className="p-2  ">
                <a className=" px-8 hover:text-blue-600 ">Terms</a>
                <a href="#" className="px-8 hover:text-blue-600">
                  Privacy
                </a>
                <a href="#" className="px-8 hover:text-blue-600">
                  Cookies
                </a>
              </div>
            </div>
          </div>
           
        </div>
      </section>
       <ScrollToTopButton />
    </>
  );
}

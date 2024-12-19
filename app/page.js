'use client';
import Image from "next/image";
import LOGO from "./resources/logo/forcemc.png";
import STATS from './components/ServerStatus';
import JOINNOW from './components/JoinNow';
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 mt-20 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image src={LOGO} alt="Logo" width={200} height={200} className="hover:scale-110 transition-all" />
      <div className="w-full h-full flex flex-row items-center justify-center justify-items-center gap-5">
        <div className="bg-zinc-900 w-52 h-full mt-20 p-2 text-center bg-opacity-40">
          <div className="mt-5">
            <STATS/>
          </div>
        </div>
        <div className=" flex flex-col h-full mt-20">
          <div className="bg-zinc-900 p-5 text-center bg-opacity-40 gap-10 space-x-5">
            <a href="https://quaterizers-organization.gitbook.io/forcesmp">Wiki</a>
            <a href="https://map.forcemc.org/">Map</a>
          </div>
          <div className="bg-zinc-900 h-full mt-5 p-5 items-center justify-center content-center bg-opacity-40">
            <section className="mt-5">
              <h1 className="text-5xl">ForceMC</h1>
              <p>ForceMC is a Minecraft Server for Survival Without Grief Open By Asher Rise in October 2024</p>
            </section>
            <section className=" ml-5 mt-5">
              <ul className=" list-disc gap-20">
                <li>
                  <h1 className=" text-2xl font-bold">
                    Feel Like Vanilla Survival
                  </h1>
                  <p className="font-normal">
                    Pure Vanilla Feel like! No Starter Kit Everything you see in ForceMC is 100% Made in Survival
                  </p>
                  <p className="font-normal">
                    And Without Fly Rank!
                  </p>
                </li>
                <li>
                  <h1 className=" text-2xl font-bold">
                    Friendly Player
                  </h1>
                  <p className="font-normal">
                    ForceMC has a Friendly Moderator Everyone Feel Happy To Help you
                  </p>
                </li>
                <li>
                  <h1 className=" text-2xl font-bold">
                    Not Grief policy Support
                  </h1>
                  <p className="font-normal">
                    We Has A Land Claim to help you from griefer and
                  </p>
                  <p className="font-normal">
                    We Has Tool To check who grief your house and we can roll it back
                  </p>
                  <p className="font-normal">
                    Server will AutoSave every 30 Minutes
                  </p>
                  <p className="font-normal">
                    All Bans is Permanent Bans
                  </p>
                </li>
              </ul>
            </section>
            <iframe className="mx-auto mt-10 w-full" src="https://discord.com/widget?id=1291334734957379654&theme=dark" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
          
        </div>
        <div className="bg-zinc-900 w-52 h-full mt-20 p-2 text-center bg-opacity-40">
          <div className="mt-5 flex flex-col">
            <JOINNOW/>
          </div>
        </div>
      </div>
    </div>
  );
}
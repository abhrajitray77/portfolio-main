import Navbar from "@/components/Navbar";
import Image from "next/image";
import test from "../public/imgs/profile-pic.webp";
import propic from "../public/imgs/profile-pic3.png";

export default function Home() {
  return (
    <main className="">
      <Navbar />

      <section className="h-auto w-auto">
        <div className="relative flex p-20 pt-5 ">
          <div className="p-6 h-[350px] w-[350px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
            <Image
              className="drop-shadow-2xl"
              src={propic}
              height={1000}
              width={1000}
              alt="propic"
            />
          </div>
          <div className="absolute bottom-0 md:left-[400px] md:top-20 lg:left-[450px] lg:top-20 flex-col 
          font-mono leading-none font-extrabold">
              <h1 className="text-[4rem] md:text-[6rem]">ABHRAJIT</h1>
            <h1 className="text-[3.8rem] md:text-[5.8rem]">RAY</h1>
          </div>
        </div>
      </section>

      {/* About me */}
      <article className="mx-10 my-28 md:mx-20 lg:mx-32">
        <section className="h-auto w-auto ">
          <div className="relative flex flex-col">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Welcome to my little corner of the web{" "}
              <span className="text-[40px] md:text-[50px] lg:text-[60px]">!</span>
            </h1>
            <p className="text-2xl font-medium pt-10 leading-relaxed ">
              I&apos;m a frontend web developer who specializes in creating fast
              and scalable websites with responsive design and great UI.
              <br />
              I use Tailwind CSS, React, and Next.js, along with technologies
              like Firebase, Supabase and MongoDB.
              <br />
              <br />
              Let&apos;s connect and work on something cool together!
            </p>
          </div>
          <button className="bg-cyan-800 p-3 rounded-lg text-white mt-6">
            Connect!
          </button>
        </section>

        {/* Skills */}

        <section className="h-auto w-auto">
          <div>
            <h1>Technologies that I love working with --&gt;</h1>
          </div>
          <div>
            <h1>Skills that come in handy --&gt;</h1>
          </div>
        </section>

        {/* Projects */}

        <section></section>

        {/* Contact */}

        <section></section>
      </article>
    </main>
  );
}

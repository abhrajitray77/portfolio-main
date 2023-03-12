import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import test from "../public/imgs/profile-pic.webp";

export default function Home() {
  return (
    <main className="">
      <Navbar />

      <section className="h-screen w-auto">
        <Banner />
      </section>

      {/* About me */}
      <article className="mx-32">
        <section className="h-auto w-auto ">
          <div className="relative flex flex-col">
            <h1 className="text-5xl font-bold">
              Welcome to my little corner of the web{" "}
              <span className="text-[60px]">!</span>
            </h1>
            <p className="text-2xl font-medium pt-10 leading-relaxed ">
              I&apos;m a frontend web developer who specializes in creating fast and
              scalable websites with responsive design and great UI. 
              <br/>
              I use Tailwind CSS, React, and Next.js, along with technologies like
              Firebase, Supabase and MongoDB.
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

        <section>

        </section>

        {/* Projects */}

        <section>

        </section>

        {/* Contact */}
        
        <section>

        </section>
      </article>
    </main>
  );
}

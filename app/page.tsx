import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import test from "../public/imgs/profile-pic.webp"

export default function Home() {
  return (
    <main className="">
      <Navbar />

        <section className="h-screen w-auto">
          <Banner />
        </section>

        {/* About me */}
      <article className="mx-32">
        <section className="h-auto w-auto">
          <div className="relative flex">
            <h1 className="text-5xl font-bold">About Me</h1>
            
          </div>
        </section>
      </article>
    </main>
  )
}

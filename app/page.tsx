import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <article>
        <section className="h-screen w-auto">
          <Banner />
        </section>
      </article>
    </main>
  )
}

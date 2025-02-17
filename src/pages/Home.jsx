import Hero from "../components/Hero";
import Navbar from "../components/Navbar";


export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            {/* <div className="px-3 md:px-10 lg:px-36 max-w-[1500px] mx-auto">
                <Trending />
                <HowItWorks />
                <FAQs />
            </div>
            <Footer /> */}
        </main>
    )
}
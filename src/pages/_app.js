import "@/styles/globals.css";
import Navbar from "/components/Navbar";
import Hero from "/components/Hero";
import SocialPlatforms from "/components/SocialPlatforms";
import Classes from "/components/Classes";
import SectionFive from "/components/SectionFive";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialPlatforms />
      <Classes />
      <SectionFive />
      <Component {...pageProps} />
    </>
  );
}
import "@/styles/globals.css";
import Navbar from "/components/Navbar";
import Hero from "/components/Hero";
import SocialPlatforms from "/components/SocialPlatforms";
import Classes from "/components/Classes";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialPlatforms />
      <Classes />
      <Component {...pageProps} />
    </>
  );
}
import "@/styles/globals.css";
import Navbar from "/components/Navbar";
import Hero from "/components/Hero";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Hero />
      <Component {...pageProps} />
    </>
  );
}
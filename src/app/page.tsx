import About from "@/components/About/page";
import Footer from "@/components/footer/page";
import Gallery from "@/components/gallery/page";
import Header from "@/components/header/page";
import Navbar from "@/components/Navbar/page";
import CurrencyTable from "@/components/tabel/page";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <CurrencyTable/>
      <Gallery/>
      <Footer/>
    </>
  );
}

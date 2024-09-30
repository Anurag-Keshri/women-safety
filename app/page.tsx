import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Hero from "./home/Hero";
import EmergencyServices from "./home/EmergencyServices";
import SelfDefenseTips from "./home/SelfDefenseTips";
import ProtectiveProducts from "./home/ProtectiveProducts";
import Articles from "./home/Articles";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <EmergencyServices />
      <SelfDefenseTips />
      <ProtectiveProducts />
      <Articles />
      <Footer />
    </div>
  );
}

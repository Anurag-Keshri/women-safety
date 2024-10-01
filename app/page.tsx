import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "./home/hero";
import EmergencyServices from "./home/emergency-services";
import SelfDefenseTips from "./home/self-defense";
import ProtectiveProducts from "./home/products";
import Articles from "./home/articles";

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

import Banner from "@/components/home/Banner";
import AvailableCars from "@/components/home/AvailableCars";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";

export const metadata = {
  title: "DriveFleet - Rent Your Dream Car",
  description: "Find and book the perfect car for your journey",
};

export default function Home() {
  return (
    <main>
      <Banner />
      <AvailableCars />
      <WhyChooseUs />
      <HowItWorks />
    </main>
  );
}
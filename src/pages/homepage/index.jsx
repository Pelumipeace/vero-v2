import WhyUs from "./component/why Us";
import Network from "./component/network";
import SlideSection from "./component/slide section";
import HearUs from "../contact/component/hearUs";
import Faq from "../../components/faq";
import HeroSection from "./component/heroSection";

function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <WhyUs />
      <SlideSection />
      <Network />
      <HearUs />
      <Faq />
    </div>
  );
}

export default HomePage;

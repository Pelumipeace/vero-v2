import HeroSection from "./component/hero Section";
import WhyUs from "./component/why Us";
import Network from "./component/network";
import SlideSection from "./component/slide section";
import HearUs from "../contact/component/hearUs";
import Faq from "../../components/faq";

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

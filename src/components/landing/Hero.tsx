import { poppinsRegular } from "@/app/fonts";
import Button from "@/components/shared/button";
import HeroText from "@/components/shared/HeroText";

const Hero = () => {
  return (
    <>
      <div className="hero home-hero h-screen">
        <div className="pt-48 w-4/6 mx-auto flex flex-col items-start">
          <HeroText span={"We're here to help you"} heading={"Relax & Rest"} />
          <span className={`${poppinsRegular} text-lg pt-4 pb-6 text-primary`}>
            With the aid of our Melatonin Sleepstiq, we can assure you that you
            can <br /> get quality sleep.
          </span>
          <Button text={"Visit Shop"} />
        </div>
      </div>
    </>
  );
};

export default Hero;

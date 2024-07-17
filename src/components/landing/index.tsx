import Hero from "./Hero";
import "@/style/landing.css";
import Partners from "./Partners";
import Customers from "./Customers";
import Testimonials from "../general/testimonial/Testimonials";
import Product from "../general/Product";

const Landing = () => {
  return (
    <>
      <Hero />
      <div className="relative pl-[154px] flex flex-col">
        <Partners />
        <Customers />
        <Testimonials />
      </div>
      <Product />
    </>
  );
};

export default Landing;

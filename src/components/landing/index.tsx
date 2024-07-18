import Hero from "./Hero";
import "@/style/style.css";
import Partners from "./Partners";
import Customers from "./Customers";
import Testimonials from "../general/testimonial";
import Product from "../general/Product";
import Mission from "./Mission";
import Shop from "./Shop";
import Review from "./review";

const Landing = () => {
  return (
    <>
      <Hero />
      <div className="relative md:pl-44 flex flex-col">
        <Partners />
        <Customers />
        <Testimonials />
      </div>
      <Product />
      <Mission />
      <Shop />
      <Review />
    </>
  );
};

export default Landing;

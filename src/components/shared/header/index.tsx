import { poppinsBold } from "@/app/fonts";

const Header = ({ text }: { text: String }) => {
  return (
    <>
      <h1 className={`${poppinsBold.className} text-4xl text-primary`}>
        {text}
      </h1>
    </>
  );
};

export default Header;

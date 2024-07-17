import { open_sans } from "@/app/fonts";

const Button = ({ text }: { text: String }) => {
  return (
    <>
      <button
        className={`${open_sans.className} bg-secondary text-sm text-white px-20 py-4 rounded-md`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;

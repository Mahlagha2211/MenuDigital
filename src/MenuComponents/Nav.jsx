import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="  h-28 py-2 sm:px-8 px-6 flex justify-between items-center  shadow-[0_0_10px_black] bg-[#696a6d] text-[#f8f4f0] relative z-10 ">
      <img src="/logo.png" alt="" className="rounded-full h-full max-sm:h-17" />
      <Link
        to="/"
        className="px-5 py-1 rounded-lg border-b-1 border-t-1   md:text-[20px] max-[500px]:text-[13px]"
      >
        Home
      </Link>
    </div>
  );
}

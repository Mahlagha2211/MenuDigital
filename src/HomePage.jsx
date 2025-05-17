import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center overflow-hidden ">
      <div className="absolute w-full h-full  bg-[url('/coffee.jpg')] bg-cover bg-center  brightness-50"></div>
      <div className="drop-shadow-2xl w-4/5  flex flex-col justify-between mt-20">
        <div className="text-white w-full  space-y-5  ">
          <div className="flex  " data-aos="fade-right">
            <p className="sm:tracking-[20px] tracking-[15px]  max-[540px]:tracking-[10px] max-[470px]:tracking-[7px] max-[370px]:tracking-[12px] ">
              Filosopi Kopi
            </p>
            <p className="max-[450px]:hidden">____________________</p>
          </div>
          <div
            className="sm:text-5xl text-[40px] max-[450px]:text-[35px]  flex space-x-4 max-[370px]:space-x-2"
            data-aos="fade-up"
          >
            <p className="bg-linear-to-b from-[rgb(177,159,145,0.5)] via-[rgba(177,159,145,0.3)]  h-72 p-2">
              Caffee
            </p>
            <p className="pt-2">lovers</p>
          </div>
        </div>

       
      </div>
       <Link
          data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          to="/menu"
          className="w-4/5 absolute bottom-25 rounded-lg bg-[rgba(177,159,145,0.8)] text-center py-2 text-2xl cursor-pointer"
        >
          Menu
        </Link>
    </div>
  );
}

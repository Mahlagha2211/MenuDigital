import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Category() {
  const categories = [
    {
      title: "breakfast",
      img: "/icons/utensils-crossed.svg",
      to: "/menu/breakfast",
    },
    { title: "pizza", img: "/icons/pizza.svg", to: "/menu/pizza" },
    { title: "burger", img: "/icons/hamburger.svg", to: "/menu/burger" },
    { title: "steak", img: "/icons/beef.svg", to: "/menu/steak" },
    { title: "sandwich", img: "/icons/sandwich.svg", to: "/menu/sandwich" },
    { title: "salad", img: "/icons/salad.svg", to: "/menu/salad" },
    { title: "chicken", img: "/icons/drumstick.svg", to: "/menu/chicken" },
    { title: "cake", img: "/icons/cake-slice.svg", to: "/menu/cake" },
    { title: "coffee", img: "/icons/coffee.svg", to: "/menu/soup" },
    { title: "cup-soda", img: "/icons/cup-soda.svg", to: "/menu/sushi" },
  ];

  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const scrollByAmount = (amount) => {
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="w-full sticky top-0 bg-[#b19f91] shadow-[0_0_1px_gray] backdrop-blur-3xl">
      <div className="relative w-[80%] max-[500px]:w-[78%] max-[420px]:w-[72%]    mx-auto">
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={() => (isDragging.current = false)}
          onMouseUp={() => (isDragging.current = false)}
          onMouseMove={handleMouseMove}
          className="overflow-x-auto whitespace-nowrap py-6 scrollbar-hide flex md:gap-x-8 gap-x-4"
        >
          <button
            onClick={() => scrollByAmount(-200)}
            className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scrollByAmount(200)}
            className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow"
          >
            <FaChevronRight />
          </button>
          {categories.map((item) => (
            <NavLink
              key={item.title}
              to={item.to}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-[rgba(248,244,240,0.5)]" : ""
                } relative flex flex-col justify-center items-center min-w-20 !h-16 transition duration-200 rounded-lg`
              }
            >
              <img src={item.img}  alt={item.title} />
              <p>{item.title}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

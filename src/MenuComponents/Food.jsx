import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function Food() {
  const { category } = useParams();
  const [modalopen, setModalOpen] = useState(false);
  const [selecteditem, setSelecteditem] = useState(null);

  const fetchedFood = async () => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`
    );

    return response.data.meals;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["myData", category],
    queryFn: fetchedFood,
  });
  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-[500px] bg-[#48494b]">
        <BeatLoader size={15} />
      </div>
    );
  if (isError) return <p>خطا: {error.message}</p>;
  return (
    <div className=" sm:p-8 px-6  py-8 space-y-7   !min-h-[500px] bg-[#48494b]">
      <p className="text-[40px] max-md:text-[30px] max-[450px]:!text-[25px] text-center bg-[#b19f91] rounded-2xl font-light text-shadow-[1px_1px_0_black]">
        {category}
      </p>
      <div className="grid md:grid-cols-2 items:!grid-cols-3  gap-x-5 gap-y-7 ">
        {data.map((item) => (
          <div
            key={item.idMeal}
            onClick={() => {
              setSelecteditem(item);
              setModalOpen(true);
            }}
            className="cursor-pointer  rounded-2xl p-3 flex gap-x-3 bg-[rgba(177,159,145,0.5)] text-[#1c1c1c] gap-y-2"
          >
            <img
              src={item.strMealThumb}
              className="h-30 object-cover rounded-2xl"
              alt=""
            />
            <div className=" flex flex-col justify-center gap-y-3 ">
              <p className="text-[18px] max-[500px]:text-[15px] text-shadow-[0px_1px_1px_black]">
                {item.strMeal.slice(0, 15)}
              </p>
              <p className="text-[13px] max-[500px]:text-[11px]">
                {item.strIngredient1},{item.strIngredient2},
                {item.strIngredient3}
              </p>
              <p className="font-bold ">11.99 $</p>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalopen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Food Modal"
        className="max-w-md w-[80%] mx-auto mt-32 bg-[#b19f91]  rounded-xl outline-none p-2 shadow-[0_0px_30px_black] "
        overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-center z-50"
      >
        {selecteditem && (
          <div className="space-y-3">
            <RxCross2
              className="cursor-pointer"
              onClick={() => setModalOpen(false)}
            />
            <img
              src={selecteditem.strMealThumb}
              alt={selecteditem.strMeal}
              className="h-50 w-full rounded-lg "
            />
            <div className="space-y-3 p-3">
              <h2 className="text-xl font-bold text-center">
                {selecteditem.strMeal}
              </h2>

              <p className="text-sm text-center text-gray-700">
                Ingredients: {selecteditem.strIngredient1},{" "}
                {selecteditem.strIngredient2}, {selecteditem.strIngredient3}
              </p>
              <p className="font-bold text-center text-lg ">$11.99</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

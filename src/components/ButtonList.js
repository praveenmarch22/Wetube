import { categories } from "../utils/constants";

const ButtonList = () => {
  return (
    <div className=" mt-3 w-[1200px]">
      <div className="flex  overflow-x-scroll flex-2 w-full mt-3 mx-auto [&::-webkit-scrollbar]:hidden">
        {categories.map((button, index) => (
          <button
            className=" px-4 py-1 mx-1 bg-gray-100 rounded-lg"
            key={index}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;

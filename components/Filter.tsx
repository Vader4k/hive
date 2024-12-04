import { IoIosArrowDown } from "react-icons/io";

const Filter = () => {
  return (
    <div className="w-full flex items-center pt-3 px-5 justify-between">
      <span className="font-bold text-base">
        Public Stories
      </span>
      <button className="inline-flex items-center gap-3 font-bold text-sm px-3  py-1.5 bg-gray-600/30 rounded-full">
        <span>Snap Views</span>
        <IoIosArrowDown />
      </button>
    </div>
  )
}

export default Filter
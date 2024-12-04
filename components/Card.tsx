import Image from "next/image";
import { IoPlay } from "react-icons/io5";

interface props {
  stories: number;
  img: string;
  views: number;
}

const Card = ({ stories, img, views }: props) => {
  return (
    <div className="w-full max-w-[150px] h-full min-h-[210px] max-h-[210px] relative rounded-xl overflow-clip">
      <Image
        alt="stories"
        src={img}
        width={100}
        height={100}
        className="w-full h-full object-cover z-0"
      />
      <div className="absolute right-2 z-[5] text-white bg-black/50 rounded-full text-center top-2 size-5 text-[0.7rem] flex items-center justify-center">
        {stories}
      </div>
      <div className="z-[5] absolute flex items-center gap-2 bottom-2 left-1/2 -translate-x-1/2 bg-white text-black/60 px-2 py-0.5 rounded-full text-sm">
        <IoPlay />
        <span className="font-bold">{views.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default Card;

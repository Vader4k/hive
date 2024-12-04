import Image from "next/image";

const Breadcrumbs = () => {
  return (
    <div className="px-3 pt-5 pb-2 flex items-center justify-between text-lg font-bold border-b-[4px] border-black">
      <button>
        <Image src="/back.png" alt="back" width={20} height={20} />
      </button>
      <span>Public Stories</span>
      <button>
        <Image src="/alert.png" alt="alert" width={20} height={20} />
      </button>
    </div>
  );
};

export default Breadcrumbs;

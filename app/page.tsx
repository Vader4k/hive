import Breadcrumbs from "@/components/Breadcrumbs";
import Filter from "@/components/Filter";
import Navbar from "@/components/Navbar";
import Prev from "@/components/Prev";
import React from "react";
import { publicStories } from "@/lib/data";
import Card from "@/components/Card";

const page = () => {
  return (
    <div className="bg-[#121212] max-w-md mx-auto w-full text-white pb-5">
      <Navbar />
      <Prev />
      <Breadcrumbs />
      <Filter />
      <div className="grid grid-cols-3 gap-2 mt-4 px-4 max-h-[80vh] overflow-y-scroll bar">
        {publicStories.map((story) => (
          <Card
            key={story.id}
            img={story.img}
            views={story.views}
            stories={story.stories}
          />
        ))}
      </div>
    </div>
  );
};

export default page;

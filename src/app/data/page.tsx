import { MovieType } from "@/util/Type";
import { Card } from "../components/Card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
async function Upcoming() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
  );
  const data = await response.json();
  console.log("mni server", data);
  return (
    <div className="flex flex-col m-auto ">
      <div className="flex justify-between p-[50px]">
        <h1 className="text-[24px] ml-[50px] font-semibold">Up coming</h1>
        <Link
          href="/category/upcoming"
          className="flex  text-[14px] p-[8px] mr-[50px] gap-[8px] font-medium"
        >
          See more <ArrowRight />
        </Link>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {data.results?.map((movie: MovieType, index: number) => {
          return <Card key={index} movie={movie} index={index} />;
        })}
      </div>
    </div>
  );
}
export default Upcoming;

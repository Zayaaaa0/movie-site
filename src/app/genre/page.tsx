import { TOKEN } from "@/util/constants";
// import { useSearchParams } from "next/navigation";
import { Card } from "../components/Card";
import { MovieType } from "@/util/Type";
import Allgenres from "../components/Allgenres";
import Genre from "../components/Genre";
import response from "@/util/response";
import { GenreType } from "@/util/Type";
import Link from "next/link";
import { Toggle } from "@radix-ui/react-toggle";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default async function Popular({ searchParams }: { searchParams: any }) {
  const { genreIds, page } = searchParams;
  //   const searchParams = useSearchParams();
  //   const page = searchParams.get("page2");
  //   const genreIds = searchParams.get("genreIds");

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreIds}&page=1`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  console.log("GENRE", data);
  const genreData = await response("/genre/movie/list?language=en");
  const genreMovies = genreData.genres;
  console.log("genre moveis", genreMovies);
  return (
    <div className="p-[26px]">
      <p className="text-[30px] font-semibold">Search filter</p>
      <div className="flex gap-5">
        <div className="w-screen h-[352px] gap-[10px] flex flex-col ">
          <div>
            <h1 className="text-[24px] font-semibold">Genres</h1>
            <div className="text-[16px]">See list of movies by genre</div>
          </div>

          <div className="border-[#27272A] my-2"></div>

          <div className="flex flex-wrap gap-4">
            {genreMovies?.map((genre: GenreType, index: number) => {
              return (
                <Link href={`/genre?genreIds=${genre.id}`} key={genre.id}>
                  <Badge
                    variant="outline"
                    className="px-2 py-1 hover:bg-black hover:text-white transition"
                  >
                    {genre.name} <ChevronRight className="w-4 h-4" />
                  </Badge>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-[32px] border-l-2">
          <h2 className="font-semibold text-[20px] ml-6">
            {data.total_results} titles
          </h2>
          <div className="flex flex-wrap gap-[48px] justify-end  ">
            {data.results?.map((movie: MovieType, index: number) => {
              return <Card key={index} movie={movie} index={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

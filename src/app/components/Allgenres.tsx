import { GenreType } from "@/util/Type";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Toggle } from "@radix-ui/react-toggle";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Allgenres = ({ genreMovies }: { genreMovies: GenreType[] }) => {
  return (
    <Card className="-left-9 p-5 absolute rounded-md w-[537px] h-[260px]">
      <h1 className="text-[24px] font-semibold">Genres</h1>
      <div className="border-b-2 mb-[10px]">See list of movies by genre</div>
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
    </Card>
  );
};

export default Allgenres;

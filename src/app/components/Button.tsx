import { Button } from "@/components/ui/button";
import response from "@/util/response";
import { GenreType } from "@/util/Type";
import Allgenres from "./Allgenres";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Genre = async ({ genreMovies }: { genreMovies: GenreType[] }) => {
  const genreData = await response("/genre/movie/list?language=en");
  const genreMovie = genreData.genre;
  console.log(genreMovie);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button></Button>
      </PopoverTrigger>
      <PopoverContent>
        <Allgenres genreMovies={genreMovies} />
      </PopoverContent>
    </Popover>
  );
};

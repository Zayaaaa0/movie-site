import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Allgenres from "./Allgenres";
import { ChevronDown } from "lucide-react";
import response from "@/util/response";

const Genre = async () => {
  const genreData = await response("/genre/movie/list?language=en");
  const genreMovies = genreData.genres;
  console.log("genre moveis", genreMovies);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"}>
          <ChevronDown />
          Genre
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <Allgenres genreMovies={genreMovies} />
      </PopoverContent>
    </Popover>
  );
};
export default Genre;

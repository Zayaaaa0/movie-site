import Link from "next/link";
import { MovieType } from "@/util/Type";

export const Card = async ({
  movie,
  index,
}: {
  movie: MovieType;
  index: number;
}) => {
  return (
    <Link href={`/detail/${movie.id}`} key={index}>
      <div>
        <img
          className="h-[340px] w-[230px] rounded-t-lg "
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt=""
        />
      </div>
      <div className="grid bg-secondary h-[95px] rounded-b-lg ">
        <div className="flex gap-2 pl-2">
          <img src="/star1.svg" alt="" className="w-[16px] h-[16px] mt-1" />
          <p>{movie?.vote_average.toFixed(1)}/10</p>
        </div>
        <div className="h-[56px] w-[200px]">
          <p className="truncate text-ellipsis  pl-2 text-[18px]">
            {movie?.original_title}
          </p>
        </div>
      </div>
    </Link>
  );
};

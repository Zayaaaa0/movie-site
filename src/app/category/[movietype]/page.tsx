import { Card } from "@/app/components/Card";
import { MovieType } from "@/util/Type";
import { TOKEN } from "@/util/constants";
import { MoreLike } from "@/app/components/MoreLike";
const Movie = async (props: {
  params: Promise<{ movietype: string; movieid: string }>;
}) => {
  const params = await props.params;
  const movietype = await params.movietype;
  const movieid = await params.movieid;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movietype}?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  console.log("lol", data);
  const Similar = await fetch(
    `https://api.themoviedb.org/3/movie/${movieid}/similar?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const Morelike = await Similar.json();
  console.log("lhhvgvkjbbbk", Morelike);

  return (
    <div className="flex flex-col w-[1280px] m-auto  ">
      <div className="flex flex-wrap  gap-5 justify-center  ">
        {data.results?.map((movie: MovieType, index: number) => {
          return <Card movie={movie} index={index} />;
        })}
      </div>
      <div>
        <h1>More like this</h1>
        <div className="flex justify-center gap-[32px]">
          {Morelike.results
            ?.slice(0, 5)
            .map((result: MovieType, index: number) => {
              return <MoreLike key={index} result={result} index={index} />;
            })}
        </div>
      </div>
    </div>
  );
};
export default Movie;
// import { MovieType } from "@/util/Type";
// import Link from "next/link";
// import { TOKEN } from "@/util/constants";

// import { MoreLike } from "@/app/components/MoreLike";

// export const MoreLikeThis = async ({
//   result,
//   index,
//   movieid,
// }: {
//   result: MovieType;
//   index: number;
//   movieid: string;
// }) => {
//   const Similar = await fetch(
//     `https://api.themoviedb.org/3/movie/${movieid}/similar?language=en-US&page=1`,
//     {
//       headers: {
//         Authorization: `Bearer ${TOKEN}`,
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   const Morelike = await Similar.json();
//   console.log("lhhvgvkjbbbk", Morelike);
//   return (
//     <Link href={`/detail/${result.id}`} key={index}>
//       <div>
//         <img
//           className="h-[340px] w-[230px] rounded-t-lg "
//           src={`https://image.tmdb.org/t/p/original/${result?.poster_path}`}
//           alt=""
//         />
//       </div>
//       <div className="grid bg-secondary h-[95px] rounded-b-lg ">
//         <div className="flex gap-2 pl-2">
//           <img src="/star1.svg" alt="" className="w-[16px] h-[16px] mt-1" />
//           <p>{result?.vote_average.toFixed(1)}/10</p>
//         </div>
//         <div className="h-[56px] w-[200px]">
//           <p className="truncate text-ellipsis  pl-2">
//             {result?.original_title}
//           </p>
//         </div>
//       </div>
//       <div className="flex flex-wrap gap-5 justify-center">
//         {Morelike.results?.map((result: MovieType, index: number) => {
//           return <MoreLike key={index} result={result} index={index} />;
//         })}
//       </div>
//     </Link>
//   );
// };

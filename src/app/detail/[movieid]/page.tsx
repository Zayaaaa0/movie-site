// import { TOKEN } from "@/util/constants";
// import { Button } from "@/components/ui/button";
// import { MovieType } from "@/util/Type";

// export default async function MoviePage(props: {
//   params: Promise<{ movieId: MovieType }>;
// }) {
//   const { movieId } = await props.params;
//   const response = await fetch(
//     `https://api.themoviedb.org/3/movie/${movieId}?language=en-US `,
//     {
//       headers: {
//         Authorization: `Bearer ${TOKEN}`,
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   const data = await response.json();
//   console.log(data);
//   const result = await fetch(
//     `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
//     {
//       headers: {
//         Authorization: `Bearer ${TOKEN}`,
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   const type = await result.json();
//   console.log("hjkhjlkhj", type);

//   return (
//     <div className="flex-col justify-center">
//       <div className="flex justify-between items-center">
//         <div>
//           <p className="font-bold text-[36px]">{data?.original_title}</p>
//           <p className="text-[18px]">{data?.release_date}</p>
//         </div>
//         <div>
//           <p className="font-medium">Rating</p>
//           <div className="flex gap-[4px]">
//             <img
//               src="/star1.svg"
//               alt=""
//               className="w-[28px] h-[28px] mt-[10px]"
//             />
//             <div>
//               {/* <p className="text-[18px] font-semibold ">
//                 {data?.vote_average.toFixed(1)}/10
//               </p> */}
//               <p className="text-[12px] text-[#71717A] font-normal">
//                 {data?.vote_count}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex h-[428px] gap-[32px] justify-center">
//         <img
//           src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
//           alt=""
//           className="w-[290px]"
//         />
//         <img
//           src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
//           alt=""
//           className="w-[760px]"
//         />
//         <div className="flex">
//           <img src="/play.svg" alt="" className="w-[40px] h-[40px] bg-white" />
//           <p>Play trailer </p>
//         </div>
//       </div>
//       <div className="flex gap-[20px]">
//         {data?.genres?.map((genre) => (
//           <p
//             className=" border-[#E4E4E7] border-2 rounded-full p-[2px]"
//             key={genre.id}
//           >
//             {genre.name}
//           </p>
//         ))}
//       </div>
//       <div className=" flex-col gap-[20px] justify-center">
//         <p>{data?.overview}</p>
//         <div className="flex gap-[53px]">
//           <p className="text-[16px] font-bold">Director</p>
//           {type?.crew
//             ?.filter((crew) => crew.known_for_department === "Directing")
//             .slice(0, 1)
//             .map((crew) => (
//               <p key={crew.id}>{crew.name}</p>
//             ))}
//         </div>
//         <div className="flex gap-[53px]">
//           <p className="text-[16px] font-bold">Writes</p>
//           {type?.crew
//             ?.filter((crew) => crew.known_for_department === "Writing")
//             .slice(0, 1)
//             .map((crew) => (
//               <p key={crew.id}>{crew.original_name}</p>
//             ))}
//         </div>
//         // //{" "}
//         <div className="flex gap-[53px]">
//           // // <p className="text-[16px] font-bold">Stars</p>
//           // //{" "}
//           {type?.cast
//             ?.filter((cast) => cast.known_for_department === "Acting")
//             .slice(0, 5)
//             .map((cast) => (
//               <p key={cast.id}>{cast.name} · </p>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import { TOKEN } from "@/util/constants";
import { Button } from "@/components/ui/button";
import { MovieType } from "@/util/Type";
import Link from "next/link";
import { Play } from "lucide-react";
import { MoreLike } from "@/app/components/MoreLike";
import { ArrowRight } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import { DialogDemo } from "@/app/components/Dialog";
import { Badge } from "@/components/ui/badge";
import { formatRuntime } from "@/util/constants";

export default async function MoviePage(props: {
  params: Promise<{ movieid: string }>;
}) {
  const params = await props.params;
  const movieid = await params.movieid;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieid}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  // console.log(data);
  const Star = await fetch(
    `https://api.themoviedb.org/3/movie/${movieid}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const stardata = await Star.json();
  // console.log(stardata);

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
    <div className="flex-col items-center w-full m-auto max-w-[1080px]">
      <div className="flex justify-between ">
        <div>
          <p className="font-bold text-[36px]">{data?.original_title}</p>
          <p className="text-[18px]">
            {data?.release_date} PG {formatRuntime(data?.runtime)}
          </p>
        </div>
        <div>
          <p className="font-medium">Rating</p>
          <div className="flex">
            <img
              src="/star1.svg"
              alt=""
              className="w-[28px] h-[28px] mt-[10px]"
            />
            <div>
              <p className="text-[18px] font-semibold ">
                {data?.vote_average.toFixed(1)}/10
              </p>

              <p className="text-[12px] text-[#71717A] font-normal">
                {data?.vote_count}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[428px] gap-[32px] justify-center mt-[24px]">
        <img
          src={"https://image.tmdb.org/t/p/w500/" + data?.poster_path}
          alt=""
        />
        <div>
          <img
            className="w-[760px] h-[428px]"
            src={"https://image.tmdb.org/t/p/w500/" + data?.backdrop_path}
            alt=""
          />
          <DialogDemo id={data.id} />
        </div>
      </div>

      <div className="  flex flex-col gap-[20px] mb-[24px] mt-[24px]">
        <div className="flex gap-[20px] ">
          {data?.genres?.map((genre: MovieType, index: number) => (
            <Badge variant="outline" key={index}>
              {genre.name}
            </Badge>
          ))}
        </div>
        <p>{data.overview}</p>

        <div className="flex gap-[53px] border-b-2">
          <p className="text-[16px] font-bold">Director</p>
          {stardata.crew
            ?.slice(0, 1)
            .map((director: MovieType, index: number) => {
              return <p key={index}>{director.name}</p>;
            })}
        </div>

        <div className="flex gap-[53px] border-b-2">
          <p className="text-[16px] font-bold">Stars</p>
          {stardata.cast?.slice(0, 5).map((actor: MovieType, index: number) => {
            return <p key={index}>{actor.name} · </p>;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-[32px]">
        <div className="flex justify-between">
          <h1 className="text-[24px] font-semibold">More like this</h1>
          <Link
            href={`/detail/${data.id}/similar`}
            className="flex  text-[14px] p-[8px]"
          >
            See more <ArrowRight />
          </Link>
        </div>

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
}

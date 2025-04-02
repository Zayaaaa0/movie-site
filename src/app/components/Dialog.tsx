import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TOKEN } from "@/util/constants";
import { Play } from "lucide-react";

export async function DialogDemo({ id }: { id: string }) {
  const trailer = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const Trailer = await trailer.json();
  console.log("tttttt", Trailer);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex absolute top-[510px] left-[540px]  z-2 gap-[12px]">
          <div className="bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center">
            <Play />
          </div>
          <p className="text-white mt-[8px]">Play trailer</p>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${Trailer.results[0]?.key}`}
          title="YouTube video player"
        ></iframe>
      </DialogContent>
    </Dialog>
  );
}

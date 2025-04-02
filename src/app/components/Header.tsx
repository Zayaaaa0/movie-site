import ModeToggle from "@/components/ui/theme-toggle";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Genre from "./Genre";
import SearchInput from "./Search";
import Link from "next/link";

export default function Header() {
  return (
    <div className="justify-around items-center flex mb-[52px] ">
      <Link href="/" className="flex gap-[8px]">
        <img src="/film.png" alt="" className="w-[20px] h-[20px]" />
        <p className="text-[#4338CA] text-[16px]   italic leading-5 tracking-[0.32px] font-bold">
          Movie Z
        </p>
      </Link>
      <div className=" flex gap-[12px]">
        <Genre />
        <div className="flex items-center gap-2 w-[378px] h-[36px] border-[#27272A]">
          <div>
            <img src="/glass.png" alt="" className="w-[16px] h-[16px]" />
          </div>

          <SearchInput />
        </div>
      </div>

      <div>
        <ModeToggle />
      </div>
    </div>
  );
}

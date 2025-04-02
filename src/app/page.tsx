import Image from "next/image";

import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
import Popular from "./components/Popular";

import { CarouselDemo } from "./components/Scroll";

export default async function Home() {
  return (
    <div>
      <CarouselDemo />

      <Upcoming />

      <Popular />

      <TopRated />
    </div>
  );
}

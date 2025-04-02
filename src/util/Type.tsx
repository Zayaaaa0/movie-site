export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  original_title: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  relase_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres: string;
  name: string;
  department: string;
  original_name: string;
  director: string;
  genre: string;
  crew: string;
  d: string;
  cover: boolean;
};
export type GenreType = {
  id: string;
  name: string;
};
export interface Genre {
  id: number;
  name: string;
}

import { useMemo } from "react";
import { MoviesResponseType } from "@/types/apiTypes";
import { MovieDetailsType } from "@/types/dataTypes";

export type AppApi = {
  getMovies: (page: number) => Promise<MoviesResponseType>;
  getTrendingMovies: () => Promise<MoviesResponseType>;
  getUpcomingMovies: (page: number) => Promise<MoviesResponseType>;
  getMovieDetails: (
    movieId: string | null | undefined,
  ) => Promise<MovieDetailsType>;
  searchMovies: (query: string, page?: number) => Promise<any>;
};

const API_HOST = 'https://valorant-api.com/v1/'

function useMoviesApi(): AppApi {
  return useMemo(() => {
    return {
      getAgents: async (page: number) =>
        await fetch
          (`${API_HOST}/discover/movie?page=${page ?? 1}`)
          .then((res) => res),
    };
  }, []) as any;
}

export default useMoviesApi;
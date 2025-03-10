const TMDB_KEY=import.meta.env.VITE_TMDB_KEY


export const API_options={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TMDB_KEY}`
    }
  };

  export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500"


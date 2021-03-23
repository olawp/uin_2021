import client from './client';

const movieFields = `
    title,
    release,
    'actor': actor->name,
`;

export const getMovies = async () => {
    const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`);
    return data;
};
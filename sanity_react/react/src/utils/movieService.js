import client from './client';

const movieFields = `
    title,
    release,
    'image': image{altText, asset->{url}},
    'actor': actor->name
`;

export const getMovies = async () => {
    const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`);
    return data;
};
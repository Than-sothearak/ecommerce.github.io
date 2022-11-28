import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'su6tk04k',
    dataset: 'production',
    apiVersion: '2022-11-10',
    useCdn: true,
    // token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
return builder.image(source);
}
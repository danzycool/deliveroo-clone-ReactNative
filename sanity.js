import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


const sanityClient = createClient({
    projectId: "bd5pugbn",
    dataset: "production",
    useCdn: true,
    apiVersion: '2023-05-03'
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);

// RUN THIS to add exception for localhost 3000 CORS policy
// sanity cors add http://localhost:3000

export default sanityClient;

// Project deployed to "sanity.studio" at:
// https://deliveroo-clone-danzy.sanity.studio/
// by running "sanity deploy" command
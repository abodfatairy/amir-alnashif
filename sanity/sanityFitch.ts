import { createClient, groq } from "next-sanity";
import { about, banner, work, products } from "../types/product"
// import { promises } from "readline";
// import { banner, product } from "../types/product";

const client = createClient({
    projectId: '3drbqba0',

    dataset: 'production',

    apiVersion: '2023-11-08',

    useCdn: true,
});


export async function getAbout(): Promise<about[]> {

    return client.fetch(
        groq`*[_type == "about"]{
            _id,
            _createdAt,
            "image": image[].asset->url,
            details
                }`
    )
}
export async function getProduct(): Promise<products> {

    return client.fetch(
        groq`*[_type == "products"]{
            _id,
            _createdAt,
            "image": image.asset->url,
            details
                }`
    )
}

//

// GET BANNAR
export async function getBannar(): Promise<banner> {
    return client.fetch(

        groq`*[_type == "banner"]{
    _id,
    _createdAt,
    "image": image.asset->url,
    desc,
    buttonText,
    smallText,
    largeText1
        }`

    )

}
// ARABIC BANNER
export async function getBannarAR(): Promise<banner> {
    return client.fetch(

        groq`*[_type == "bannerAR"]{
    _id,
    _createdAt,
    "image": image.asset->url,
    desc,
    buttonText,
    smallText,
    largeText1
        }`

    )

}
// ARABIC WORK
export async function getWrok(): Promise<work[]> {
    return client.fetch(

        groq`*[_type == "work"]{
    _id,
    _createdAt,
    "image": image[].asset->url,
    name,
    "slug": slug.current,
        }`

    )

}
export async function getSingleWork(slug: string): Promise<work> {

    return client.fetch(
        groq`*[_type == "work" && slug.current == $slug][0]{
            _id,
            _createdAt,
            "image": image[].asset->url,
            name,
            "slug": slug.current,
            desc,
                    }`,
        { slug }
    )
}

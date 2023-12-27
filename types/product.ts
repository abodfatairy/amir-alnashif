export type product = {
    _id: string;
    _createdAt: string;
    name: string;
    slug: string;
    image: string | '';
    url: string;
    price: number;
    details: string;
}
export type banner = {
    _id: string;
    _createdAt: string;
    image: string;
    desc: string;
    buttonText: string;
    smallText: string;
    largeText1: string;
}
export type about = {
    _id: string;
    _createdAt: string;
    image: string;
    details: string;
}
export type work = {
    _id: string;
    _createdAt: string;
    image: string;
    name: string;
    slug: string;
    desc: string;

}
export type products = {
    _id: string;
    _createdAt: string;
    image: string;
    details: string;

}
export enum Categories {
    all='All',
    vegeterian='Vegeterian',
    asian='Asian',
    chicken='Chicken'
}

export interface CardType {
    id: number;
    name: string;
    price: number;
    description: string;
    image_url: string;
    category: Categories;
    link: string;
    rating: number;
}
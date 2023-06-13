export class Movie{
    id: number;
    language: string;
    title: string;
    description: string;
    img_path: string;
    date: string;
    rating: number;
    budget?: number;
    website?:string;
    revenue?:number;
    runtime?: number;
    tagline?: string;
    genres?: Array<string>;
}
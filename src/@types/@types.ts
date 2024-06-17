import exp from "constants";

export type IName = {
    first: string;
    middle?: string;
    last: string;
};

export type IAddress = {
    street: string;
    city: string;
    state?: string;
    zip?: string;
    country: string;
    houseNumber: number;
};

export type IImage = {
    alt: string;
    url: string;
};

export type IUserInput = {
    email: string;
    phone: string;
    password: string;
    isBusiness: boolean;
    address: IAddress;
    name: IName;
    image?: IImage;
};

export type IUser = IUserInput & {
    createdAt: Date;
    isAdmin: boolean;
};

export type ILogin = {
    email: string;
    password: string
};

export type IJWTPayload = {
    _id: string,
    isAdmin: boolean,
    isBusiness: boolean
};

export type IProductInput = {
    productName: string;
    subtitle: string;
    productDescription: string;
    price: number;
    color: string;
    sizes: number[];
    model: string;
    ages: number[];
    web: string;
    image: IImage;
    category: "boys" | "girls";
};

export type IProduct = IProductInput & {
    _id: string,
    bizNumber: number,
    createdAt: Date,
    likes: string[],
    ShoppingCart: string[],
    userId: string,
};

export type IIsBusiness = {
    isBusiness: boolean
};    


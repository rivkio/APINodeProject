import _ from "underscore";
import { IProductInput } from "../@types/@types";
import Product from "../db/models/product-model";

const generateBizNumber = async () => {
    //generate random bizNumber:
    while (true) {
        const r = _.random(1_000_000, 9_999_999);
        const dbRes = await Product.findOne({ bizNumber: r });
        if (!dbRes) {
            return r;
        }
    }
};

export const productService = {
    createProduct: async (data: IProductInput, userId: string) => {
        //userId is extracted from the JWT
        const product = new Product(data);
        //assign user id to the product:
        product.userId = userId;
        //generate biz number to the product:
        product.barcode = await generateBizNumber();

        return product.save();
    },


    //get all products
    getAllProducts: async () => Product.find(),

    //get product by id
    getProductById: async (id: string) => Product.findById(id),

    //get all my products
    getProductByUserId: async (userId: string) => Product.find({ userId: userId }),

    //update product
    updateProduct: async (data: IProductInput, userId: string) => {
        return Product.updateOne({ userId: userId }, data);
    },


    toggleShoppingCart: async (userId: string, productId: string) => {
        const product = await Product.findById(productId);
        if (!product) throw new Error("Product not found");

        const isFavorite = product.shoppingCart.includes(userId);
        if (isFavorite) {
            product.shoppingCart = product.shoppingCart.filter(fav => fav.toString() !== userId);
        } else {
            product.shoppingCart.push(userId);
        }
        await product.save();
        return product;
    },



    //delete product
    deleteProduct: async (data, id: string) => Product.findOneAndDelete({ _id: id }, data),
};


import { Schema } from "mongoose";
import { IUser } from "../../@types/@types";
import nameSchema from "./name-schema";
import addressSchema from "./address-schema";
import imageSchema from "./image-schema";


const userSchema = new Schema<IUser>({
    name: nameSchema,
    address: addressSchema,
    image: { type: imageSchema, required: false },
    email: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        maxlength: 300
    },
    phone: {
        type: String,
        required: true,
        minlength: 9,
        maxlength: 11
    },
    // isBusiness: {
    //     type: Boolean,
    //     required: true
    // },
    createdAt: {
        type: Date,
        required: false,
        default: new Date()
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false
    },
    cart: [{
        productId: { type: Schema.Types.ObjectId, ref: 'Product' },
        productName: { type: String },
        price: { type: Number },
    }],
});

export default userSchema;


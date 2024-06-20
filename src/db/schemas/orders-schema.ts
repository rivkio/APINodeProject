import { Schema } from "mongoose";
import { IOrder } from "../../@types/@types";

const ordersSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    // orderDate: { type: Date, required: true },
    products: [{
            productName: { type: String, required: true},
            productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
            quantity: { type: Number, required: true },
        }],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: "Pending" },
    createdAt: { type: Date, default: Date.now },
});

export default ordersSchema;




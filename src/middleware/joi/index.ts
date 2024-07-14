import productJoiSchema from "../../validations/product-schema";
import isBusinessSchema from "../../validations/isBusiness-schema";
import loginSchema from "../../validations/login-schema";
import userSchema, { updateUserSchema } from "../../validations/user-schema";
import { validateSchema } from "./validate-schema";

export const validateUser = validateSchema(userSchema);
export const validateUpdateUser = validateSchema(updateUserSchema);
export const validateLogin = validateSchema(loginSchema);
export const validateProduct = validateSchema(productJoiSchema);
export const validateBusiness = validateSchema(isBusinessSchema);
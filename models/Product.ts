import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  category: string;
  image: string;
  stock: number;
  status: "Published" | "Inactive" | "Out of Stock" | "Draft";
  discount?: string;
  createdAt: Date;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  oldPrice: { type: Number },
  category: { type: String, required: true },
  image: { type: String, required: true },
  stock: { type: Number, required: true, default: 0 },
  status: { type: String, enum: ["Published", "Inactive", "Out of Stock", "Draft"], default: "Draft" },
  discount: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Product = mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
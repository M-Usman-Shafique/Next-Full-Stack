// Defining model & schema to interact with MongoDB database
// Schema: The structure/blueprint of documents within a MongoDB collection e.g. productSchema.
// Model: A constructor function that uses schema to perform CRUD operations on the database. It provides different methods to interact with the MongoDB collection e.g. Product

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  company: String,
  color: String,
  category: String,
});

export const Product =
  mongoose.models.products || mongoose.model("products", productSchema);

// mongoose.models.products: checks if the model "products" already defined in the database collection or not?
// mongoose.model("products", productSchema): creates new model "products" in the collection using schema "productSchema".

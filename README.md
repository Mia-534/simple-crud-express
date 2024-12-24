# Simnple CRUD Express
## Project Overview
This project showcases a simple CRUD application built with Express.js and MongoDB for managing product data. It enables efficient storage, retrieval, and management of product information for an online retailer.
## Feature
<ul>
    <li>Retrieve a list of all products available.</li>
    <li>Retrieve a specific product using their id.</li>
    <li>Register a new product.</li>
    <li>Update a specific product using their id.</li>
    <li>Delete a specific product using their id.</li>
</ul>

## API Endpoints
### General API

1. **GET** `/` - This endpoint retrieves all products in the storage.
2. **GET** `/products/:id` - This endpoint allows users to search for a specific product by its ID. It returns detailed information about the product, including its name, price, quantity.
3. **POST** `/products/:id` - This endpoint creates a product with information like its name, price, quantity.
4. **PUT** `/products/:id` - This endpoint updates a product information.
5. **DELETE** `/products/:id` - This endpoint deletes a product by ID.

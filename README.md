# Ecommerce Backend

## Description
A ecommerce backend implementation that allows users to perform CRUD operations for categories, products and tags. Each product will belong to a category and can have one or more tags. Likewise a category can have multiple products and tag can be associated to multiple products.

## Pre-Requisites
Please ensure you have `node` and `postgres` installed.
## Installation

- Clone the repo
- Run `npm i`
- Create a .env file and add fields: DB_USER, DB_PASSWORD and DB_NAME with the correct values
- Login to your postgress instance and run the sql file as: `\i db/schema.sql` to create the db.
- Run `npm run seed` to create seed data
- Start the run with: `npm run start`
  
## Usage
### Product data
- `GET api/products` - to get list of products
- `GET api/products/{{product_id}}` - to list a single product info
- `POST api/products` - to post a new product. Body should have the fields: `product_name, CategoryId, tagIds, price`.
- `PUT api/products/{{proudct_id}}` - to update a product.  Body should have either of the fields: `product_name, CategoryId, tagIds, price`.
- `DELETE api/products/{{product_id}}` - to delete a product.

### Category data
- `GET api/categories` - to get list of categories.
- `GET api/categories/{{category_id}}` - to list a single category info.
- `POST api/categories` - to post a new category. Body should have the fields: `category_name`.
- `PUT api/categories/{{category_id}}` - to update a category.  Body should have either of the fields: `category_name`.
- `DELETE api/categories/{{category_id}}` - to delete a category.

### Tags data
- `GET api/tags` - to get list of tags.
- `GET api/tags/{{tag_id}}` - to list a single tag info.
- `POST api/tags` - to post a new tag. Body should have the fields: `tag_name`.
- `PUT api/tags/{{tag_id}}` - to update a tag.  Body should have either of the fields: `tag_name`.
- `DELETE api/tags/{{tag_id}}` - to delete a tag.

## License
This project is licensed under the MIT License license. Visit [LICENSE](https://opensource.org/license/mit) for details.




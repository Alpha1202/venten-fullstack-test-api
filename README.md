
Venten Fullstack Test API
=======


## Getting Started
Clone the Repo.
-------------
`git clone https://github.com/Alpha1202/venten-fullstack-test-api.git`

## Prerequisites
The following tools will be needed to run this application successfully:
* Node v10.15.0 or above
* Npm v6.4 or above
* Postgres 9.6.14 or above
* Sequelize ORM
* Cloudinary Account

## Installation
**On your Local Machine**
- Pull the [develop](https://github.com/Alpha1202/venten-fullstack-test-api.git) branch off this repository
- Run `npm install` to install all dependencies
- Run `npm start` to start the app
- Access endpoints on **localhost:4000**
## Running the database migrations
Run `npm run undo:migrate` in the terminal for the cloned folder to undo existing migrations.

Run `npm run migrate` in the terminal for the cloned folder to do migrations.

Run `npm run seed` in the terminal for the cloned folder to add seeds to the database.

---
Deployment:
----------
This Project is hosted on [heroku](https://venten-api.herokuapp.com)


Endpoints:
----------

### Fetch All Products:

`GET api/v1/products?currentPage=1&limit=35`

Returns 3 products by default, provide `currentPage` or `limit` query parameter to filter results

Query Parameters:

Limit number of products (default is 3):

`?limit=3`


### Get One Product

`GET /api/v1/products/:id`

returns a single product

### Add new Product

`POST /api/v1/addproduct`

Example request body:

```source-json
{
  "product": {
    "name": "Iphone",
    "description": "Wonderful Iphone max",
    "price": 345.99,
    "color": "white",
    "catId": 4,
    "image": "https://placeholder.com/150"
  }
}
```
returns the newly added product

Required fields: ALL FIELDS ARE REQUIRED

## Authors
Nzubechukwu Nnamani

## License
N/A

### Acknowledgments
venten 
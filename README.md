# Project Atelier API [![CI](https://github.com/sdc-bareminimum/project-catwalk-related-service/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/sdc-bareminimum/project-catwalk-related-service/actions/workflows/main.yml) [![Coverage Status](https://coveralls.io/repos/github/sdc-bareminimum/project-catwalk-related-service/badge.svg?branch=main)](https://coveralls.io/github/sdc-bareminimum/project-catwalk-related-service?branch=main)

The Hack Reactor System Design Capstone Project. The goal was to replace the existing API (for [Project Catwalk](https://github.com/fec-bareminimum/project-catwalk)) with a backend system that can support the full (retail product) data set for the project and can scale to meet the demands of production level traffic.

## Project Overview:

This projects consists of a Nginx load balancer, a Node/Express server, and a PostgreSQL database. All three are built/run in docker containers and deployed to AWS EC2 instances. This API endpoint has been optimized to handle product level traffic, verified by load testing.

## Resources:

- API Documentation: [Atelier API](https://gist.github.com/trentgoing/d69849d6c16b82d279ffc4ecd127f49f)
- Engineering Journal: [PDF](resources/system_design_project_engineering_journal.pdf) &nbsp; [Markdown](resources/JOURNAL.md) &nbsp; [Google Doc](https://docs.google.com/document/d/1pTTeDCzcKNozd9dljexVn-PrXwzoTBS0hby2dOZ95yw)

## 📦 Technologies:

- [Docker](https://www.docker.com/)
- [AWS EC2](https://aws.amazon.com/ec2/)
- [Postgres](https://www.postgresql.org/)
- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [Axios](https://www.npmjs.com/package/axios)
- [Jest](https://jestjs.io/)

## Setup:

1. Start a Postgres Database
```sh
# Launch Postgress in the terminal
brew services start postgresql
```
```sh
# OR create a docker container
cd postgres_db
docker-compose up -d --build
```

2. Set up the Node/Express server
```sh
$ cd server
$ npm install
$ cp .env.sample .env
```
```env
# Update the DATABASE_URL variable
EXAMPLE_URL=postgresql://<username>:<password><host>:5432/<database>
DATABASE_URL=postgres://postgres:postgres@127.0.0.1:5432/postgres
```

3. Start the Node/Express server
```sh
# Build or Rebuild the Docker Container
$ docker-compose up --build -d
# Run Nodejs commands in the Docker Container
$ docker exec container_name_server_1 npm run test:db:connection
```
```sh
# OR run manually
$ npm run dev
$ npm run test:db:connection
```

## Preformance Results:

#### Target Preformance
**Throughput:** 100 RPS
**Latency:** 2000ms
**Error rate:** <1% rate

#### End Results:
- [x] Throughput: ~400 RPS (Max 5000RPS)
- [x] Latency: ~70ms
- [x] Error rate: <1% rate

## Application Diagram

![EC2 Setup Diagram](resources/images/ec2_setup_diagram.png)

## API Endpoints:

This Express app is serving Product data for a retail web portal. The frontend expects reviews and Q&A data, but that is a seperate service from this (`/products`). Listed below are the endpoints routes built, serving SQL data loaded from `.csv` files.

### Products API
### List Products

`GET /products`
Retrieves the list of products.

Parameters

| Parameter | Type    | Description                                               |
| --------- | ------- | --------------------------------------------------------- |
| page      | integer | Selects the page of results to return.  Default 1.        |
| count     | integer | Specifies how many results per page to return. Default 5. |

Response

`Status: 200 OK `

```json
[
  {
		"id": 1,
		"name": "Camo Onesie",
		"slogan": "Blend in to your crowd",
		"description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
		"category": "Jackets",
		"default_price": "140"
	},
  {
		"id": 2,
		"name": "Bright Future Sunglasses",
		"slogan": "You've got to wear shades",
		"description": "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
		"category": "Accessories",
		"default_price": "69"
	},
  {
		"id": 3,
		"name": "Morning Joggers",
		"slogan": "Make yourself a morning person",
		"description": "Whether you're a morning person or not. Whether you're gym bound or not. Everyone looks good in joggers.",
		"category": "Pants",
		"default_price": "40"
	},
	// ...
]
```

### Product Information

Returns all product level information for a specified product id.

`GET /products/:product_id`

Parameters

| Parameter  | Type    | Description                          |
| ---------- | ------- | ------------------------------------ |
| product_id | integer | Required ID of the Product requested |

Response

`Status: 200 OK `

```json
{
	"id": 11,
	"name": "Air Minis 250",
	"slogan": "Full court support",
	"description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
	"category": "Basketball Shoes",
	"default_price": "0",
	"features": [
  	{
			"feature": "Sole",
			"value": "Rubber"
		},
  	{
			"feature": "Material",
			"value": "FullControlSkin"
		},
  	// ...
	],
}
```

### Product Styles

Returns the all styles available for the given product.

`GET /products/:product_id/styles`

Parameters

| Parameter  | Type    | Description                          |
| ---------- | ------- | ------------------------------------ |
| product_id | integer | Required ID of the Product requested |

Response

`Status: 200 OK `

```json
{
	"product_id": "1",
	"results": [
  	{
			"style_id": 1,
			"name": "Forest Green & Black",
			"original_price": "140",
			"sale_price": "0",
			"default?": 1,
			"photos": [
  			{
					"thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
					"url": "urlplaceholder/style_1_photo_number.jpg"
				},
  			{
					"thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
					"url": "urlplaceholder/style_1_photo_number.jpg"
				}
  			// ...
			],
		"skus": {
                	"37": {
                    		"quantity": 8,
                    		"size": "XS"
                	},
                	"38": {
                    		"quantity": 16,
                    		"size": "S"
                	},
                	"39": {
                    		"quantity": 17,
                    		"size": "M"
                	},
			//...
            	}
	},
  {
		"style_id": 2,
		"name": "Desert Brown & Tan",
		"original_price": "140",
		"sale_price": "0",
		"default?": 0,
		"photos": [
  			{
					"thumbnail_url": "urlplaceholder/style_2_photo_number_thumbnail.jpg",
					"url": "urlplaceholder/style_2_photo_number.jpg"
        }
      // ...
			],
		"skus": {
                	"37": {
                    		"quantity": 8,
                    		"size": "XS"
                	},
                	"38": {
                    		"quantity": 16,
                    		"size": "S"
                	},
                	"39": {
                    		"quantity": 17,
                    		"size": "M"
                	},
			//...
            	}
	},
  // ...
}
```



### Related Products

Returns the id's of products related to the product specified.

`GET /products/:product_id/related`

Parameters

| Parameter  | Type    | Description                          |
| ---------- | ------- | ------------------------------------ |
| product_id | integer | Required ID of the Product requested |

Response

`Status: 200 OK `

```json
[
  2,
  3,
  8,
  7
],
```

---
=======
## Preformance Results:
- [x]**Throughput:** ~400 RPS (Max 5000RPS)
- [x]**Latency:** ~70ms
- [x]**Error rate:** <1% rate

## More Tools

- [CSV Cleaner](https://github.com/sdc-bareminimum/project-catwalk-related-service/tree/csv-cleaner)
  - Seperate branch on Repo
  - Scripts for cleaning `.csv` files
- [k6](https://k6.io/)
  - Local Load testing
  - Cloud load testing
  - Run tests:
  `$ k6 run resources/k6-tests/k6-script.js`

- [Loader.io](https://loader.io/)
  - Cloud load testing

## Extra Links:
- Ticketing System: [Trello Board:](https://trello.com/b/Ua5qkKmA/trello-system-design-capstone)
- Source Code: [GitHub Repo](https://github.com/sdc-bareminimum/project-catwalk-related-service)


---

[spencerlepine.com](https://www.spencerlepine.com) &nbsp;&middot;&nbsp; GitHub [@spencerlepine](https://github.com/spencerlepine) &nbsp;&middot;&nbsp; Twitter [@spencerlepine](http://twitter.com/spencerlepine)

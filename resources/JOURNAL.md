Spencer Lepine

# SDC Engineering Journal and Notes

[ ] Source Code: [GitHub Repo](https://github.com/sdc-bareminimum/project-catwalk-related-service)
[ ] Notes: [Notion](https://www.notion.so/Front-End-Capstone-f9b9572fe78641eea624557e7dffc66)
[ ] Ticketing System: [Trello Board:](https://trello.com/b/Ua5qkKmA/trello-system-design-capstone)

## Contributors

- [Andy Chen](https://github.com/andy-ch3n)
- [Gabrielle Guo](https://github.com/ggbbi)
- [Lawrence Sun](https://github.com/lawsun03)
- [Spencer Lepine](https://github.com/spencerlepine)

## Tech Stack

- [Axios](https://www.npmjs.com/package/axios)
- [Postgres](https://www.postgresql.org/)
- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [Jest](https://jestjs.io/)

## Other Tools

## API Docs

- [Atelier API](https://gist.github.com/trentgoing/d69849d6c16b82d279ffc4ecd127f49f)

Entries and notes taken during the System Design Capstone (Project Catwalk). This was a project completed at Hack Reactor with a team of 4.
These are observations and lessons learned during this project. There were technologies covered that created new challenges throughout development.

Project Catwalk is a MVP client-facing retail web-portal. Browse catalog products with a modern customer experience.

Day 1: 09/27/2021

#### Phase 0:

Read through project material on Learn.
Meet with group, choose services that we will work on -> me: Related Products
Create a GitHub organization and add team members
Create slack group
Create Trello board for ticketing system
Each team member Creates a Repo for their service

#### Phase 1:

DBMS Design and Creation
Select two DBMS technologies (one RDBMS and one NoSQL DBMS)

Compare the databases for this project use case:
NoSQL
SQL

- Reshape data during development for an agile development process
- Easy to scale horizontally by just adding more nodes.
- Lower Disk I/O bottleneck
- Good for unstructured/"schemaless" data
- Can store data already how the API will receive it
- Better for Agile development (no need to update schema and reload - entire SQL database (migrate))
- Cheaper with scale-out approach for large data sets
- Better to scale out for volume of traffic and/or size of data
- Less organized -> different forms of data, not always predefined
- MongoDB supports ACID (atomicity, consistency, isolation, and durability)
- MongoDB also saves documents in a JSON-like format, which means it's very simple to convert queries and results into a format your frontend code understands
- Tabular predefined schemas that must be followed from the start
- Storing product inventory, not a user feed or
- Allows us to run complex SQL queries and work with lots of existing applications based on a tabular, relational data model, PostgreSQL will do the job.
- Usually “scale-up” approach for large data volumes
- Easily connect product tables (styles, info, features) using relations
- Queries for predetermined product IDs will be fast, but we have flexibility to expand

Model the Relational (SQL) Data with [SQL Designer](https://ondras.zarovi.cz/sql/demo/)

Model the NoSQL data:

## Deciding between SQL and NoSQL:

After weighing the benefits of relational and non-relational databases, it is a clear decision that SQL will suit the needs for storing products for this service.

- Storing Product data in a non-relational database will still need to be broken apart. Different endpoints for products will be queried, perhaps more than others. With a relational database, we are able to create multiple tables that are linked. Without relations, it could be difficult to update records without breaking a link.
- transactional integrity is not needed.
- Product information will be heavily READ operations. Users will not be editing these records. We need a way to update records for photos, styles, or sale prices for admins. We can isolate those tables, since you likely wouldn’t update the ENTIRE product (e.g. name, category), just entries for images or styles.
- Complex queries with SQL may be slow and take time to architect/design, but that isn’t an issue. The data is queried with predetermined IDs, which will be closer to constant time.
- Database can be migrated, but the schema is already known.
- Not as scalable? Large online retailers such as Walmart, Best Buy, and Home Depot cluster multiple servers around one store.
- Early stage projects may not have requirements 100% defined, so it’s best to work with SQL to start
- SQL can enable Data Analytics

### Choosing Postgres

Using a SQL database for this project is a great option. Now though, which SQL database technology is the best? My research has led to Postgres.

Postgres is a great tool for serving large databases. It also has many options to scale. It has more tools available, like table inheritance and function overloading.

It supports all needed data types:

- Primitives (int, numeric, boolean, string)
- Structured (date, timestamp, interval, array, range, uuid)
- Documents (JSON, XML, Hstore)
- Geometry (point, line, circle)

Other distinct advantages include:

- Capable of being ACID compliant
- data integrity
- allows basic or advanced indexing
- available security features
- protect against data loss

#### Researching Postgres:

For production: create pool w/ `pgBouncer` so we don’t open client connection EVERY query:
http://www.pgbouncer.org/

Postgres + Node Testing Article Research: https://medium.com/geoblinktech/postgres-and-integration-testing-in-node-js-apps-2e1b52af7ffc

Node DB Testing Article:
https://www.coreycleary.me/know-what-to-test-using-these-recipes-node-service-that-calls-a-database

Read about Docker + Postgres:
https://www.thisdot.co/blog/connecting-to-postgresql-with-node-js

Note: might use Sequelize

Read About Node, Postgres, and Sequelize: https://mherman.org/blog/node-postgres-sequelize/

Read about connecting Docker Image + Postgress + GitHub Actions
https://remarkablemark.org/blog/2021/03/14/setup-postgresql-in-github-actions/

STRUGGLED: Spent hours trying to set up a GitHub action with Postgres. Trying to set up continuous integration with Postgres. Need to connect a USER + PASSWORD to connect to Postgres. Also need to run a `init.sql` to create a table that the test will use.

Docker image can run postgres easily, but the GitHub action on Ubuntu needs a way to access and run a `init.sql` file. SOLVED: created a Docker folder and manually run scripts during the GitHub actions instead of using the docker `postgres` image.

``yml - name: Config Postgress
uses: ./Docker/
with:
postgresql password: example
postgresql init scripts: ../config

````

Day 2:
Today I set up a Postgres database. This database is connected to the sequelize ORM (Object Relational Mapping) tool. I created a TABLE schema with the correct DATA types for the SQL database. I made a `init.sql` to DROP and CREATE all of the tables, and ran this in the postgres database. Then I used the `sequelize-auto` tool to generate `sequelize` model files, which is a slightly different API than pure SQL. That system will make it easy to migrate a schema (paste a new init.sql file in the postgres cli, then generate the new files from `sequelize-auto`).
With a working ORM, I set up basic tests for the Sequelize Models to check the Model properties (row headers of a table). I used [sequelize-test-helpers](https://www.npmjs.com/package/sequelize-test-helpers) to avoid actually connecting to the postgres every test.

Also updated the SQL Schema. Cannot use ARRAYS or SETS, that would be a NoSQL schema.

NOTES:
CREATE Sequelize MODELS:
Take SQL initialization script and convert it to Sequelize
Use  `sequelize-auto` https://github.com/sequelize/sequelize-auto. Take existing SQL CREATE TABLE commands and create sequelize models. This makes it easy to KEEP a init.sql file incase we migrate to another database.
// Run Postgres in terminal ($ psql)
// Initialize the database with `config/init.sql`
// Install `sequelize-auto` https://github.com/sequelize/sequelize-auto
// Run the following command (all one line):
//  $ npx sequelize-auto -h 127.0.0.1 -d postgres -u postgres -x example -p
//        5432  --dialect postgres -c ./config/db.config.js -o ./app/models -t
//        style product styles features skus related photos

Stress Test: use K6?

Read about Sequelize Testing:
https://itnext.io/unit-testing-sequelize-models-made-easy-108f079f1e38
Use `sequelize-test-helpers` to keep from invoking postgres connection

Connect to PostgresQL: https://node-postgres.com/features/connecting
Connecting to PostgreSQL with Node.js: https://www.thisdot.co/blog/connecting-to-postgresql-with-node-js

Express + Sequelize API and unit testing: https://levelup.gitconnected.com/building-an-express-api-with-sequelize-cli-and-unit-testing-882c6875ed59

SQL commands for Sequelize
https://fengmk2.github.io/blog/2014/10/sql-to-sequelize-mapping-chart.html

Use existing SQL Schema of TABLES and relations in Postgres to create `sequelize` compatible files: https://github.com/sequelize/sequelize-auto
npx sequelize-auto -h 127.0.0.1 -d postgres -u postgres -x example -p 5432  --dialect postgres -c ./config/db.config.js -o ./app/models -t products



Day 3:
Now that I have chosen a database, it is time to Perform an ETL Process. I will transfer the full application data set from a CSV file into Postgres.

Challenge:
Clean/transpile the CSV file into a new one, and then import them into the Database all at once afterwards? OR Read the CSV file, clean the data, and input into the database AS we go.

Action:
Look through CSV files, see how data may be “incomplete”. Set up a CSV reader and read sample files. Transform the SQL schema to use foreign keys without a SET of IDs. Found mismatching keys in CSV data. “styleID” camel case gives errors in Postgres. Need to convert this to “style_id” during the ETL process. Fix syntax errors and unterminated string quotes.

Result:
Read the CSV file line-by-line. Generate a clean csv file. Then we can use that file with a Postgres COPY command.

Honestly, I'm really struggling. Running Postgres on my local MacOS. Also tried running the PostgreSQL in a docker image. Getting many errors trying to use the \COPY command.

Day 4:
Failing to load CSV files into my Postgres database. Instead of assuming the data was correct, I had to break the problem down.

- First, I had to verify that the Postgres command line COPY command was using the correct values.
- I also needed to verify my SQL schema matched the CSV headers exactly
- The next idea was to load a sample CSV, which was known good. If the CSV file is correct, then we can focus on narrowing down on the SQL schema or Postgres.
- Next, increase the SQL Schema restrictions. Some column values (e.g. description) have a VAR CHAR(255) length limit, which can throw an error.

That seemed to work! After modifying the SQL schema to extend the rules, and ensuring the







Finished Modeling the data. Finished extracting, transforming and loading the data in Postgres. Add indexes to prepare the database (adjustments/optimizations).

Many things to think about when processing the CSV files.
- Should I combine csv files into one for a single large upload?
- Should I CLEAN the csv data, then copy into Postgres in place? (as we go, line by line)
- Should I generate new CLEAN the csv files, and copy in Postgres separately?
- Should the process stop/fail if a csv file line throws an error?
- Should the cleaning process skip over lines?
- Should I manually query Postgres after reading a csv file line? Or use \COPY
- What to do if column values don’t match up?
- What order should I upload the tables that have foreign key references?
- How much should I transform/filter the data from a query when sending data back to a client from the api endpoint?

SUCCESS! I managed to CLEAN the products.csv file, copy it into	`/tmp`, open the PostgreSQL CLI for the database, and execute the COPY command. Now I can run `SELECT * FROM product` and see all entries.


Read this great article for setting up Express and Sequelize:
https://levelup.gitconnected.com/build-an-express-api-with-sequelize-cli-and-express-router-963b6e274561

Read this great article for Unit Testing Sequelize:
https://levelup.gitconnected.com/building-an-express-api-with-sequelize-cli-and-unit-testing-882c6875ed59

# Create + Test First Enpoint

## Relevant Links:
- [Article](https://levelup.gitconnected.com/building-an-express-api-with-sequelize-cli-and-unit-testing-882c6875ed59) - Express, Sequalize, Unit Tests
- [Question](https://github.com/sequelize/cli/issues/28) - Sequelize Migrations

## New Dependencies 🧰
`npm i sequelize && npm i sequelize-cli sequelize-test-helpers cross-env supertest -D`

## Set up Sequelize
- [x] Organize Database files (`connection.js` + `/models`)
- [x] Create `/seeders`, and `/migrations` folder with `npx sequalize-cli`
- [x] Create `config/config.json` for `sequalize` settings
- [x] Create `config/options.js` to route database folders to `sequalize`
- [x] Added scripts to package.json:

```json
"scripts": {
  "test": "cross-env NODE_ENV=test jest --no-cache --detectOpenHandles --runInBand --forceExit --testTimeout=10000",
  "test:watch": "cross-env NODE_ENV=test jest --no-cache --detectOpenHandles --runInBand --forceExit --testTimeout=10000 --onlyChanged --watch",
  "pretest": "cross-env NODE_ENV=test npm run db:reset",
  "db:create:test": "cross-env NODE_ENV=test npm run sequelize db:create",
  "db:reset": "npm run sequelize db:drop && npm run sequelize db:create && npm run sequelize db:migrate && npm run sequelize db:seed:all",
  "sequelize": "sequelize --options-path=config/options.js",
  "postinstall": "npm run db:create:test && npm run sequelize init:seeders && npm run sequelize init:migrations",
  ...
},
````

#### Useful Commands:

```sh
npx sequelize-cli seed:generate --name projects --options-path=config/options.js
npx sequelize-cli db:seed:all --options-path=config/options.js
```

## Test Enviroment

- [x] Set up test environment to run `sequelize` test postgres database
- [x] Set up `supertest` library in API endpoint test

## Products Controller

- [x] Created `/routes/products/index.js`
- [x] Created `/controllers/products/index.js`

## Connect Server Files

- [x] Build express server routes
- [x] Connect model + controllers + routes + server

## Test New Endpoint

- [x] Create `routes/product/product.test.js`
- [x] Write test assertions:

```js
const request = require('supertest');
const { app } = require('../../index');
...
describe('/products', () => {
    it('should return array', async () => {
      const res = await request(app).get(endpoint);
      expect(res.statusCode).toEqual(200);
      expect(res.body instanceof Array).toBeTruthy();
    });
});
```

NOTES:
How to get the data in AWS? The Postgres data can be backed up. Restore the db on AWS. You can use the psql command line options to interact with a server remotely!

Technologies to use:
Use k6 for stress testing locally.
Use the cloud service stress tester Loader.io (deployed testing)
Throughput is (#successful responses / (#Clients per second \* #Seconds Run))
Use New Relic (a monitoring platform) for local testing (use config file)

Metrics :
Metrics that describe system performance:

Response time: (aka latency): how fast does your API respond? Goal: < 2000 ms under load
Throughput: how many requests can you process per second (Request per seconds)? Goal: 100RPS on EC2 (use v Request per minutes though).

Error rate: how often does a response generate an error? Goal: <1% error rate under load

A successful stress test should be under 2000 ms, and <1% error rate. Get 1000 RPS in development, then just test production

Day 5:
Wrote tests for API routes. Translate the pre-existing API documentation into Express router endpoints. Write assertions tests for expected data at each endpoint. After creating the router, I worked on the controller file that would connect to the database for the actual query.

Created branches and pull requests for each endpoint. Need to implement the controller to fetch data, and write integration tests for expected response for EACH.

Set up the [k6](https://k6.io/) for stress testing. Read this [article](https://medium.com/codeinsights/how-to-load-test-your-node-js-app-using-k6-74d7339bc787).

Created an npm script to generate a (time-stamped) folder with endpoint tests. `npm run k6:load`. All endpoints return 100% checks. See `resources/k6-tests/test_NNNN/*` for results in markdown files.

Ran a load test with k6 for these three endpoints:

```sh
# Output to folders:
ENDPOINT=products k6 run ./k6.js > "test_${NOW}/products.md"
ENDPOINT=products/42370/styles k6 run ./k6.js > "test_${NOW}/styles.md"
ENDPOINT=products/42370/related k6 run ./k6.js > "test_${NOW}/related.md"

```

Notes:
Useful commands:
`npm run sequelize db:seed:undo:all`
`npm run sequelize db:seed:all`

Finish writing tests for Styles object, Add ALL endpoints to route index.js, Create styles controller, Bundle router + controller + test into one PR

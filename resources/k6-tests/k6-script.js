// Auto-generated by the postman-to-k6 converter
// cd resources/k6-tests && k6 run k6-script.js

import "./libs/shim/core.js";
import "./libs/shim/expect.js";
import { group } from "k6";

export let options = {
  thresholds: {
    error_rate: ['rate < 0.1'],
  },
  maxRedirects: 4,
  ext: {
    loadimpact: {
      projectID: 3554807,
      // Test runs with the same name groups test runs together
      name: "SDC Products Endpoint Test"
    }
  }
}

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options
});

const host = '52.35.89.230' // localhost

export default function () {
  group("sdc", function () {
    postman[Request]({
      name: "Product Catalog",
      id: "b6e4572d-3e0f-4953-a136-fb65a952750f",
      method: "GET",
      address: `http://${host}/products/`,
      data: "{\n    page: 100\n    count: 50\n}",
      post(response) {
        pm.test("Status code is 200", function () {
          pm.response.to.have.status(200);
        });

        pm.test("Response time is less than 2000ms", () => {
          pm.expect(pm.response.responseTime).to.be.below(2000);
        });
      }
    });

    postman[Request]({
      name: "Product Info Ending",
      id: "6b19c4f2-5222-4a64-b626-b8a2d10f07b9",
      method: "GET",
      address: `http://${host}/products/999999`,
      post(response) {
        pm.test("Status code is 200", function () {
          pm.response.to.have.status(200);
        });

        pm.test("Response time is less than 2000ms", () => {
          pm.expect(pm.response.responseTime).to.be.below(2000);
        });
      }
    });

    postman[Request]({
      name: "Product Info Middle",
      id: "3069a529-83c6-4e95-9eb2-72a113cd5d70",
      method: "GET",
      address: `http://${host}/products/454755`,
      post(response) {
        pm.test("Status code is 200", function () {
          pm.response.to.have.status(200);
        });

        pm.test("Response time is less than 2000ms", () => {
          pm.expect(pm.response.responseTime).to.be.below(2000);
        });
      }
    });

    postman[Request]({
      name: "Product Info Beginning",
      id: "1a3eab0d-5835-4ac7-9e27-d17970ab1511",
      method: "GET",
      address: `http://${host}/products/1`,
      post(response) {
        pm.test("Status code is 200", function () {
          pm.response.to.have.status(200);
        });

        pm.test("Response time is less than 2000ms", () => {
          pm.expect(pm.response.responseTime).to.be.below(2000);
        });
      }
    });

    postman[Request]({
      name: "Product Styles A",
      id: "81a3e296-0a0f-48e5-8bea-710c03fd30cc",
      method: "GET",
      address: `http://${host}/products/999999/styles`,
      post(response) {
        pm.test("Status code is 200", function () {
          pm.response.to.have.status(200);
        });

        pm.test("Response time is less than 2000ms", () => {
          pm.expect(pm.response.responseTime).to.be.below(2000);
        });
      }
    });

    postman[Request]({
      name: "Product Styles B",
      id: "2831fd91-b055-49bc-aa7d-5910c4217251",
      method: "GET",
      address: `http://${host}/products/700000/styles`,
      post(response) {
        pm.test("Status code is 200", function () {
          pm.response.to.have.status(200);
        });

        pm.test("Response time is less than 2000ms", () => {
          pm.expect(pm.response.responseTime).to.be.below(2000);
        });
      }
    });

    postman[Request]({
      name: "Product Related A",
      id: "8ca27a36-dec4-4ed4-9291-65953752d352",
      method: "GET",
      address: `http://${host}/products/700000/related`,
      post(response) {
        pm.test("Status code is 200", function () {
          pm.response.to.have.status(200);
        });

        pm.test("Response time is less than 2000ms", () => {
          pm.expect(pm.response.responseTime).to.be.below(2000);
        });
      }
    });

    postman[Request]({
      name: "Product Related B",
      id: "836908ab-0f9f-44a9-b460-db6bddb97512",
      method: "GET",
      address: `http://${host}/products/999999/related`,
      post(response) {
        pm.test("Status code is 200", function () {
          pm.response.to.have.status(200);
        });

        pm.test("Response time is less than 2000ms", () => {
          pm.expect(pm.response.responseTime).to.be.below(2000);
        });
      }
    });
  });
}

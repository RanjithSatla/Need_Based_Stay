// require("./app");

var axios = require("axios");
var data = JSON.stringify({
  collection: "owners",
  database: "ms",
  dataSource: "Capstone",
  projection: {
    _id: 1,
  },
});

var config = {
  method: "post",
  url: "https://data.mongodb-api.com/app/data-wreux/endpoint/data/beta/action/findOne",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "api-key":
      "L7z8c9oLnSE2EVZTI5cJhXVnzxcsxYIocsrogZQGhXgKnwHjHxpZyWDU3E3HVtqu",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { karutaBlogNoti } = require("./controllers/karuta_blog");

const setupCors = (exp) => {
  return exp.use(cors());
};

const setupMorgan = (exp) => {
  return exp.use(morgan("tiny"));
};

const setupParseBody = (exp) => {
  return exp.use(express.json()).use(
    express.urlencoded({
      extended: true,
    })
  );
};

const setupRoutes = (exp) => {
  exp.post("/karuta-blog", karutaBlogNoti);

  return exp;
};

const app = [setupCors, setupMorgan, setupParseBody, setupRoutes].reduce(
  (e, middleware) => middleware(e),
  new express()
);

module.exports = {
  app,
};

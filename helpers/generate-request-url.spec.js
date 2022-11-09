const { expect } = require("chai");
const getRequestUrl = require("./generate-request-url");

describe("helpers.getRequestUrl()", () => {
  const greeting = "Hello";
  const width = 400;
  const height = 500;
  const color = "Pink";
  const size = 100;

  const correctRequest = {
    url: "https://cataas.com/cat/says/Hello?width=400&height=500&color=Pink&s=100",
    encoding: "binary",
  };
  it("correct number of parameters", () => {
    const result = getRequestUrl(greeting, width, height, color, size);
    expect(result).to.be.deep.equal(correctRequest);
  });

  it("invalid number of params", () => {
    const result = getRequestUrl(width, height, color, size);
    expect(result).to.be.not.deep.equal(correctRequest);
  });
});

/**
 *
 * @param {string} greeting
 * @param {number} width
 * @param {number} height
 * @param {string} color
 * @param {string} size
 * @returns { url: string, encoding: string }
 */

const getRequestUrl = (greeting, width, height, color, size) => {
  return {
    url: `https://cataas.com/cat/says/${greeting}?width=${width}&height=${height}&color=${color}&s=${size}`,
    encoding: "binary",
  };
};

module.exports = getRequestUrl;

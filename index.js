const { writeFileSync } = require("fs");
const blend = require("@mapbox/blend");
const argv = require("minimist")(process.argv.slice(2));
const { join } = require("path");
const request = require("request");
const util = require("util");
const { getRequestUrl } = require("./helpers");

const requestPromise = util.promisify(request);
const blendPromise = util.promisify(blend);

const greeting = argv.greeting || "Hello";
const who = argv.who || "You";
const width = argv.width || 400;
const height = argv.height || 500;
const color = argv.color || "Pink";
const size = argv.size || 100;

const requestOne = getRequestUrl(greeting, width, height, color, size);
const requestTwo = getRequestUrl(who, width, height, color, size);

(async () => {
  try {
    const firstResponse = await requestPromise(requestOne);
    const secondResponse = await requestPromise(requestTwo);

    const firstBuffer = Buffer.from(firstResponse.body, "binary");
    const secondBuffer = Buffer.from(secondResponse.body, "binary");

    const fileData = await blendPromise(
      [
        { buffer: firstBuffer, x: 0, y: 0 },
        { buffer: secondBuffer, x: width, y: 0 },
      ],
      {
        width: width * 2,
        height: height,
        format: "jpeg",
      },
    );

    const fileOut = join(process.cwd(), "/cat-card.jpg");
    await writeFileSync(fileOut, fileData);
    console.log("The file was saved!");
  } catch (err) {
    console.error(err);
  }
})();

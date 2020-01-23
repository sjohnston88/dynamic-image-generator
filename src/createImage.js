const { createCanvas, registerFont, loadImage } = require("canvas");

// register custom fonts

module.exports = (req, res) => {
  const {
    // fix images
    imageSrc = "",
    width = 600,
    height = 400,
    text = "",
    fontSize = "40px",
    fontFamily = "sans-serif",
    // fix weights
    fontWeight = "normal",
    // fix colours
    fontColor = "#000000",
    xPos = 0,
    yPos = 0
  } = req.query;

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  ctx.font = `${fontSize} ${fontFamily}`;
  ctx.textBaseline = "top";
  ctx.textAlign = "start";
  ctx.fillStyle = fontColor;
  ctx.fillText(text, xPos, yPos);

  // TODO: load images into canvas

  console.log("Image Created");
  // TODO: resolve as buffer to img with headers
  res.send('<img src="' + canvas.toDataURL() + '" />');
  //   res.send(
  //     canvas.toBuffer("image/png", {
  //       compressionLevel: 3,
  //       filters: canvas.PNG_FILTER_NONE
  //     })
  //   );
};

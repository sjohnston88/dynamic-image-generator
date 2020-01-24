import Canvas from 'canvas';

const createImage = async (req, res) => {
  const {
    imageSrc = 'example.jpg',
    width = 600,
    height = 400,
    text = 'example',
    fontSize = '60px',
    fontFamily = 'sans-serif',
    fontWeight = 'normal',
    fontColor = '#000000',
    xPos = 0,
    yPos = 0
  } = req.query;

  const fontPath = `${process.cwd()}/src/fonts/IndieFlower-Regular.ttf`;
  Canvas.registerFont(fontPath, { family: 'Indie Flower' });

  const backgroundPath = `${process.cwd()}/src/images/${imageSrc}`;
  const canvas = Canvas.createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Configure background
  const background = await Canvas.loadImage(backgroundPath);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  // Configure text
  const hexCodeRegex = /^[0-9A-F]{6}$/i;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `${fontWeight} ${fontSize} ${fontFamily}`;
  ctx.fillStyle = hexCodeRegex.test(fontColor) ? `#${fontColor}` : fontColor;

  const offset = parseInt(fontSize.replace('px', '') / 2);
  ctx.fillText(text, xPos, yPos - offset);

  const finalImage = canvas.toBuffer('image/png', {
    compressionLevel: 3,
    filters: canvas.PNG_FILTER_NONE
  });

  res.contentType('image/png');
  res.send(finalImage);
};

export default createImage;

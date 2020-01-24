import Canvas from 'canvas';

const createImage = async (req, res, config = {}) => {
  const settings = Object.assign({}, config, req.query);

  const {
    imageSrc = 'default.jpg',
    width = 600,
    height = 400,
    text = '',
    fontSize = '60px',
    fontFamily = 'sans-serif',
    fontWeight = 'normal',
    fontColor = '#ffffff',
    horizontalPosition = 300,
    verticalPosition = 215,
    multiText = []
  } = settings;

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
  ctx.fillText(text, horizontalPosition, verticalPosition - offset);

  // Render any multitext content
  multiText.forEach(item => {
    const textFamily = item.fontFamily || fontFamily;
    const textWeight = item.fontWeight || fontWeight;
    const textSize = item.fontSize || fontSize;
    const textColor = item.fontColor || fontColor;

    ctx.font = `${textWeight} ${textSize} ${textFamily}`;
    ctx.fillStyle = hexCodeRegex.test(textColor) ? `#${textColor}` : textColor;

    const offset = parseInt(textSize.replace('px', '') / 2);
    ctx.fillText(item.text, item.xPos, item.yPos - offset);
  });

  const finalImage = canvas.toBuffer('image/png', {
    compressionLevel: 3,
    filters: canvas.PNG_FILTER_NONE
  });

  res.contentType('image/png');
  res.send(finalImage);
};

export default createImage;

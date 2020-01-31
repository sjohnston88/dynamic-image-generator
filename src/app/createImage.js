import Canvas from 'canvas';

const createImage = async (req, res, config = {}) => {
  const settings = Object.assign({}, config, req.query);

  const {
    imageSrc = 'default.jpg',
    width = 600,
    height = 400,
    text = '',
    fontSize = '60px',
    fontName = 'sans-serif',
    fontWeight = 'normal',
    fontColor = '#ffffff',
    horizontalPosition = 300,
    verticalPosition = 215,
    multiText = []
  } = settings;

  const { imageName = '' } = req.params;

  const noLocalImageOrText = imageSrc === 'default.jpg' && text === '';
  const noRemoteImageOrText = !imageName && text === null;

  // Return 400 if we have no images or text
  if (noLocalImageOrText || noRemoteImageOrText) {
    res.status(400).send('Not allowed');
  }

  // Return 400 if images are too large or text is too long
  if (width > 2000 || height > 2000 || text.length > 100) {
    res.status(400).send('Not allowed');
  }

  const fontPath = `${process.cwd()}/src/fonts/IndieFlower-Regular.ttf`;
  Canvas.registerFont(fontPath, { family: 'Indie Flower' });

  let backgroundImage;
  const localImagePath = `${process.cwd()}/src/images/${imageSrc}`;

  if (imageName) {
    // Ideally we should check if the image exists in the bucket too
    const s3bucket = process.env.S3_BUCKET;
    backgroundImage = s3bucket ? `${s3bucket}/${imageName}` : localImagePath;
  } else {
    backgroundImage = localImagePath;
  }

  const canvas = Canvas.createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Configure background
  const background = await Canvas.loadImage(backgroundImage);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  // Configure text
  const hexCodeRegex = /^[0-9A-F]{6}$/i;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  ctx.font = `${fontWeight} ${fontSize} ${fontName}`;
  ctx.fillStyle = hexCodeRegex.test(fontColor) ? `#${fontColor}` : fontColor;
  const offset = parseInt(fontSize.replace('px', '') / 2);
  ctx.fillText(text, horizontalPosition, verticalPosition - offset);

  // Render any multi-text content
  multiText.forEach(item => {
    const textFamily = item.fontName || fontName;
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

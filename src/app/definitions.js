const personalisedTeeShirt = {
  path: 'personalised-tee-shirt',
  config: {
    imageSrc: 'tshirt.jpg',
    width: 1200,
    height: 700,
    fontSize: '50px',
    text: '¯\\_(ツ)_/¯',
    horizontalPosition: 600,
    verticalPosition: 300
  }
};

const dogeMeme = {
  path: 'doge-meme',
  config: {
    imageSrc: 'doge.jpg',
    width: 1200,
    height: 700,
    fontSize: '40px',
    fontFamily: 'comic-sans',
    fontWeight: 'normal',
    multiText: [
      {
        text: 'wow',
        fontColor: '#ffffff',
        fontSize: '80px',
        xPos: 400,
        yPos: 200
      },
      {
        text: 'such meme',
        fontColor: 'red',
        fontWeight: 'bold',
        xPos: 1000,
        yPos: 250
      },
      {
        text: 'many laugh',
        fontColor: 'lightskyblue',
        fontSize: '30px',
        xPos: 130,
        yPos: 440
      },
      {
        text: 'so doge',
        fontColor: 'purple',
        xPos: 700,
        yPos: 540
      }
    ]
  }
};

export default [personalisedTeeShirt, dogeMeme];

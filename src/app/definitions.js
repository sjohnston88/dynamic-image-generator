const personalisedTeeShirt = {
  path: 'personalisedTeeShirt',
  config: {
    imageSrc: 'tshirt.jpg',
    fontSize: '25px',
    text: '¯\\_(ツ)_/¯',
    verticalPosition: 160
  }
};

const dogeMeme = {
  path: 'dogeMeme',
  config: {
    imageSrc: 'doge.jpg',
    fontFamily: 'comic-sans',
    fontSize: '20px',
    fontWeight: 'normal',
    multiText: [
      {
        text: 'wow',
        fontColor: '#ffffff',
        fontSize: '60px',
        xPos: 200,
        yPos: 100
      },
      {
        text: 'such meme',
        fontColor: 'red',
        fontWeight: 'bold',
        xPos: 500,
        yPos: 120
      },
      {
        text: 'many laugh',
        fontColor: 'lightskyblue',
        fontSize: '30px',
        xPos: 130,
        yPos: 240
      },
      {
        text: 'so doge',
        fontColor: 'purple',
        xPos: 400,
        yPos: 350
      }
    ]
  }
};

export default [personalisedTeeShirt, dogeMeme];

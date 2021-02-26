# Dynamic Image Generator

![Personalised Image](https://github.com/sjohnston88/dynamic-image-generator/blob/master/src/images/example.png?raw=true)

Express and canvas server that creates dynamic images from query strings. Great for dynamic content and personalised images for websites or email newsletters.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

```
git clone https://github.com/sjohnston88/dynamic-image-generator.git
npm i
npm run dev
```

Server runs by default at http://localhost:8080

### Usage

You can use the following parameters in the query string to generate dynamic images this will overwrite any predefined values stored.

| Param        | Default Value | Description                                                        |
| ------------ | ------------- | ------------------------------------------------------------------ |
| `imageSrc`   | `example.jpg` | The filename of a locally stored background image                  |
| `width`      | `600`         | The desired width of the image                                     |
| `height`     | `400`         | The desired height of the image                                    |
| `text`       | `''`          | The text to print onto the image                                   |
| `fontName`   | `sans-serif`  | The name of a system or imported font-face                         |
| `fontWeight` | `normal`      | The desired weight of the text                                     |
| `fontColor`  | `000000`      | The desired hex code for the text ignoring `#`                     |
| `fontSize`   | `60px`        | The desired size of the text                                       |
| `xPos`       | `0`           | The desired horizontal position of the text, relative to top left. |
| `yPos`       | `0`           | The desired vertical position of the text, relative to top left.   |

#### MultiText Content

Additionally, you can pass the `multiText` parameter which will allow for the positioning of multiple text layers. The parameters above can be used to set the default values for the image, and individual text layers will automatically inherit them, if they are not internally set.

For example the following multiText options:

```
[{
  text: 'wow',
  xPos: 400,
  yPos: 200
},
{
  text: 'such meme',
  fontColor: 'red',
  xPos: 1000,
  yPos: 250
}]
```

Could be passed as the following query:

`http://localhost:8080/doge-meme?multiText[0][text]=wow&multiText[0][xpos]=400&multiText[0][ypos]=200&multiText[1][text]=such+meme&multitext[1][fontcolor]=red&multitext[1][xPos]=1000&multitext[1][ypos]=250`

#### Predefined Images

Store predefined images in the definitions.js file, ensuring you export them in the array. They will automatically be turned into routes for you and can be overridden by appending query strings to the url. For example:

`http://localhost:8080/personalised-tee-shirt?text=hello+world`

#### External Images

Set `S3_BUCKET=https://s3bucket.com/imagename.jpg` as an environment variable to reference images that are hosted externally.

### Tests

## Deployment

## TODO

- Lambda handler
- Cloudformation Setup
- CI/CD
- Tests

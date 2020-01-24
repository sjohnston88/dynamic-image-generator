# Dynamic Image Generator

Express and canvas server that creates dynamic images from query strings. Great for dynamic content and personalised images for websites or email newsletters.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

```
git clone https://github.com/sjohnston88/dynamic-image-generator.git
npm install
npm run dev
```

Server runs by default at http://localhost:8080

### Usage

You can use the following parameters in the query string to generate dynamic images this will overwrite any predefined values stored.

| Param        | Default Value   | Description |
| ------------ | --------------- | ----------- |
| `imageSrc`   | `600`           |             |
| `width`      | `400`           |             |
| `height`     | `"exmaple.jpg"` |             |
| `text`       | `""`            |             |
| `fontFamily` | `"sans-serfif"` |             |
| `fontWeight` | `"normal"`      |             |
| `fontColor`  | `"#000000"`     |             |
| `fontSize`   | `"60px"`        |             |
| `xPos`       | `0`             |             |
| `yPos`       | `0`             |             |
| `multiText`  | `[]`            |             |

#### MultiText Content

?multiText[0][text]=hello&multiText[0][xpos]=300&multiText[0][ypos]=300

#### Predefined Images

### Tests

## Deployment

## TODO

- Lambda handler
- Cloudformation Setup
- CI/CD
- Tests

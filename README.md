# Dynamic Image Generator

Express and canvas server that creates dynamic images from query strings. Great for dynamic content and personalised images for websites or email newsletters.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

```
git clone https://github.com/sjohnston88/dynamic-image-generator.git
npm install
npm start
```

Server runs by default at http://localhost:8080

imageSrc = "example.jpg",
width = 600,
height = 400,
text = "example",
fontSize = "60px",
fontFamily = "sans-serif",
fontWeight = "normal",
fontColor = "#000000",
xPos = 0,
yPos = 0

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

### Usage

### Tests

## Deployment

## TODO

- Lambda handler
- Cloudformation Setup
- CI/CD
- Tests

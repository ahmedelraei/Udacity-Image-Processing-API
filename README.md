# Image Processing API

## Overview

This project aims to give you a real-world scenario in which you would read and write to your disk via a Node.js express server rather than a database.

## How to build and start the server

The project can be built and run in the following ways

### 1. Install all dependencies

`npm install`

### 2. Build

`npm build`

This command will build the typeScript code into JavaScript and save them in the `./build` folder.

### 3. Start the Server

`npm start`

This command will start the server running on port `3000` by default or you can make .env file in the root directory containing: PORT=PORT_YOU_WANT.

## Testing, Formatting and Linting

Here, I will show you how to run the test and also how to check that our code respects all the eslint rules.

### 1. Linting

`npm run lint`

### 2. Formatting

`npm run format`

### 3. Testing

`npm run test`

## Endpoint

### `/api/images/resize/?filename=<image_name>&width=<width>&height=<height>`

Method: `get`
URL Params: `height` and `width` - the height or width of the image in pixels
Query Param: `filename` - the specific image you are requesting.

    For example: `localhost:3000/api/images/resize/?filename=pyramid&width=300&height=300`

### Functionality

- User can query endpoint using various params and queries to retrieve an image with a specified height and width.
- All images requested will be saved to disk.
- There is a cache layer. If a user requests an image size that has already been requested, there is no need for resizing and the previously resized image will be returned.

## Built With

- [NodeJS](https://nodejs.org/en/) - The JavaScript runtime.
- [Express](https://expressjs.com/) - The web framework.
- [TypeScript](https://www.typescriptlang.org/) - The language used.
- [Sharp](https://sharp.pixelplumbing.com/) - NodeJS image processor.

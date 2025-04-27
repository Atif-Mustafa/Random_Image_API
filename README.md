# Random Image API

## Description
A Node.js and Express API that returns a random image on each request.

## Setup & Installation
1. Clone the repo
2. Run `npm install`
3. Create a `.env` file with `PORT=3000`
4. Run `npm start` or `npm run dev`

## Usage
- GET `/api/image/random`: Returns a random JPEG image (800x600).
- GET `/health`: Returns service status.

## Testing
Use Postman or curl:
```
curl http://localhost:3000/api/image/random --output image.jpg
```

## Challenges
- Streaming binary image data via Express
- Handling CORS for API consumption


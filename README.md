![alt text](https://github.com/AlanGreyjoy/sanfran-foodtruckies/blob/main/public/foodTruckApp.png?raw=true)

# SanFran FoodTruckes - A coding challenge

## Description

This is a simple web application that shows the food trucks that are open at the current time in San Francisco. The application uses the [San Francisco government's API](https://dev.socrata.com/foundry/data.sfgov.org/rqzj-sfat) to get the data.

## Spin-off projects

- SanFran MFFP Proxy Service - A Node.js and Express backend service that acts as a proxy server for the San Francisco government's API. It's just a simple wrapper that translates object based search parameters and converts them into a single string query. View the repo [here](https://github.com/AlanGreyjoy/sanfran-mffp-proxy)

## Installation

To run the application, you need to have [Node.js](https://nodejs.org/en/) installed on your machine. After installing Node.js, you can run the following commands to run the application:

You will also need a Google Maps API key to run the application. You can get one [here](https://developers.google.com/maps/documentation/javascript/get-api-key).

```bash
npm install
npm run dev
```

## Technologies

- React
- Vite
- MUI (Material-UI) JOY UI
- RTK & RTK Query
- Firebase (for future implementation of authentication, firestore, and hosting)
- React DOM Router (for routing)

## Live Demo

Coming soon...

## Considerations

- Adding endpoint search for food trucks
- Adding filters for food trucks like permit status, location, etc.
- Adding firestore to store user data like favorite food trucks, etc.
- Hosting with Firebase, Vercel, or Netlify
- Adding backend with Node.js and Express as a proxy server for search requests

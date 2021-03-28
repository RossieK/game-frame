# Game Frame

App where you can find more details on new, popular as well as upcoming games, leave reviews and create your own wishlist. Create your own account and dive into this game world. 

The app's backend is written on NodeJS (Express + MongoDB) and its frontend on ReactJS -> MERN stack.

## How to set it up

### Backend

To start the server you can simply run:

```bash
npm start
```

If you go to 'config/config.js', you can modify the port, the mongoDB URI as well as the secret and the salt rounds for the JWT (used for the authentication). 

### Frontend

To get the frontend up and running, you can type the following command:

```bash
npm start
```

Something very important to note here - as the application is using an external API, you will need to generate your own API key and add it in .env file under the name 'REACT_APP_GAMES_API'. To get an API key, please open the following documentation, click on 'Get an API key' and go through the steps - https://rawg.io/apidocs. 

## Architecture description

### Backend

#### Config folder

Contains the general configuration file (port used, MongoDB url, JWT configuration), Express configuration file and Mongoose configuration file.

#### Controllers folder

Contains the controllers for the user (authentication) endpoints, as well as for the reviews and games endpoints. 

#### Middlewares folder

Contains the authentication middleware and middlewares for form validations (registration form and review creation form).

#### Models folder

Contains the database models (User, Game and Review).

#### Services folder

Contains files dedicated to each endpoint with different functions used by the controllers.

### Frontend

#### Actions folder

#### Components folder

#### Img folder

#### Pages folder

#### Reducers folder

#### Standalone files
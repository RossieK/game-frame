# Game Frame

App where you can find more details on new, popular as well as upcoming games, leave reviews and create your own wishlist. Create your own account and dive into this game world. 

## Technologies used

The app's backend is written on NodeJS (Express + MongoDB) and its frontend - on ReactJS -> MERN stack.

In more details:

- the frontend communicates with the backed via REST;

- the application uses an external API as source of the games - https://rawg.io/apidocs;

- the components are functional ones but there is one class component as well;

- the requests are done by using Axios;

- the styling is done by using styled components;

- the state is managed with Redux;

- the application has public and private part (accessible after succesful authentication), the authentication is based on JWT saved in local storage.

## How to set it up

### Backend

To install the dependancies, you should run: 

```bash
npm install
```

To start the server you can simply run:

```bash
npm start
```

If you go to 'config/config.js', you can modify the port, the mongoDB URI as well as the salt rounds for bcrypt and the secret for JWT (used for the authentication). 

### Frontend

To install the dependancies, you should run: 

```bash
npm install
```

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

Contains files with Redux actions.

#### Components folder

Contains files with all the components and file with the global styles.

#### Img folder

Contains all the images and logos used within the pages and components.

#### Pages folder

Contains separate files for all the pages.

#### Reducers folder

Contains all the Redux reducers and main file where they are all combined.

#### Standalone files

- Animations file - setting up two different animations used by framer motion;

- Api file - setting up the external API URLs that will be called;

- Util file - includes common functions that are used in different components.
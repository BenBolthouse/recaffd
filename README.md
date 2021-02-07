# Recaffd
A clone of Untappd where you can discover, rate and review your favorite local coffee shops.

Recaffd is a full stack web solution. It leverages the following technologies:
* PostgreSQL
* Express for Node
* React
* Redux
* Hosting on Heroku dyno

Recaffd demonstrates the following:
* Effective use of cookie-based JWT authentication and authorization,
* RESTful HTTP,
* Client state management using Redux and Thunk,
* SPA navigation and routing using React Router DOM,
* Data modeling, migrations and seeding using Sequelize,
* Mobile-first user experience leveraging the capabilities of Sass (css preprocessing), and
* Sensible reuse of virtual DOM components in React.

## Project Motivation
Recaffd is maintained and developed by (yours truly) [Ben Bolthouse](https://github.com/BenBolthouse).

The motivation for Recaffd is to showcase my competency in all layers of full stack web development: database, server, client...and everything in between. As such, except for the technologies listed above (their API's and related dependencies), Recaffd is written in vanilla JavaScript, JSX, HTML, Sass and CSS. A majority of the styling has been processed from Sass. I decided to stray away from writing straight CSS because Sass allows me to "paint with broader strokes". The same applies for SQL; I opted to use Sequelize (ORM) migration tools to do most of the heavy lifting while building the application store.

## App Academy
Recaffd–a solo project–is a product of the App Academy Immersive Online Software Engineering curriculum. You can learn more about App Academy by [visiting their website](https://appacademy.io). While pursuing a software engineering certification from App Academy, I successfully planned, developed and deployed the MVP of this app in one week's time. To be fair, Recaffd looks drastically different than it did in its early days! But this quick turnaround in planning to deployment was a huge milestone in my learning.

## Installation
Below are steps to setting up a development environment to run Recaffd locally.
1. Clone and install dependencies by running `npm i` in the root directory.
1. [Install PostgreSQL](https://www.postgresql.org/download/) for your machine. Run the Postgres service on 'localhost:5432`.
1. As admin in Postgres create a user with privileges to create a database: `CREATE USER recaffd_app WITH PASSWORD '«choose_a_password»' CREATEDB`.
1. Copy the contents of `env.example` to a new file `.env` and replace the placeholder text with your own values.
1. In the root of the project run the command `npx sequelize-cli init` to scaffold Sequelize directories.
1. In root, run `npx dotenv sequelize-cli db:create` to create the data store for the app.
1. In root, run `npx dotenv sequelize-cli db:migrate:all` and `npx dotenv sequelize-cli db:seed:all` to migrate and seed relations.
1. In root, run `npm build` to create a production build of the client browser app.
1. Finally, in root, run `npm start` to launch the application on the port that you specified in the `.env` file.

Following the steps above will create the production build for Recaffd on your local machine. You'll notice in `package.json` that there isn't a development script. If you would like to debug Recaffd instead then I recommend you do so in [Visual Studio Code](https://code.visualstudio.com/), a versatile editor created and provided (for free!) by Microsoft.

To debug in VS Code, please do the following:
1. In root, create a directory called `.vscode`.
1. In .vscode directory, create a file called `launch.json`.
1. Copy and paste the following into `launch.json`, and save the file:
```
{
  "version": "0.2.0",
  "configurations": [
    {
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "name": "Nodemon",
      "program": "${workspaceFolder}/bin/www",
      "request": "launch",
      "restart": true,
      "runtimeArgs": [
        "-r",
        "dotenv/config",
        "./bin/www",
        "dotenv_config_path=./.env"
      ],
      "runtimeExecutable": "nodemon",
      "skipFiles": ["<node_internals>/**"],
      "type": "pwa-node"
    }
  ]
}
```
4. Finally, go to the VS Code debugger panel and select "Nodemon" from the dropdown and then run.

The above will launch the app using Nodemon instead of Node to give you more granular debugging capabilities...and lazy loading!

...</br>...</br>...

Thank you for reading and taking interest in my work! I'd love to connect if you do, you can find me on:
* [Github](https://github.com/BenBolthouse)
* [LinkedIn](https://www.linkedin.com/in/ben-bolthouse/)

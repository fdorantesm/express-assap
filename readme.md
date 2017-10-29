#### Description

This is a base express asapp project, this project uses asapp as structure framework and some popular modules like mongoose, socket.io, pug, etc.

Feel free to remove modules that you will not to use.

#

#### Dependencies

<pre>
"dependencies": {
    "asapp": "^2.0.0",
    "body-parser": "~1.17.1",
    "compression": "^1.7.1",
    "consign": "^0.1.6",
    "cookie-parser": "~1.4.3",
    "debug": "~2.6.3",
    "express": "~4.15.2",
    "fs": "0.0.1-security",
    "i18n-2": "^0.7.2",
    "is_js": "^0.9.0",
    "lodash": "^4.17.4",
    "mongoose": "^4.12.4",
    "morgan": "^1.8.2",
    "pug": "~2.0.0-beta11",
    "rotating-file-stream": "^1.3.2",
    "serve-favicon": "^2.4.5",
    "socket.io": "^2.0.4",
    "stylus": "0.54.5",
    "winston": "^2.4.0"
  }
</pre>

#

#### Project structure 

<pre>

├── app
│   ├── app.js
│   ├── config
│   │   ├── database.json
│   │   ├── env.js
│   │   ├── i18n.js
│   │   ├── io.js
│   │   ├── locals.js
│   │   └── mongoose.js
│   ├── db
│   │   ├── models
│   │   └── schemas
│   ├── helpers
│   │   └── filters.js
│   ├── http
│   │   ├── controllers
│   │   ├── middlewares
│   │   │   └── test.js
│   │   └── routes
│   │       ├── router.js
│   │       └── test.js
│   ├── libraries
│   │   ├── lang.js
│   │   └── logger.js
│   ├── load.js
│   ├── locales
│   │   ├── en.json
│   │   └── es.json
│   ├── logs
│   │   └── access.log
│   └── views
│       ├── error.pug
│       ├── index.pug
│       └── layout.pug
├── bin
│   └── www
├── package.json
├── package-lock.json
├── public
├── readme.md
└── static
    └── libs -> ../bower_components

</pre>

#

### Application

#### app /
This directory contains all conventional parts of a MVC framework.

##### app / config
This directory contains settings modules like variables, database conection, api keys, etc.

##### app / db
This directory contains the project's models and schemas.

##### app / helpers
This directory contains auxiliary functions eg: isHex()

Lodash and is_js were included.

##### app / http
This directory contains all http request & response logic.

Middlewares interacts between requests and controllers. Controllers are separated from requests as a data interface.

Routes take the request and execute a middleware as callback.

Request -> Route -> Middleware -> Controller -> *

##### app / libraries

This is the abstraction of modules that we must to use as part of application's logic like multilanguage support, payments, etc.

You will be able to make your own implementation of a module and it will be able to reuse in another project.

##### app / locales

This diretory contains all the text resources into a JSON file.

##### app / logs

This directory contains all the http and debug logs.

##### app / views

This directory contains all the views.


#

### Bin

This directory could be contains some scripts to serve files, deploy the application or make cron jobs.

By default this folder contains a script named www that run the app.

#

### Public

This directory contains all the public resources like profile images, documents, uploads, downloads or whatever file.

This directory is serve on / path.

#

### Static

This directory contains all the static resources to use in frontend like styles, scripts, plugins, components, etc.

Libs is a symlink for bower_components.

This directory is serve on /static path.

#

### How to use

1.- Clone this repo using one of below commands:

`git clone https://github.com/fdorantesm/express-assap`

`git clone git@github.com:fdorantesm/express-assap.git`

2.- Install dependencies

`npm install`

3.- `npm run-script local` or `node bin/www`

<pre>
"scripts": {
    "local": "nodemon ./bin/www --config .nodemon",
    "test": "NODE_ENV=test forever start bin/www",
    "start": "NODE_ENV=prod forever start bin/www"
  },
</pre>

* Install nodemon (or edit package.json) to use npm scripts (optional):

#

### Donations 

Paypal: fdorantesm@gmail.com

#

### Credits

* Winston logger by [@vikas5914](https://github.com/vikas5914) 
https://gist.github.com/vikas5914/cf568748ac89446e19ecd5e2e6900443
# Rails + Webpack + React + Heroku

This starter app provides you with all you need to start developing reaction. The project uses rails with webpacker gem that provides the tooling a modern full-stack workflow needs. The webpacker gem provides the following functionality:

1. Bundle all your front-end code into one file
2. Compile JSX to JavaScript
3. Compile ES6 code to ES5

You can read more about the gem on their [Github page](https://github.com/rails/webpacker)

## Directory Structure
The directory structure is basically the same as any rails application but with the following differences:

1. The `app/javascript/` folder has a directory called `packs` and a host of other directories for adding your JS files to.
2. Files related to front-end development like a `Gemfile`, `.babelrc`, `.eslintrc`, etc.

## How to set up the application
- Run `bundle install` from the root directory to install ruby dependencies
- Run `yarn install` to install npm packages
- Run `rails db:setup` to setup the database
- `rails s` to start the application

## Testing Rails API's
The starter app already implements creating and listing boards. The associated tests are in `/test/integration/boards_api_test.rb`. Read this file to get an idea of about testing the request/response cycle of the API. To run your tests:

```
$ bin/rails test
```

## A note on client-side Routing
Client-side routing can be a slippery concept to grasp at first. Read [this gist](https://launchschool.com/gists/d6c907f0) to get an idea of the basics.

## Where code should live

* Ruby/Rails code should continue to live in its appropriate directory within
  `app`.
* React code should live in `app/javascript/`.
* React component unit tests should use the `.test.js` extension and live next
  to the components being tested within `app/javascript/components/`.

## Useful commands

Run JS unit tests:

```
$ bin/yarn run test
```

Run eslint on files in `app/javascript/`:

```
$ bin/yarn run lint
```

## Deployment hints ([source](https://medium.com/@hpux/rails-5-1-loves-javascript-a1d84d5318b))

1. Add the nodejs and ruby buildpacks:

    ```
    $ heroku create
    $ heroku buildpacks:add --index 1 heroku/nodejs
    $ heroku buildpacks:add --index 2 heroku/ruby
    ```

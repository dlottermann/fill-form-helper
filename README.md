# Fill Form Helper

A utility to help quickly and easily fill forms in the browser when manual testing is required.


## Development

As of this writing, we are using the latest LTS version of Node.js. Check `.nvmrc`.

The first time after cloning this repository, run this commands:

```
$ git clone <this project>
$ cd fill-form-helper
$ nvm install
$ npm install
```

Note that `nvm install` will automatically read `.nvmrc` and install version of Node.js indicated in that file.

After Node.js is installed, any other time you are developing, run this command to use the correct Node.js version before you run any command that deals with JavaScript:

```
$ nvm use
```

## Run unit tests

```
$ npm run test
$ npm run test:watch
$ npm run test:watch -- --coverage
```

## Building

We can either watch and rebuild the dist files or just build once when necessary:

```
$ npm run watch

$ npm run build
```

The built entry file ends up in `dist/index.js`, which can then be included in the HTML pages, like show in `examples/`.



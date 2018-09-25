# A6

This repo contains some examples of unit-testing and vrt-testing of Angular6 app.

## Start

First start [json-server](https://www.npmjs.com/package/json-server)

```sh
$ npx json-server --watch products.json
```

then

```sh
$ npm start
```

## Running tests

Unit tests should be run with production config:

```sh
$ npm t -- -c production
```

NOTE: `*.png` files are stored in LFS so you should install [git-lfs](https://git-lfs.github.com/) if you want to run visual regression tests and push screenshots.

VRT tests should be run while json-server is running and with default config:

```sh
$ npx jest
```

Update screenshots if they match requirements:

```sh
$ npx jest -u
```

and open [localhost:3000](http://localhost:3000).

# A6

This repo contains some examples of unit-testing and vrt-testing of Angular6 app.

## Start

First start [json-server](https://www.npmjs.com/package/json-server):

```sh
$ npx json-server --watch products.json
```

then

```sh
$ npm start
```

## Running tests

Run unit tests:

```sh
$ npm t
```

NOTE: `*.png` files are stored in LFS so you should install [git-lfs](https://git-lfs.github.com/) if you want to run visual regression tests and push screenshots.

Run VRT tests (json-server should be up and running):

```sh
$ npx jest
```

Update screenshots if they match requirements:

```sh
$ npx jest -u
```

and open [localhost:3000](http://localhost:3000).

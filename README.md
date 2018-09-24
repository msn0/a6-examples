# A6

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

NOTE: If you want to run visual regression test plesse install [git-lfs](https://git-lfs.github.com/).

VRT tests should be run while json-server is running and with default config:

```sh
$ npx jest
```

Update screenshots if they match requirements:

```sh
$ npx jest -u
```

and open [localhost:3000](http://localhost:3000).

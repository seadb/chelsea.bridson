chelsea.bridson.me
---

Uses [React](https://facebook.github.io/react/), [Babel](http://babeljs.io/), and [Webpack](http://webpack.github.io/).


Create Project
---
```
git clone git@github.com:seadb/sea.bridson.git
```


Setup
---

```
npm install
npm run compile
./setup-prod.sh
```

Create a config.js in the root directory.  An example `config.example.js` is
provided

Development
---
1. `$ npm run dev`

2. Open [http://localhost:8080/](http://localhost:8080/).

Production
---
1. `$ export NODE_ENV="production"`

2. `$ npm run start`

3. Open browser to the hostname and port in config.js

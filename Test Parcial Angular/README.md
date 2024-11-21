# Steps

1. Install Angular `npm install -g @angular/cli`

2. Create project `ng new --no-standalone mynewapp`

3. Install Bootstrap `npm install --save bootstrap`

4. Add to angular.json file:

```
"styles": [
   "node_modules/bootstrap/dist/css/bootstrap.min.css",
   "src/styles.css"
],
```

5. Generate environments `ng generate environments`

6. Execute app `ng serve`
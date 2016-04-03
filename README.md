# angular-progressbar.js
kimmobrunfeldt's Progressbar.js AngularJS wrapper

# Installation
Add the package via bower
```
bower install angular-progressbar.js
```
Include progressbar[.min].js and angular-progressbar.js it in your markup
```
<script src=".../progressbar.js/dist/progressbar.min.js"></script>
<script src=".../angular-progressbar.js/dist/angular-progressbar.js"></script>
```
Include angular dependency
```
angular.module('yourModule', ['ngProgressbar', ...])
```
# Directiives
### Circle progress
```
<progress-circle amount="45"></progress-circle>
```

You can set `color`, `stroke-width`, `fill`, `trail-color`, `trail-width` and `text` as attributes on the directive itself:
```
<progress-circle amount="45" color="#FFFFFF" text="text" ></progress-circle>
```

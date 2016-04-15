# angular-progressbar.js
kimmobrunfeldt's Progressbar.js AngularJS wrapper [(http://kimmobrunfeldt.github.io/progressbar.js/)](http://kimmobrunfeldt.github.io/progressbar.js/)

# Installation
Add the package via bower or npm
```
bower install angular-progressbar.js
npm install angular-progressbar.js
```
Include progressbar[.min].js and angular-progressbar.js it in your markup
```
<script src=".../progressbar.js/dist/progressbar.min.js"></script>
<script src=".../angular-progressbar.js/dist/angular-progressbar.js"></script>
<script src=".../jquery/dist/jquery.js"></script>
```
Include angular dependency
```
angular.module('yourModule', ['ngProgressbar', ...])
```
# Directives
### Circle progress
```
<progress-circle amount="45"></progress-circle>
```

You can set `color`, `stroke-width`, `fill`, `trail-color`, `trail-width` and `text` as attributes on the directive itself:
```
<progress-circle amount="45" color="#FFFFFF" text="text" ></progress-circle>
```

### Hexagon progress
```
<progress-hexagon amount="20" bg-stroke-width="0.5" bg-stroke-color="'c3c3c3'" stroke-width="1" stroke-color="'d9bd2a'"></progress-hexagon>
```

Defaults:
bgStrokeWidth, strokeWidth = 0.3
bgStrokeColor, strokeColor = #949494
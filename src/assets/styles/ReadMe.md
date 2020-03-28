## SCSS Build
[SCSS CLI](https://sass-lang.com/documentation/cli/dart-sass#many-to-many-mode)

```javascript
$ cd <PROJECT_ROOT>/src
$ sass --style=compressed --error-css --stop-on-error --trace --watch --update -c assets/styles/scss:assets/styles/css
```
- from src:
DEPRECATED
~~sass --style=compressed --error-css --stop-on-error --trace --watch --update -c assets/styles/scss/style.scss:assets/styles/css/style.css assets/styles/scss/components:assets/styles/css/components assets/styles/scss/modules:assets/styles/css/modules~~
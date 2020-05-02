# VIEW STEP

A plugin to switch content in one scene.

## USAGE

### import
```js
import ViewStep from '@zonesoundcreative/view-step';
```

### new an instance
First, construct your html, wrap content of each step with an id `${prefix}-${num}`(e.g. step-1, step-2, step-3 here)
```html
<div id='step-1'>
    ...
</div>
<div id='step-2'>
    ...
</div>
<div id='step-3'>
    ...
</div>

```

then in JS file
```js
let viewStep = new ViewStep('step', 1, 3)
```

**parameter**
* idPrefix: the prefix of id that you used in the html
* start: the number of which is the first step/content
* hideTill: the last number of which you want to hide.


### showNext
showing content of next step
```js
viewStep.showNext(true)
```

**parameter**
* hideCurrent: (bool, default `true`) whether to hide the current view.

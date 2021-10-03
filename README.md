# VIEW STEP

A plugin to switch content in one scene.

## USAGE

### import
```js
import ViewStep from '@zonesoundcreative/view-step';
```

### new an instance
First, construct your html, wrap content of each step with an id `${prefix}-${num}`(e.g. step-1, step-2, step-3 here)

Note thate the `${num}` used here should be start from 1.

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
or using Class
```html
<div class='step-1'>
    ...
</div>
<div class='step-2'>
    ...
</div>
<div class='step-3'>
    ...
</div>
```

then in JS file
```js
let viewStep = new ViewStep('step', 1, 3)
```

**parameter**
* prefix: the prefix of id/class that you used in the html
        (e.g. "#step", ".step" or any prefix you like)
* start: the number of which is the first step/content
* hideTotal: the total number of which you want to hide. The class will hide all the content except for the first number. Use 0 if you don't want to hide any of them.
    (default: 0)
* initFunc: the initialize function when a page shown. In the form of dictionary (key: num, valu: function).
    (default: {})
```json
{
    1: initStepOne,
    3: initStepThree
}
```


### showNext
showing content of next step
```js
viewStep.showNext(true, true)
```

**parameter**
* hideCurrent: (bool, default `true`) whether to hide the current view.
* init: (bool, default `true`) whether to init the next page.


### showPrev
showing content of next step
```js
viewStep.showPrev(true, true)
```

**parameter**
* hideCurrent: (bool, default `true`) whether to hide the current view.
* init: (bool, default `false`) whether to init the previous page.
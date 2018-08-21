# mgn-smooth-scroll ( Don't Need jQuery )


Implement smooth scroll.
- Target browser : IE9+

___

# Install

```
npm i mgn-smooth-scroll -S
```

## Or Download raw data
[↓ download "mgn-smooth-scroll.js"](https://raw.githubusercontent.com/frontend-isobar-jp/mgn-smooth-scroll/master/src/mgn-smooth-scroll.js)

___

# Import

```
import mgnSmoothScroll from 'mgn-smooth-scroll';
```

___

# Constructor

```
new mgnSmoothScroll(element [, option]);
```
|Argument|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|element|String|-(Required)|Specify target element.<br>ex) "a"|
|option|Object|-|ex)<br>option = {<br>speed: 1000,<br>easing: "easeOutQuint",<br>posFix: 50,<br>ignore: ".btn,<br>blank: true,<br>customAnchor: "?anchor=",<br>}|


|Argument|Data type|Default|Descroption|
|:-------|:--------|:------|:----------|
|speed|Number|800|Specify scroll speed.|
|easing|String|"linear"|Specify easing from one of the following:<br>"linear"<br>"easeInCubic"<br>"easeOutCubic"<br>"easeInOutCubic"<br>"easeInQuart"<br>"easeOutQuart"<br>"easeInOutQuart"<br>"easeInQuint"<br>"easeOutQuint"<br>"easeInOutQuint"|
|posFix|Number|0|Specify a minus value for header.|
|ignore|String|-|Specify element to be excluded from an event.|
|blank|Boolean|false|Anchor link for page transition.|
|customAnchor|String|"#/"|Specify effective "?anchor=", "?id=" etc. when blank: true is set.|
___

# Method

|Method|Argument|Descroption|
|:-------|:--------|:------|
|SmoothScroll( Number )|-|Scroll to the position specified in parameter.|
|ScrollEnd = function(){};|-|To be executed after scroll is complete.|

___

# Demo

[https://frontend-isobar-jp.github.io/mgn-smooth-scroll/](https://frontend-isobar-jp.github.io/mgn-smooth-scroll/)

```
import mgnSmoothScroll from 'mgn-smooth-scroll';

let scroll = new mgnSmoothScroll(
    "a",
    {
        easing: "easeOutQuint",
        ignore: ".ignore",
        posFix: 60,
        blank: true,
    }
);

scroll.ScrollEnd = function(){
    console.log("ScrollEnd")
};
```

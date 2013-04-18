# Top-z

## Overview

### Use case

You just created a DOM element for some ephemeral popup, like a context menu or confirmation dialog.
You want to make sure that element appears on top of everything else on the page.
Maybe you even do this repeatedly, and each new element needs to appear on top of the others.
You want to do this in a way that works reliably in any situation, even in the presence of
third-party libraries may have also created and positioned popups in their own ways.

### Solution

**[A]** Append the popup to `document.body`.

**[B]** Apply `z-index: 0` to every direct child of `document.body` for which `z-index` is unspecified.

**[C]** Give the popup element a higher Z index than all of its siblings.

## The code

`top-z.js` just defines one short function that helps you with **[B]** and **[C]**.
This project is more about the documentation than the code; you may want to implement
this some other way (such as with a different library, if jQuery isn't your thing).

### Dependencies

This implementation depends on jQuery.
I don't know what versions it supports.
A lot of them, I would think.

### The `topZ` function

`topZ` is a nullary function that is both side-effecting and returning.

The side effect is exactly **[B]**.

The return value is the `z-index` you need to accomplish **[C]**.

If `popup` is a DOM element, this snippet will display it at the top of the Z stack:
```javascript
$(popup).appendTo('body').zIndex(topZ());
```

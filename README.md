# Top-z

Display a `popup` element on top of everything else.

```javascript
$(popup).appendTo('body').zIndex(topZ());
```

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

This implementation depends on jQuery and jQuery-UI Core.
I don't know what versions it supports.
A lot of them, I would think.

### The `topZ` function

`topZ` is a nullary function that is both side-effecting and returning.

The side effect is exactly **[B]**.

The return value is a number `1` greater than the maximum `z-index` among the
children of `document.body`. This is the `z-index` you need to accomplish **[C]**.

If `popup` is a DOM element, this snippet will display it at the top of the Z stack:

```javascript
$(popup).appendTo('body').zIndex(topZ());
```

## Rationale

### Why not use the topZIndex jQuery plugin?

The `topZIndex` plugin I refer to is located at
https://code.google.com/p/topzindex/
and is at version 1.2 at the time of this writing.

The problem with simply using this plugin as

```javascript
$(popup).topZIndex();
```

is that it can be unacceptably slow if the DOM tree is large,
because it has to examine every element in the tree.

The stategy advocated by this project, in contrast, only deals with elements that are
direct children of `document.body`, which is likely to be a much smaller collection.

### Why is **[B]** necessary?

This is a somewhat suble point related to how `z-index` works.
All DOM elements are treated as having `z-index: 0` by default, yet there *is* a difference
between an element with `z-index: 0` and an element on which `z-index` is not defined at all.
Setting `z-index` creates a stacking context.

Ensuring that the popup's siblings all have their own stacking contexts means that
the `z-index`es of the descendants further down the DOM tree become irrelevant;
the popup now only needs to compete with its siblings.
This is what enables us to avoid inspecting the entire tree in **[C]**.

See https://developer.mozilla.org/en-US/docs/CSS/Understanding_z-index
for an example-based explanation of stacking contexts.

### Couldn't **[B]** affect the way the rest of the page renders?

I don't have a great justification for this, but I assert that most pages are not designed this way.

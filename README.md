# Top-z

## Use case

You just created a DOM element for some ephemeral popup, like a context menu or confirmation dialog.
You want to make sure that element appears on top of everything else on the page.
Maybe you even do this repeatedly, and each new element needs to appear on top of the others.
You want to do this in a way that works reliably in any situation, even in the presence of
third-party libraries that also create and position popups in their own ways.

## The code

`top-z.js` only defines one short function.
This documentation is more important than the code.

### Dependencies

This implementation depends on jQuery.
I don't know what versions it supports.
A lot of them, I would think.

### The `topZ` function

`topZ` is a nullary function with side effects and a return value.

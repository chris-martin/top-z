$(function() {
  setTimeout(function() {
    $('<div/>')
      .addClass('popup')
      .appendTo('body')
      .zIndex(topZ());
  }, 1000);
});


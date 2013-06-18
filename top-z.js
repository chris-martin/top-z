function topZ(scrollingElement) {
    var max = 0;
    $(scrollingElement || 'body').children().each(function () {
        var el = $(this);
        var z = el.zIndex();
        if (z === 0) {
            el.zIndex(0);
        } else {
            max = Math.max(max, z);
        }
    });
    return max + 1;
}

function findContainer(targetElement) {
    return $(targetElement).parents().filter(function () {
        var o = $(this).css('overflow');
        return (o === 'auto' || o === 'scroll') && this.tagName.toUpperCase() !== 'HTML';
    })[0] || $('body')[0];
}

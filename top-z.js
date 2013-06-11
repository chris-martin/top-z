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

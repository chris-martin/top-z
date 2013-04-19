function topZ() {
    var max = 0;
    $('body>*').each(function() {
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

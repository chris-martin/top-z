function topZ() {
    var topZ = 0;
    $('body>*').each(function(el) {
        var z = el.zIndex();
        if (z === 0) {
            el.zIndex(0);
        } else {
            topZ = Math.max(topZ, z);
        }
    });
    return topZ + 1;
}


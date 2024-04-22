function onoff(elm) {
    elm.addEventListener('mouseover', function(e) {
        elm.style.fill = '#f90';
    });
    elm.addEventListener('mouseout', function(e) {
        elm.style.fill = '';
    });
}

window.addEventListener('load', function(e) {
    var doc = document.querySelector('#sample'),
        svg = doc.contentDocument || doc.getSVGDocument(),
        path = svg.querySelectorAll('path'),
        i;

    for (i = 0; i < path.length; ++i) {
        onoff(path[i]);
    }
});
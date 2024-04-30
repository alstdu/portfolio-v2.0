const pages = ['home', 'projects', 'skills', 'about me'];

/* global fullpage */
new fullpage( '#fullpage', {
    menu: '#myMenu',
    navigation: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    autoScrolling: true,
    scrollHorizontally: true,
    scrollBar: false,
    keyboardScrolling: true,
    fixedElements: '#header',
    sectionsColor: ['#fafafa', '#fafafa', '#fafafa', '#fafafa'],
    licenseKey: 'gplv3-license',
    verticalCentered: true,
    navigationTooltips: pages,
    scrollOverflow: true,
    // this regex matches spaces - replace replaces the spaces with nothing (removes them)
    anchors: pages.map( s => s.replace(/\s/g, '') ),
    onScrollOverflow: function(section, slide, position, direction) {
        // eslint-disable-next-line no-unused-vars
        var params = {
            section: section,
            slide: slide,
            position: position,
            direction: direction,
        };
        console.log( params );
    },
});

console.log('hello world');

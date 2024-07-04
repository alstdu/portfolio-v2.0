const pages = ['intro', 'process', 'challenges'];

// TODO: DRY - don't repeat yourself
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
    sectionsColor: ['#fafafa', '#fafafa', '#fafafa'],
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
    },
});

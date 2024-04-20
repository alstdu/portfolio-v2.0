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
    sectionsColor: ['#f9f9f9', '#fafafa', '#fafafa', '#fafafa'],
    licenseKey: 'gplv3-license',
    verticalCentered: true,
    navigationTooltips: ['home','projects', 'skills', 'about me'],
    scrollOverflow: true,
        onScrollOverflow: function(section, slide, position, direction){
            // eslint-disable-next-line no-unused-vars
            var params = {
                section: section,
                slide: slide,
                position: position,
                direction: direction,
            };
            console.log(params);
},
});

console.log('helloworld');

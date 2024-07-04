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
    sectionsColor: ['#fafafa', '#fafafa', '#fafafa', '#fafafa', '#fafafa'],
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

document.querySelectorAll('.skills-lists h4 button').forEach( ( skillListDropDown ) => {
    skillListDropDown.addEventListener('click', function() {
        let expanded = skillListDropDown.getAttribute('aria-expanded') === 'true';
        let target = skillListDropDown.parentElement.nextElementSibling;
        skillListDropDown.setAttribute('aria-expanded', !expanded);
        if (target.classList.contains('show')) {
            target.classList.remove('show');
        } else {
            target.classList.add('show');
        }
      });
} );

document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('open');
});

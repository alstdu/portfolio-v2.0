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

// TODO: consider if the button should be targetted or the parent div or what
// document.querySelectorAll('.skills-lists h4 button')
document.querySelectorAll('.skills-lists > div').forEach( ( skillListDropDown ) => {
    skillListDropDown.addEventListener('click', function() {
        let expanded = skillListDropDown.getAttribute('aria-expanded') === 'true';
        // let target = skillListDropDown.parentElement.nextElementSibling;
        let target = skillListDropDown.querySelector('ul');
        let arrow = skillListDropDown.querySelector('h4 i');
        // TODO: does targetting the div instead of the button
        // hurt the accessibility of this aria-expanded?
        skillListDropDown.setAttribute('aria-expanded', !expanded);
        if (target.classList.contains('show')) {
            target.classList.remove('show');
            arrow.classList.remove('expanded');
        } else {
            target.classList.add('show');
            arrow.classList.add('expanded');
        }
      });
} );

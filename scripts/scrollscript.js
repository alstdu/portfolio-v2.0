// https://chatgpt.com/share/441c1323-116e-4f57-b8de-5915c6a9fe08
const content = document.querySelector( '.section-view' );
const container = content.parentElement;
const customScrollbar = document.querySelector( '.custom-scrollbar' );
const bumper = document.querySelector( '.bumper' );

let bumperWidth = bumper.offsetWidth;
let isDragging = false;
let startX;
let startScrollLeft;

const getScrollRatio = () => {
    return content.scrollLeft / (content.scrollWidth - content.clientWidth);
}

const updateScrollbarPosition = () => {
    const scrollRatio = getScrollRatio();
    const scrollbarWidth = customScrollbar.offsetWidth;
    const availableSpace = `calc(100% - 2 * (120px + max((100vw - 1012.5px) / 2, 4em)) - ${scrollbarWidth}px)`;
    const scrollbarPosition = `calc(120px + max((100vw - 1012.5px) / 2, 4em) + ${scrollRatio} * ${availableSpace})`;
    customScrollbar.style.left = scrollbarPosition;
}

const setScrollbarWidth = () => {
    customScrollbar.style.width = 'calc((100% - 2 * (120px + max((100vw - 1012.5px) / 2, 4em))) * var(--content-ratio))';
    updateScrollbarWidth();
}

function updateScrollbarWidth() {
    const contentWidth = content.scrollWidth;
    const visibleWidth = content.clientWidth;
    const ratio = visibleWidth / contentWidth;
    customScrollbar.style.setProperty( '--content-ratio', ratio );
    updateScrollbarPosition();
}

const handleResize = () => {
    bumperWidth = bumper.offsetWidth;
    updateScrollbarWidth();
}

content.addEventListener( 'scroll', () => {
    if ( isDragging ) {
        return;
    }
    updateScrollbarPosition();
} );

customScrollbar.addEventListener( 'mousedown', ( e ) => {
    isDragging = true;
    startX = e.clientX;
    startScrollLeft = content.scrollLeft;
    document.body.style.userSelect = 'none'; // Prevent text selection
} );

document.addEventListener( 'mousemove', ( e ) => {
    if ( !isDragging ) {
        return;
    }
    const deltaX = e.clientX - startX;
    const spaceBetweenBumpers = container.offsetWidth - 2 * bumperWidth;
    const scrollbarWidth = customScrollbar.offsetWidth;
    const scrollDistance = deltaX / (spaceBetweenBumpers - scrollbarWidth) * (content.scrollWidth - content.clientWidth);
    content.scrollLeft = startScrollLeft + scrollDistance;
    updateScrollbarPosition();
} );

document.addEventListener( 'mouseup', () => {
    isDragging = false;
    document.body.style.userSelect = ''; // Re-enable text selection
} );

// Call updateScrollbarWidth initially and on window resize
setScrollbarWidth();
window.addEventListener('resize', handleResize);

// since the js ran, we can get rid of the old scrollbar and make our custom one visible
content.style.scrollbarWidth = 'none';
customScrollbar.style.display = 'unset';

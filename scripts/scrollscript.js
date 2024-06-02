const content = document.querySelector( '.bar-1' );
const container = content.parentElement;
const customScrollbar = document.querySelector( '.custom-scrollbar' );
const bumper = document.querySelector( '.bumper' );

let bumperWidth = bumper.offsetWidth;
let isDragging = false;
let startX;
let startScrollLeft;

function getScrollRatio() {
    return content.scrollLeft / (content.scrollWidth - content.clientWidth);
}

function updateScrollbarPosition() {
    const scrollRatio = getScrollRatio();
    const scrollbarWidth = customScrollbar.offsetWidth;
    const availableSpace = `calc(100% - 2 * (120px + max((100vw - 1012.5px) / 2, 4em)) - ${scrollbarWidth}px)`;
    const scrollbarPosition = `calc(120px + max((100vw - 1012.5px) / 2, 4em) + ${scrollRatio} * ${availableSpace})`;
    customScrollbar.style.left = scrollbarPosition;
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

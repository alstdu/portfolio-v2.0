const content = document.querySelector( '.bar-1' );
const container = content.parentElement;
const customScrollbar = document.querySelector( '.custom-scrollbar' );
const bumper = document.querySelector( '.bumper' );

let bumperWidth = bumper.offsetWidth;
let isDragging = false;
let startX;
let startScrollLeft;

const updateScrollbarPosition = () => {
    const spaceBetweenBumpers = container.offsetWidth - 2 * bumperWidth;
    const scrollbarWidth = customScrollbar.offsetWidth;
    const scrollRatio = content.scrollLeft / ( content.scrollWidth - content.clientWidth );
    const scrollbarLeft = bumperWidth + scrollRatio * ( spaceBetweenBumpers - scrollbarWidth );
    customScrollbar.style.left = `${scrollbarLeft}px`;
}

const handleResize = () => {
    // on resize the bumper width can change
    bumperWidth = bumper.offsetWidth;
    updateScrollbarPosition();
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

// Call updateScrollbarPosition initially and on window resize
window.addEventListener( 'resize', handleResize );
updateScrollbarPosition();

const DROPDOWN_NAME = 'dropdown';
const DROPDOWN_SHOW = 'show';

// Create selector
var flame = function(selector) {
    if (! (this instanceof flame) ) {
        return new flame(selector);
    }
    this.elements = document.querySelectorAll(selector);
    return this;
}

// Auto close when click outside
 window.autoClose = {
    dropdown: {
        name: DROPDOWN_NAME,
        show: DROPDOWN_SHOW
    }
};

var autoCloseQueue = [];

document.addEventListener('click', function(e) {
    console.log(autoCloseQueue);
    for(i in autoCloseQueue) {
        // Dropdown auto close
        if(autoCloseQueue[i] === autoClose[[autoCloseQueue[i]]].name) {
            if (!e.target.className.includes(autoClose[[autoCloseQueue[i]]].name)) {
                flame('.' + DROPDOWN_NAME + '.' + DROPDOWN_SHOW).dropdown('hide');
            }
        }
    }
});

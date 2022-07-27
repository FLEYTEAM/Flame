const DROPDOWN_NAME = 'dropdown';
const DROPDOWN_SHOW = 'show';

const MODAL_NAME = 'modal';
const MODAL_SHOW = 'show';

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
    },
    modal: {
        name: MODAL_NAME,
        show: MODAL_SHOW,
    }
};

// Toggle function
function __classToggle(a, element, type) {
    let __elementToggleState = element.classList.contains(window.autoClose[type].show);
    if(a == 'hide') {
        if(__elementToggleState) {
            element.classList.remove(window.autoClose[type].show);
            autoCloseQueue = autoCloseQueue.filter(function(item) { return item !== window.autoClose[type].name });
        }
    }
    if(a == 'show') {
        if(!__elementToggleState) {
            element.classList.add(window.autoClose[type].show);
            !autoCloseQueue.includes(window.autoClose[type].name) ? autoCloseQueue.push(window.autoClose[type].name) : '';
        }
    }
}

var autoCloseQueue = [];

const __DROPDOWN_ELEMENTS = flame('.' + DROPDOWN_NAME).elements;

document.addEventListener('click', function(e) {
    console.log(autoCloseQueue);
    for(i in autoCloseQueue) {
        // Auto close
        if(autoCloseQueue[i] === window.autoClose[[autoCloseQueue[i]]].name) {
            let autoCloseQuery = '.' + window.autoClose[[autoCloseQueue[i]]].name + '.' + window.autoClose[[autoCloseQueue[i]]].show;
            flame(autoCloseQuery).dropdown('hide');
        }
    }
});
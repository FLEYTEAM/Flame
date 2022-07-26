function __dropdownToggle(a, element) {
    let __dropdownState = element.classList.contains(DROPDOWN_SHOW);
    if(a == 'hide') {
        if(__dropdownState) {
            element.classList.remove(DROPDOWN_SHOW);
            autoCloseQueue = autoCloseQueue.filter(function(item) { return item !== DROPDOWN_NAME });
        }
    }
    if(a == 'show') {
        if(!__dropdownState) {
            element.classList.add(DROPDOWN_SHOW);
            !autoCloseQueue.includes(DROPDOWN_NAME) ? autoCloseQueue.push(DROPDOWN_NAME) : '';
        }
    }
}
flame.prototype.dropdown = function(e){
    this.elements.forEach(function(element) {
        __dropdownToggle(e, element);
    });
}

const __DROPDOWN_ELEMENTS = flame('.' + DROPDOWN_NAME).elements;

__DROPDOWN_ELEMENTS.forEach(function(element) {
    let toggleElement = element.querySelector('[data-toggle="' + DROPDOWN_NAME + '"]');
    if(toggleElement) {
        toggleElement.addEventListener('click', function(e){
            e.stopPropagation();
            window._dropdownClickedElement = element;
            let __dropdownAction = element.classList.contains(DROPDOWN_SHOW) ? 'hide' : 'show';
            __dropdownToggle(__dropdownAction, element);
        });
    }
});
flame.prototype.dropdown = function(e) {
    this.elements.forEach(function(element) {
        __classToggle(e, element, 'dropdown');
    });
}

if(__DROPDOWN_ELEMENTS) {
    for(var i = 0; i < __DROPDOWN_ELEMENTS.length; i++) {
        // __DROPDOWN_ELEMENTS[i].setAttribute('data-dropdown-id', i);
        __DROPDOWN_ELEMENTS[i].addEventListener('click', function(e){
            e.stopPropagation();
            window._dropdownClickedElement = this;
            let __dropdownAction = this.classList.contains(DROPDOWN_SHOW) ? 'hide' : 'show';
            // Close all the opened
            for(var j = 0; j < __DROPDOWN_ELEMENTS.length; j++) {
                __classToggle('hide', __DROPDOWN_ELEMENTS[j], 'dropdown');
            }
            __classToggle(__dropdownAction, this, 'dropdown');
        });
    }
}
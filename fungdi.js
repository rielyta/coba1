// Filter Categories
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        const items = document.querySelectorAll('.menu-item');

        items.forEach(item => {
            if (category === 'all-floral' || category === 'all-classic' || category === 'all-season' || category === 'all-indoor' || category === 'all-outdoor') {
                item.style.display = 'block'; // Show all items for 'All' category
            } else if (item.getAttribute('data-category') === category) {
                item.style.display = 'block'; // Show matching category
            } else {
                item.style.display = 'none'; // Hide other categories
            }
        });
    });
});

// Quantity Increment and Decrement
document.querySelectorAll('.input-group').forEach(group => {
    const minusButton = group.querySelector('#button-minus');
    const plusButton = group.querySelector('#button-plus');
    const inputField = group.querySelector('#quantity-input');

    minusButton.addEventListener('click', () => {
        let currentValue = parseInt(inputField.value);
        if (currentValue > 0) {
            inputField.value = currentValue - 1;
        }
    });

    plusButton.addEventListener('click', () => {
        let currentValue = parseInt(inputField.value);
        inputField.value = currentValue + 1;
    });
});
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');

    // Gestion des boutons de taille
    const sizeOptions = document.querySelectorAll('.size-option');
    console.log('Size options found:', sizeOptions.length);

    sizeOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            console.log('Size option clicked');

            // Si l'élément cliqué est déjà actif, on le désactive
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                // Sinon, on retire la classe active de tous les boutons
                sizeOptions.forEach(opt => {
                    opt.classList.remove('active');
                });
                // Et on l'ajoute à l'élément cliqué
                this.classList.add('active');
            }
        });
    });

    const quantityInput = document.querySelector('.quantity-selector input');
    const decrementBtn = document.querySelector('.quantity-btn:first-of-type');
    const incrementBtn = document.querySelector('.quantity-btn:last-of-type');
    
    const MIN_QUANTITY = 1;
    const MAX_QUANTITY = 10;

    function updateQuantity(value) {
        let newValue = parseInt(quantityInput.value) + value;
        newValue = Math.max(MIN_QUANTITY, Math.min(MAX_QUANTITY, newValue));
        quantityInput.value = newValue;
    }

    decrementBtn.addEventListener('click', () => updateQuantity(-1));
    incrementBtn.addEventListener('click', () => updateQuantity(1));

    quantityInput.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            updateQuantity(1);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            updateQuantity(-1);
        }
    });

    quantityInput.addEventListener('input', (e) => {
        e.preventDefault();
        quantityInput.value = quantityInput.defaultValue;
    });
});
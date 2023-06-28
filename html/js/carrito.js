// Obtener referencias a los botones y al contador
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const counter = document.getElementById('counter');

// Variable para almacenar el valor actual del contador
let count = 0;

// Función para actualizar el contador
function updateCounter() {
  counter.textContent = count;
}

// Función para incrementar el contador
function addToCart() {
  count++;
  updateCounter();

  // Crear botón "Eliminar"
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Eliminar';
  removeButton.className = 'remove-from-cart';
  removeButton.addEventListener('click', removeFromCart);

  // Insertar el botón "Eliminar" al lado del botón "Añadir al carrito"
  this.parentNode.insertBefore(removeButton, this.nextSibling);
}

// Función para decrementar el contador
function removeFromCart() {
  if (count > 0) {
    count--;
    updateCounter();
    this.parentNode.removeChild(this);
  }
}

// Asociar los eventos de clic a las funciones correspondientes
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});


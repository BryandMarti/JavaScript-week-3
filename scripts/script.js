// Declare global variables
let sliceContainer;
const callProducts = document.getElementById('products-Call');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Fetch JSON data and populate products
fetch('/scripts/foodInfo.json')
  .then(res => res.json())
  .then(data => {
    sliceContainer = data;
    gatherProducts(sliceContainer);
  })
  .catch(error => console.error('Error fetching JSON:', error));

  
function createProductElement(item, index) {
  const productElement = document.createElement('div');
  productElement.classList.add('grid-Items' + (index + 1));
  productElement.innerHTML = `
    <a href="product.html?id=${index}">
      <img src="${item.image}" alt="${item.name}">
    </a>
    <h3>${item.name}</h3>
    <p>Ingredients: ${item.ingredients}</p>
    <p>Price: ${item.price}</p>
  `;
  return productElement;
}

function gatherProducts(products) {
  callProducts.innerHTML = ''; 
  products.forEach((item, index) => {
    const productElement = createProductElement(item, index);
    callProducts.appendChild(productElement);
  });
}

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = sliceContainer.filter(item =>
    item.name.toLowerCase().includes(searchTerm) ||
    item.ingredients.toLowerCase().includes(searchTerm)
  );
  gatherProducts(filteredProducts);
});

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = sliceContainer.filter(item =>
    item.name.toLowerCase().includes(searchTerm) ||
    item.ingredients.toLowerCase().includes(searchTerm)
  );
  gatherProducts(filteredProducts);
});
const products = [
  { name: "Tomato", price: 20 },
  { name: "Potato", price: 15 },
  { name: "Apple", price: 100 },
  { name: "Banana", price: 40 }
];

function Products() {
  return (
    <div>
      <h2>Product Catalogue</h2>
      <ul>
        {products.map((p, index) => (
          <li key={index}>
            {p.name} - ₹{p.price} per kg
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;

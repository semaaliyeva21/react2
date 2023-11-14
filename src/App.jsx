import './App.css'
import { products } from './products.js';


function App() {
console.log(products);
let sortedProductsByRating = [...products].sort((a, b) => b.rate - a.rate);

let highestRatedProduct = sortedProductsByRating[0];
  return (
    <>
      <h1>This is Header</h1>

      <h1>This is Main</h1>

      <h4>component 1</h4>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Price</th>
            <th>Category</th>
            <th>Rate</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.rating.rate}</td>
              <td>{product.rating.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>component 2</h4>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>

      <h4>component 3</h4>
      <div className="card">
        <h5>Highest Rated Product</h5>
        {highestRatedProduct && (
          <div>
            <h3>{highestRatedProduct.name}</h3>
            <p>Price: ${highestRatedProduct.price}</p>
            <p>Category: {highestRatedProduct.category}</p>
            <p>Rating: {highestRatedProduct.rating.rate}</p>
            <p>Count: {highestRatedProduct.rating.count}</p>
          </div>
        )}
      </div>

      <h1>This is Footer</h1>
    </>
  );
}

export default App

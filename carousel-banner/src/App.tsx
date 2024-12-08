import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  brand: string;
  price: string;
  rating: string;
  thumbnail: string;
  images: string[];
}
function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  console.log(products);

  return (
    <div className="container">
      <h2>Carousel Banner</h2>
      <div className="card-parent">
        {products.map((product, idx) => {
          return (
            <div className="card-child" key={`${product.id}-${idx}`}>
              <img
              className="img-style"
                src={product.thumbnail}
                alt={product.title}
              />
              <p className="brand">{product.brand ? product.brand : 'Essentials'}</p>
              <p className="title">{product.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

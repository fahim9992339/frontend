import { useState, useEffect } from "react";
import axios from "axios";

const Getproduct = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  const getproducts = async () => {
    try {
      const response = await axios.get("https://Fahim999gt.pythonanywhere.com/api/get_product_details");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  const image_path = "https://Fahim999gt.pythonanywhere.com/static/image/";

  return (
    <div className="row container-fluid">
      <h1 className="text-center">Products</h1>
      {loading && <h5 className="text-info text-center">Loading products...</h5>}
      {error && <h5 className="text-danger text-center">Error: {error}</h5>}

      {Array.isArray(products) && products.map((product) => (
        <div className="col-md-3 justify-content-center mt-4" key={product.id}>
          <div className="card shadow p-3">
            {product.product_photo && <img src={image_path + product.product_photo} alt={product.product_name} width="100%" height="200px" style={{ objectFit: "cover" }} />}
            <div className="card-body">
              <h5 className="text-info">{product.product_name}</h5>
              <p className="text-muted">{product.product_brand}</p>
              <b className="text-warning">{product.product_size}</b><br />
              <button className="btn btn-dark w-100 mt-2">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Getproduct;

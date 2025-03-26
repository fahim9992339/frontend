import axios from "axios";
import { useState, useEffect } from "react";

const Getproduct = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);

    // Function get products
    const getproducts = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://modcom2.pythonanywhere.com/api/get_product_details");
            setLoading(false);
            setProducts(response.data);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    useEffect(() => {
        getproducts();
    }, []);

    const image_path = "https://Fahim999gt.pythonanywhere.com/static/image/";

    return (
        <div className="row container-fluid">
            <h1 className="text-center">Get products</h1>
            {loading && <div>{loading}</div>}  {/* Loading state */}
            {error && <div>Error: {error}</div>}  {/* Error message */}
            
            {Array.isArray(products) && products.map((product) => (
                <div className="col-md-3 justify-content-center mt-4" key={product.id}>
                    <div className="card shadow p-4">
                        {product.product_photo && <img src={image_path + product.product_photo} alt={product.product_name} />}
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





// We are getting an error of two many re-renders, to solve it we need to use a useEffect as shown below 
    // useEffect ( ()=>[
    //     getproducts()
    // ] , [])
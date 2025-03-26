import { useState } from "react";
import axios from "axios";

const Addproduct = () => {
  const [product_name, setProductName] = useState("");
  const [product_brand, setProductBrand] = useState("");
  const [product_size, setProductsize] = useState("");
  const [product_color, setProductColor] = useState("");
  const [product_material, setProductMaterial] = useState("");
  const [product_gender, setProductGender] = useState("");
  const [product_price, setProductPrice] = useState("");
  const [product_quantity, setProductQuantity] = useState("");
  const [product_photo, setProductPhoto] = useState("");

  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    setLoading("Please wait...");

    try {
      const data = new FormData();
      data.append("product_name", product_name);
      data.append("product_brand", product_brand);
      data.append("product_size", product_size);
      data.append("product_color", product_color);
      data.append("product_material", product_material);
      data.append("product_gender", product_gender);
      data.append("product_price", product_price);
      data.append("product_quantity", product_quantity);
      data.append("product_photo", product_photo);

      const response = await axios.post("https://Fahim999gt.pythonanywhere.com/api/add_products", data);

      setSuccess(response.data.message);
      setLoading("");
    } catch (error) {
      console.error(error); // Log the full error for debugging
      setLoading("");
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <h1 className="text-center">Add product</h1>
      <h1>{loading}</h1>
      <h1>{success}</h1>
      <h1>{error}</h1>
      <form className="card shadow col-md-6 p-4" onSubmit={submit}>
        <label htmlFor="">Product Name</label>
        <input
          type="text"
          className="form-control mb-4"
          onChange={(e) => setProductName(e.target.value)}/>
        <br />

        <label htmlFor="">Product Brand</label>
        <input
          type="text"
          className="form-control mb-4"
          onChange={(e) => setProductBrand(e.target.value)}/>
        <br />

        <label htmlFor="">Product size(KSH)</label>
        <input
          type="number"
          className="form-control mb-4"
          onChange={(e) => setProductsize(e.target.value)}
        /><br />

        <label htmlFor="">Product Color</label>
        <input
          type="text"
          className="form-control mb-4"
          onChange={(e) => setProductColor(e.target.value)}/>
        <br />

        <label htmlFor="">Product Material</label>
        <input
          type="text"
          className="form-control mb-4"
          onChange={(e) => setProductMaterial(e.target.value)}/>
        <br />

        <label htmlFor="">Product Gender</label>
        <input
          type="text"
          className="form-control mb-4"
          onChange={(e) => setProductGender(e.target.value)}/>
        <br />

        <label htmlFor="">Product Price(KSH)</label>
        <input
          type="number"
          className="form-control mb-4"
          onChange={(e) => setProductPrice(e.target.value)}/>
        <br />

        <label htmlFor="">Product Quantity</label>
        <input
          type="number"
          className="form-control mb-4"
          onChange={(e) => setProductQuantity(e.target.value)}/>
        <br />

        <label htmlFor="">Product Photo</label>
        <input
          type="file"
          className="form-control mb-4"
          onChange={(e) => setProductPhoto(e.target.files[0])}
          accept="image/*"/>
        <br />
      </form>
    </div>
  );
};


export default Addproduct;

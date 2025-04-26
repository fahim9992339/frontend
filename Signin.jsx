import { useState } from "react";
import axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please wait...");
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("https://Fahim999gt.pythonanywhere.com/api/signin", { email, password });
      setSuccess(response.data.message);
      setLoading("");
    } catch (error) {
      console.error(error);
      setLoading("");
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      <h1 className="text-center">Sign In</h1>
      {loading && <h5 className="text-info">{loading}</h5>}
      {success && <h5 className="text-success">{success}</h5>}
      {error && <h5 className="text-danger">{error}</h5>}

      <form className="card shadow col-md-6 p-4" onSubmit={submit}>
        <label>Email</label>
        <input type="email" className="form-control mb-3" onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input type="password" className="form-control mb-3" onChange={(e) => setPassword(e.target.value)} />

        <button type="submit" className="btn btn-primary w-100 mt-4">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;

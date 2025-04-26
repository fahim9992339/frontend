import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [fullnames, setFullnames] = useState("");
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
      const response = await axios.post("https://Fahim999gt.pythonanywhere.com/api/signup", { fullnames, email, password });
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
      <h1 className="text-center">Sign Up</h1>
      {loading && <h5 className="text-info">{loading}</h5>}
      {success && <h5 className="text-success">{success}</h5>}
      {error && <h5 className="text-danger">{error}</h5>}

      <form className="card shadow col-md-6 p-4" onSubmit={submit}>
        <label>Full Names</label>
        <input type="text" className="form-control mb-3" onChange={(e) => setFullnames(e.target.value)} />

        <label>Email</label>
        <input type="email" className="form-control mb-3" onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input type="password" className="form-control mb-3" onChange={(e) => setPassword(e.target.value)} />

        <button type="submit" className="btn btn-primary w-100 mt-4">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

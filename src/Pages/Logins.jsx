import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email and password are valid before attempting login
    if (!email || !password) {
      toast.error("Both email and password are required", { position: "top-center" });
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if the user UID matches the allowed UID
      if (user.uid === "oYEiLaCM4XgqbQcJT783vcwuFCr2") {
        toast.success("User logged in successfully!", { position: "top-center" });
        navigate("/dashboard");
      } else {
        // If the UID doesn't match, display an error message
        toast.error("Access denied", { position: "top-center" });
      }
    } catch (error) {
      // Handle specific errors
      if (error.code === "auth/invalid-email") {
        toast.error("Invalid email address", { position: "top-center" });
      } else if (error.code === "auth/user-not-found") {
        toast.error("No user found with this email", { position: "top-center" });
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password", { position: "top-center" });
      } else {
        toast.error("An error occurred: " + error.message, { position: "top-center" });
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title mb-4">Login</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

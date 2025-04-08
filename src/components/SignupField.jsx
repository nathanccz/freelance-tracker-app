import { useAuthContext } from "./authContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { isValidEmail } from "../../utils/helpers";

export default function SignupField() {
  const { handleGoogleLogin, handleEmailSignup, handleEmailLogin } =
    useAuthContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleClickSignup = () => {
    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email.");
      return;
    }
    handleEmailLogin(formData.email, formData.password);
  };

  return (
    <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
      <h1 className="font-bold text-lg">Welcome!</h1>

      <label className="fieldset-label">Email</label>
      <input
        type="first_name"
        className="input"
        placeholder="First Name"
        name="first_name"
        onChange={handleInputChange}
      />
      <input
        type="last_name"
        className="input"
        placeholder="Email"
        name="last_name"
        onChange={handleInputChange}
      />
      <input
        type="email"
        className="input"
        placeholder="Email"
        name="email"
        onChange={handleInputChange}
      />

      <label className="fieldset-label">Password</label>
      <input
        type="password"
        className="input"
        placeholder="Password"
        name="password"
        onChange={handleInputChange}
      />

      <button className="btn btn-neutral mt-4" onClick={handleClickLogin}>
        Sign Up
      </button>
      <p>OR</p>

      <button
        className="btn btn-outline flex justify-center gap-5"
        onClick={handleGoogleLogin}
      >
        <Icon icon="devicon:google" className="text-2xl" />
        Sign up with Google
      </button>
    </fieldset>
  );
}

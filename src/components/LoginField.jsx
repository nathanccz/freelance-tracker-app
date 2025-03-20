import { useAuthContext } from "./authContext";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function LoginField() {
  const { handleGoogleLogin } = useAuthContext();
  return (
    <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
      <h1 className="font-bold text-lg">Welcome!</h1>

      <label className="fieldset-label">Email</label>
      <input type="email" className="input" placeholder="Email" />

      <label className="fieldset-label">Password</label>
      <input type="password" className="input" placeholder="Password" />

      <button className="btn btn-neutral mt-4">Sign In</button>
      <p>OR</p>

      <button
        className="btn btn-outline flex justify-center gap-5"
        onClick={handleGoogleLogin}
      >
        <Icon icon="devicon:google" className="text-2xl" />
        Log in with Google
      </button>
    </fieldset>
  );
}

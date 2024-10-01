import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Mail, KeyRound } from "lucide-react";

function LoginForm() {
  return (
    <div className="flex justify-center px-4">
      <div className="card bg-base-100 shadow-xl mt-14 mb-14 border input-bordered max-w-sm">
        <div className="card-body">
          <h2 className="card-title text-2xl">Login</h2>
          <div className="card-description text-sm">
            Enter your email below to login to your account
          </div>
          <div className="items-center mt-2">
            <div className="label">
              <span className="">Email</span>
            </div>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              <Mail className="w-4 h-4 opacity-70" />
              <input type="text" className="grow" placeholder="m@example.com" />
            </label>
            <div className="label">
              <span className="">Password</span>
              <span className="underline">Forgot your password?</span>
            </div>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              <KeyRound className="w-4 h-4 opacity-70" />
              <input type="password" className="grow" value="password" />
            </label>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary w-full text-base">Login</button>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-ghost border input-bordered w-full text-base">
              Login with Google
            </button>
          </div>
          <div className="mt-4 text-center">
            Don&apos;t have an account?{" "}
            <a href="/auth/signup" className="underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <div>
      <Navbar />
			<LoginForm />
      <Footer />
    </div>
  );
}

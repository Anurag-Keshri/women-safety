import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { Mail, KeyRound } from "lucide-react";

function SignupForm() {
  return (
    <div className="flex justify-center px-4">
      <div className="card bg-base-100 shadow-xl mt-14 mb-14 border input-bordered max-w-sm">
        <div className="card-body">
          <h2 className="card-title text-2xl">Sign Up</h2>
          <div className="card-description text-sm">
            Enter your information to create an account
          </div>	
          <div className="items-center mt-2">
            <div className="grid grid-cols-2 gap-4">
							<div>
								<div className="label">
									<span className="">First name</span>
								</div>
								<label className="input input-bordered flex items-center gap-2 mb-2">
									<input type="text" className="grow" placeholder="Max" />
								</label>
							</div>
							<div>
								<div className="label">
									<span className="">Last name</span>
								</div>
								<label className="input input-bordered flex items-center gap-2 mb-2">
									<input type="text" className="grow" placeholder="Robinson" />
								</label>
							</div>
            </div>
            <div className="label">
              <span className="">Email</span>
            </div>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              <Mail className="w-4 h-4 opacity-70" />
              <input type="text" className="grow" placeholder="m@example.com" />
            </label>
            <div className="label">
              <span className="">Password</span>
            </div>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              <KeyRound className="w-4 h-4 opacity-70" />
              <input type="password" className="grow" value="password" />
            </label>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary w-full text-base">Create an account</button>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-ghost border input-bordered w-full text-base">
              Sign up with Google
            </button>
          </div>
          <div className="mt-4 text-center">
						Already have an account?{" "}
            <a href="/auth/login" className="underline">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Signup() {
  return (
    <div>
      <Navbar />
      <SignupForm />
      <Footer />
    </div>
  );
}

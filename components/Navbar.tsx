import Link from "next/link";
import { ShieldCheck, Menu } from "lucide-react";

const navItems = [
  {
    name: "Tutorials",
    href: "#",
  },
  {
    name: "Products",
    href: "#",
  },
  {
    name: "Forum",
    href: "#",
  },
  {
    name: "Articles",
    href: "#",
  },
];

function HomeButton() {
  return (
    <Link className="btn btn-ghost text-xl px-0" href="/">
      <ShieldCheck />
      Women Safety
    </Link>
  );
}

function AvatarButton() {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        {navItems.map((item) => (
          <li key={item.name} className="block md:hidden">
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
}

function NavItemGroup() {
  return (
		<div className="flex">
			<div className="hidden md:flex">
				{navItems.map((item) => (
					<button key={item.name} className="btn btn-ghost">
						<Link href={item.href}>{item.name}</Link>
					</button>
				))}
			</div>
			<AvatarButton />
		</div>
  );
}

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <HomeButton />
      </div>
      <div className="flex-none">
        <NavItemGroup />
      </div>
    </div>
  );
}

import Link from "next/link";

export default ({ currentUser }) => {
  const links = [
    !currentUser && { label: "Sign Up", href: "/auth/signup" },
    !currentUser && { label: "Sign In", href: "/auth/signin" },
    currentUser && { label: "Sign Out", href: "/auth/signout" },
  ]
    .filter((linkCfg) => linkCfg)
    .map(({ label, href }) => {
      return (
        <li className="mx-4 text-blue-500 hover:text-blue-700" key={href}>
          <Link href={href}>{label}</Link>
        </li>
      );
    });

  return (
    <nav className="flex flex-row justify-between p-4 bg-zinc-100">
      <Link className="text-xl" href="/">
        eTicket
      </Link>
      <div>
        <ul className="flex flex-row">{links}</ul>
      </div>
    </nav>
  );
};

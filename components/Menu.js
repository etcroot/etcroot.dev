import Link from "next/link";

export default function Menu() {
  return (
    <nav className="menu">
      <div className="menu-links">
        <Link href="/" passHref>
          <a className="menu-link">Home</a>
        </Link>
        <Link href="/support" passHref>
          <a className="menu-link">Support Me</a>
        </Link>
      </div>
    </nav>
  );
}

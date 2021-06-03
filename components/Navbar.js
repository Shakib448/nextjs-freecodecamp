import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="header">
        <div>
          <Link href="/">
            <a>Kap's Kitchen 🍍</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

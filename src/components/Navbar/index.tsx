import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <Link href="/">
          <Image src="logo.png" width={20} height={20} alt="logo" />
        </Link>

        <ul className="nav-items">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Inicio
            </Link>
            <Link href="/about" className="nav-link">
              Sobre
            </Link>
            <Link href="/products" className="nav-link">
              Produtos
            </Link>
            <Link href="/Services" className="nav-link">
              Serviçps
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

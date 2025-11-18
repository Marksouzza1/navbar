import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <Link href="/">
          <Image 
            src='logo.png' 
            width={20} 
            height={20} 
            alt="logo"/>
        </Link>
      </nav>
    </header>
  );
}

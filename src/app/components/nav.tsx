import Link from "next/link";

const Nav: React.FC = () => (
    <nav>
        <div className="logo">MySite</div>
        <ul className="menu">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    </nav>
)

export default Nav;
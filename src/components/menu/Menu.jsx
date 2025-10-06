import Link from "next/link";

export default function Menu() {
    return (
        <nav>            
            <Link href="/">Home</Link>&nbsp;|&nbsp;
            <Link href="/fci">FCI</Link>&nbsp;|&nbsp;
            <Link href="/fci/si">SI</Link>
        </nav>
    )
}
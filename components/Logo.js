import Link from "next/link";

export default function Logo() {
    return (
        <Link href={'/'}>
            <a className="text-xl font-extrabold uppercase">Kita Nyaman</a>
        </Link>
    )
}
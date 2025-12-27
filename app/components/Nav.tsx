import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full p-6 border-b flex gap-6">
      <Link href="/" className="font-bold">Ahmad</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/skills">Skills</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}

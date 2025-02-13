import Image from "next/image";
import Link from "next/link";
import Rectangle from "./components/Rectangle";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <Rectangle color="blue"/>
      <Link href="/page2">Ir a la página 2</Link>
    </div>
  );
}

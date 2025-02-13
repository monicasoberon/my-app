import Image from "next/image";
import Link from "next/link";
import GreenRectangle from "../components/GreenRectangle";
import Rectangle from "../components/Rectangle";

export default function Page2() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
   

      <div className= "grid grid-cols-5 gap-2">
        <Rectangle color="blue"/>
        <Rectangle color="green"/>
        <Rectangle color="blue"/>
        <Rectangle color="green"/>
        <Rectangle color="blue"/>
        <Rectangle color="green"/>
        <Rectangle color="blue"/>
        <Rectangle color="green"/>
        <Rectangle color="blue"/>
        <Rectangle color="green"/>
        <Rectangle color="blue"/>
        <Rectangle color="green"/>
        <Rectangle color="blue"/>
        <Rectangle color="green"/>
        <Rectangle color="blue"/>
        <Rectangle color="green"/>
        <Rectangle color="blue"/>
        <Rectangle color="green"/>
        <Rectangle color="blue"/>
        <Rectangle color="green"/> 
      </div>

      <Link href="/">Ir a la página 1</Link>
    </div>
    );
  }

import Image from "next/image";
import Headspace from "./Headspace";
import Keypad from "./Keypad";

export default function Home(){
  return (
    <main className=" p-8">
        <nav>
           <Headspace/>
        </nav>
        <Keypad/>
    </main>
  )
}
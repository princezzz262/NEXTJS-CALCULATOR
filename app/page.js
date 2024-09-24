import Image from "next/image";
import ToggleDnN
 from "./toggleDnN";
export default function Home(){
  return (
    <main className=" p-4">
        <nav>
           <ToggleDnN/>
        </nav>
    </main>
  )
}
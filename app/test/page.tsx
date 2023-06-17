import Image from "next/image";
import antonia from "/public/antonia.jpeg";

export default function Home() {
  return (
    <main className="bg-test min-h-screen pt-12 flex flex-col space-y-12 sm:ml-12 md:ml-24">
        <div className="bg-black h-96 grid grid-cols-3 gap-4 grid-flow-row-dense border">
            <div className="bg-white h-4">01</div>
            <div className="bg-white h-24">02</div>
            <div className="bg-white h-12">03</div>
            <div className="bg-white">01</div>
            <div className="bg-white">02</div>
            <div className="bg-white">03</div>
            <div className="bg-white">01</div>
            <div className="bg-white">02</div>
            <div className="bg-white">03</div>
        </div>
        <div className="bg-pink-100 grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-6">
            <div className="col-span-1">01</div>
            <div className="col-span-2">02</div>
            <div>03</div>
            <div>04</div>
            <div>05</div>
        </div>
    </main>
  );
}
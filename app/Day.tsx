import Link from "next/link";
import manubu from 'public/manabu.webp';
import Image from "next/image";


interface DayProps {
  href: string;
  practice: {
    color: string;
    tag: string;
  };
  teacher: {
    color: string;
    tag: string;
  };
  date: string;
}

export default function Day(props: DayProps) {
  return (
    <main className="font-normal uppercase text-end">
      <Link href={props.href || ""} className="flex relative group -space-y-2 duration-300 w-full justify-end">
        <div className="flex items-end relative group">
          <p>
            <span className={props.practice.color}>{props.practice.tag}</span>
            <span className={`hidden md:inline ${props.teacher.color}`}>/{props.teacher.tag}</span>
            <span className="text-slate-950 font-light md:inline text-xl px-1 tracking-wide">  {props.date}</span>
            <div className="hidden absolute w-44 h-44 rounded-full -left-44 top-0 group-hover:inline group-hover:duration-1000 motion-safe:animate-pulse rounded-full">
            </div>
          </p>
        </div>
      </Link>
    </main>
  );
}
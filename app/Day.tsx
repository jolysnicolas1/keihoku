import Link from "next/link";

export default function Day(props) {
  return (
    <main className="font-normal uppercase">
      <Link href={props.href || ""} className="flex relative group -space-y-2 duration-300 w-full justify-end">
        <div className="flex items-end">
          <p>
            <span className={props.practice.color}>{props.practice.tag}</span>
            <span className={`hidden md:inline ${props.teacher.color}`}>/{props.teacher.tag}</span>
            <span className="text-neutral-400 font-medium md:inline">/{props.date}</span>
          </p>
        </div>
      </Link>
    </main>
  );
}
import React from 'react';
import Link from 'next/link';
import Day from './Day';
import corea from 'public/corea.webp';
import Image from 'next/image';

type NextEventProps = {
  practice: { tag: string; color: string };
  teacher: { tag: string; color: string };
  date: string[];
  href: string;
};

const NextEvent: React.FC<NextEventProps> = ({
  practice,
  teacher,
  date,
  href,
}) => {
  return (
    <Link href={href}>
      <div className="border-y-4 border-l-4 border-blue-500 flex flex-col md:flex-row align-center text-xl md:justify-between lg:ml-12 xl:ml-24 2xl:ml-96 my-5">
        <div className="grow p-5 flex md:justify-center self-center">
          <div className="font-medium flex flex-col align-center">
            {date.map((dateItem, index) => (
              <Day
                key={index}
                practice={{ ...practice, color: practice.color }}
                teacher={{ ...teacher, color: teacher.color }}
                date={dateItem}
                href={href}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            className="md:border-l-4 md:border-blue-500"
            src={corea}
            height={300}
            width={300}
            alt="corea"
          />
        </div>
      </div>
    </Link>
  );
};

export default NextEvent;

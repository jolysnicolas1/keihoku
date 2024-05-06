"use client"
import React from 'react';
import Link from 'next/link';
import Day from './Day';
import manubu from 'public/manabu.webp';
import care from 'public/manabu-care.webp';
import maru from 'public/maru.webp';
import antonia from 'public/antonia.jpeg';
import anton from 'public/anton.png';
import corea from 'public/corea.webp';
import cleo from 'public/cleo.png';

import Image from 'next/image';
import Navbar from './Navbar';

type Practice = {
  tag: string;
  color: string;
};

type Teacher = {
  tag: string;
  color: string;
};

type Event = {
  practice: Practice;
  teacher: Teacher;
  date: string[];
  href: string;
};

const nextEvent: Event = {
  practice: { tag: "Souffle du chorésophe ", color: "" },
  teacher: { tag: " Michel RAJI", color: "" },
  date: ["07-07", "06-07"],
  href: "/souffle",
};

const daysData: Event[] = [
  {
    practice: { tag: "formation shiatsu, séminaire #7 ", color: "" },
    teacher: { tag: " Manabu Watanabe & Alain Tauch ", color: "" },
    date: ["05-10", "06-10"],
    href: "/formation-shiatsu",
  },
  {
    practice: { tag: "Aunkaï ", color: "red-500" },
    teacher: { tag: " Manabu Watanabe & Alain Tauch", color: "red-500" },
    date: ["04-10"],
    href: "/manabu",
  },
  {
    practice: { tag: "Proposition en cours d'élaboration ", color: "" },
    teacher: { tag: " NC ", color: "" },
    date: ["29-09", "28-09"],
    href: "/",

  },
  {
    practice: { tag: "Incorporé l'invisible, fantômes et fictions métaboliques ", color: "" },
    teacher: { tag: " Stéphane Léchit ", color: "" },
    date: ["27-09", "26-09", "25-09", "24-09", "23-09"],
    href: "/formation-shiatsu",

  },
  {
    practice: { tag: "Skinner realesing technique ", color: "" },
    teacher: { tag: " Cléo Tabakian", color: "" },
    date: ["00-09"],
    href: "/skinner-realesing-technique",
  },
];

const pastEvents: Event[] = [
  {
    practice: { tag: "formation shiatsu/séminaire #6 ", color: "" },
    teacher: { tag: " Manabu Watanabe & Alain Tauch ", color: "" },
    date: ["26-05", "25-05"],
    href: "/formation-shiatsu",
  },
  {
    practice: { tag: "formation shiatsu/séminaire #5 ", color: "" },
    teacher: { tag: " Manabu Watanabe & Alain Tauch ", color: "" },
    date: ["24-05", "23-05"],
    href: "/formation-shiatsu",
  },
  {
    practice: { tag: "formation shiatsu/séminaire #4", color: "" },
    teacher: { tag: "Manabu Watanabe & Alain Tauch", color: "" },
    date: ["16-03/2024", "15-03/2024"],
    href: "/formation-shiatsu",
  },
  {
    practice: { tag: "Aunkaï", color: "red-500" },
    teacher: { tag: "Manabu Watanabe & Alain Tauch", color: "red-500" },
    date: ["15-03/2024"],
    href: "/manabu/aunkai/03-2024",
  },
  {
    practice: { tag: "Tech Alexander & Danse Contemporaine", color: "neutral-900" },
    teacher: { tag: "Antonia Pons Capo", color: "blue-500" },
    date: ["23-02/2024","22-02/2024","21-02/2024", "20-02/2024"],
    href: "/antonia-pons-capo/stage-2024",
  },
  {
    practice: { tag: "formation shiatsu/séminaire #3", color: "" },
    teacher: { tag: "Manabu Watanabe & Alain Tauch", color: "" },
    date: ["21-01/2024", "20-01/2024"],
    href: "/formation-shiatsu",
  },
  {
    practice: { tag: "Aunkaï", color: "red-500" },
    teacher: { tag: "Manabu Watanabe & Alain Tauch", color: "red-500" },
    date: ["19-01/2024"],
    href: "/manabu/aunkai/01-2024",
  },
  {
    practice: { tag: "formation shiatsu/séminaire#2", color: "text-neutral-900" },
    teacher: { tag: "Manabu Watanabe & Alain Tauch", color: "" },
    date: ["26-11/2023", "25-11/2023"],
    href: "/formation-shiatsu",
  },
  {
    practice: { tag: "Atelier massage des pieds", color: "text-neutral-900" },
    teacher: { tag: "Manabu Watanabe & Alain Tauch", color: "" },
    date: ["24-11/2023"],
    href: "/manabu",
  },
  {
    practice: { tag: "formation shiatsu/séminaire#1", color: "text-neutral-900" },
    teacher: { tag: "Manabu Watanabe & Alain Tauch", color: "" },
    date: ["01-10/2023", "30-09/2023"],
    href: "/formation-shiatsu",
  },
  {
    practice: { tag: "stage shiatsu & aunkai", color: "text-neutral-900" },
    teacher: { tag: "Manabu Watanabe & Alain Tauch", color: "" },
    date: ["02-07/2023", "01-07/2023"],
    href: "/manabu",
  },
  {
    practice: { tag: "ça se fait #3/atelier de danse", color: "" },
    teacher: { tag: "Émilia Giudicelli", color: "text-blue-500" },
    date: ["11-06/2023"],
    href: "/ca-se-fait",
  },
  {
    practice: { tag: "butoh workshop", color: "" },
    teacher: { tag: "Maruska Ronchi", color: "" },
    date: ["04-06/2023", "03-06/2023", "02-06/2023"],
    href: "/butoh",
  },
  {
    practice: { tag: "ça se fait #2/atelier de danse", color: "" },
    teacher: { tag: "Émilia Giudicelli", color: "" },
    date: ["07-05/2023"],
    href: "/ca-se-fait",
  },
  {
    practice: { tag: "ça se fait #1/atelier de danse", color: "" },
    teacher: { tag: "Émilia Giudicelli", color: "" },
    date: ["26-03/2023"],
    href: "/ca-se-fait",
  },
  {
    practice: { tag: "technique alexander", color: "" },
    teacher: { tag: "Antonia Pons Capo", color: "" },
    date: ["21-02/2023", "20-02/2023", "19-02/2023", "18-02/2023"],
    href: "/antonia-pons-capo",
  },
];

// Fonction pour générer une couleur aléatoire
const generateRandomColor = () => {
  const colors = ["text-red-500", "text-blue-500", "text-green-500", "text-purple-500", "text-orange-500", "text-indigo-500"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export default function Home() {
  const renderEvent = (event: Event) => {
    return (
      <div key={event.href}>
        {event.date.map((date, dateIndex) => {
          let practiceColorToApply = "";
          let teacherColorToApply = "";

          if (dateIndex === 0) {
            practiceColorToApply = generateRandomColor();
          } else if (dateIndex === event.date.length - 1) {
            teacherColorToApply = generateRandomColor();
          }

          return (
            <Day
              key={dateIndex}
              practice={{ ...event.practice, color: practiceColorToApply }}
              teacher={{ ...event.teacher, color: teacherColorToApply }}
              date={date}
              href={event.href}
            />
          );
        })}
      </div>
    );
  };

  const renderDaysData = () => {
    return daysData.map((dayItem, index) => {
      const practiceColor = generateRandomColor();
      const teacherColor = generateRandomColor();

      return (
        <div key={index}>
          {dayItem.date.map((date, dateIndex) => {
            let practiceColorToApply = "";
            let teacherColorToApply = "";

            if (dateIndex === 0) {
              practiceColorToApply = practiceColor;
            } else if (dateIndex === dayItem.date.length - 1) {
              teacherColorToApply = teacherColor;
            }

            return (
              <Day
                key={dateIndex}
                practice={{ ...dayItem.practice, color: practiceColorToApply }}
                teacher={{ ...dayItem.teacher, color: teacherColorToApply }}
                date={date}
                href={dayItem.href}
              />
            );
          })}
        </div>
      );
    });
  };

  const renderPastEvents = () => {
    return pastEvents.map((pastEvent, index) => {
      return renderEvent(pastEvent);
    });
  };

  return (
    <main className="min-h-screen flex flex-col text-cyan-400 space-y-8 tracking-widest font-light leading-loose">
      <Navbar></Navbar>
      <div className="flex flex-col items-end p-1 sm:p-4 space-y-8 font-light text-xl lg:px-12 xl:px-24 2xl:px-44">
        {renderDaysData()}
      </div>
      <Link href={nextEvent.href}>
        <div className="border-y-4 border-l-4 border-blue-500 flex flex-col md:flex-row align-center text-xl md:justify-between lg:ml-12 xl:ml-24 2xl:ml-96">
          <div className="grow p-5 flex md:justify-center self-center">
            <div className="font-medium flex flex-col align-center">
              {nextEvent.date.map((dateItem, index) => (
                <Day
                  key={index}
                  practice={{ ...nextEvent.practice, color: nextEvent.practice.color }}
                  teacher={{ ...nextEvent.teacher, color: nextEvent.teacher.color }}
                  date={dateItem}
                  href={nextEvent.href}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center">
          <Image
            className="md:border-l-4 md:border-blue-500 "
            src={cleo}
            height={300}
            width={300}
            alt="corea"
          />
          </div>
        </div>
      </Link>
      <div className="flex flex-col items-end p-1 sm:p-4 space-y-2 font-light lg:px-12 xl:px-24 2xl:px-44 text-xl">
        {renderPastEvents()}
      </div>
    </main>
  );
}






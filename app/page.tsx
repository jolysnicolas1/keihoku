"use client";
import React from "react";
import Link from "next/link";
import Day from "./Day";
import manabu from "public/manabu.webp";

import Image from "next/image";
import Navbar from "./Navbar";

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

const nextEvent: Event = {};

const daysData: Event[] = [];

const pastEvents: Event[] = [];

// Fonction pour générer une couleur aléatoire
const generateRandomColor = () => {
  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-purple-500",
    "text-orange-500",
    "text-indigo-500",
  ];
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
        <div className="relative border-y-4 border-l-4 border-blue-500 flex flex-col md:flex-row align-center text-xl md:justify-between lg:ml-12 xl:ml-24 2xl:ml-96">
          <div className="absolute h-fit bg-blue-500 text-white px-3 py-0 uppercase text-xs font-bold">
            Inscripitons ouvertes
          </div>
          <div className="grow p-5 flex md:justify-center self-center">
            <div className="font-medium flex flex-col align-center">
              {nextEvent.date.map((dateItem, index) => (
                <Day
                  key={index}
                  practice={{
                    ...nextEvent.practice,
                    color: nextEvent.practice.color,
                  }}
                  teacher={{
                    ...nextEvent.teacher,
                    color: nextEvent.teacher.color,
                  }}
                  date={dateItem}
                  href={nextEvent.href}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="md:border-l-4 md:border-blue-500 "
              src={manabu}
              height={300}
              width={300}
              alt="skinner releasing technique"
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

'use client';

import { Atom, Sprout } from 'lucide-react';

export default function Page() {
  return (
    <main className="flex w-full h-full mt-40 px-20">
      <section className="flex flex-col w-full h-full">
        <div className="flex-grow space-y-3">
          <div className="text-5xl">Hong JinSuk</div>
          <div className="flex space-x-1">
            <span className="text-xl">Full-Stack Software Engineer</span>
            <Sprout className="text-green-400" />
            <Atom className="text-yellow-400" />
          </div>
          <div>
            <span className="dark:text-slate-200">
              Hello Let me introduce myself
            </span>
            <br />
            <span>I'm JinSuk Hong Red Hong Red Hong Red Hong</span>
            <br />
            <span>all it's well</span>
          </div>
        </div>
        <nav></nav>
      </section>
      <section className="w-full h-full">right section</section>
    </main>
  );
}

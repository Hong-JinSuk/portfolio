'use client';

import ClipBoard from '@/components/ui/clip-board';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ScrollspyNavigation } from '@/components/ui/scrollspy-navigation';
import { ThemeSwitch } from '@/components/ui/theme-switch';
import {
  ArrowBigRight,
  ArrowBigRightDash,
  Atom,
  Github,
  Instagram,
  Leaf,
  Send,
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

const styles = {
  iconSize: 45,
  iconClassName:
    'p-2 opacity-70 hover:opacity-100 hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200',
  textClassName: 'opacity-70',
};

const contents = {
  aboutMe: 'About Me!! \n\n sdoifjsdiof sdfiojds\n sdifjdsoi \n\n\n\n fdsjif',
};

const navigationItems = [
  { id: 'about-me', label: 'About me' },
  { id: 'history', label: 'History' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
];

export default function Page() {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex w-full h-full bg-background overflow-hidden">
      <aside className="flex flex-col w-[80%] h-full border pt-24">
        <section>
          <h1 className="text-5xl">Hong-JinSuk</h1>
          <h3 className="flex py-3 space-x-0.5">
            <span className="text-xl pr-1">Full-Stack Software Engineer</span>
            <Leaf className="text-white bg-green-500 rounded-full" />
            <Atom className="text-[#62D3F5] rounded-full dark:text-[#5AC8E5]" />
          </h3>
          <p className={`${styles.textClassName}`}>안녕하세요오오용가리</p>
          <p className={`${styles.textClassName}`}>안녕하세요오오용가리</p>
          <p className={`${styles.textClassName}`}>안녕하세요오오용가리</p>
          <p className={`${styles.textClassName}`}>안녕하세요오오용가리</p>
        </section>
        <ScrollspyNavigation
          scrollAreaRef={scrollAreaRef}
          navigationItems={navigationItems}
          className="py-16 px-10"
        />
        <section className="w-full flex justify-between items-center mt-auto p-6">
          <div className="flex">
            <Github
              size={styles.iconSize}
              className={`${styles.iconClassName}`}
            />
            <Instagram
              size={styles.iconSize}
              className={`${styles.iconClassName}`}
            />
            <HoverCard>
              <HoverCardTrigger>
                <Send
                  size={styles.iconSize}
                  className={`${styles.iconClassName}`}
                />
              </HoverCardTrigger>
              <HoverCardContent>
                <ClipBoard text="realtone98@gmail.com" />
              </HoverCardContent>
            </HoverCard>
          </div>
          <div>
            <ThemeSwitch
              useIcons
              className={`${styles.iconClassName}`}
              iconSize={styles.iconSize}
            />
          </div>
        </section>
      </aside>
      <main className="w-full border">
        <ScrollArea className="h-full" id="scrollArea" ref={scrollAreaRef}>
          <div>
            <div className="pt-24" id="top"></div>
            <div className="flex flex-col h-96" id="about-me">
              <p className="whitespace-pre-line">{contents.aboutMe}</p>
              <Link
                href={'/my'}
                className="flex max-w-[200px] mt-auto text-lg font-semibold hover:underline hover:underline-offset-[2px] dark:decoration-green-400 decoration-1 space-x-2 group"
              >
                <span className="">View Full About Me</span>
                <div className="relative w-6 h-6">
                  <ArrowBigRight className="absolute top-0 left-0 transition-all duration-500 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-75" />
                  <ArrowBigRightDash className="absolute -top-1 -left-1 size-8 transition-all duration-500 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100" />
                </div>
              </Link>
            </div>
            <div className="h-96 pt-20" id="history">
              History
            </div>
            <div className="flex flex-col h-96 pt-20" id="projects">
              Projects
              <Link
                href={'/projects'}
                className="flex max-w-[190px] mt-auto text-lg font-semibold hover:underline hover:underline-offset-[2px] dark:decoration-green-400 decoration-1 space-x-2 group"
              >
                <span className="">View Full Projects</span>
                <div className="relative w-6 h-6">
                  {/* Default Arrow */}
                  <ArrowBigRight className="absolute top-0 left-0 transition-all duration-500 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-75" />
                  {/* Hover Arrow */}
                  <ArrowBigRightDash className="absolute -top-1 -left-1 size-8 transition-all duration-500 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100" />
                </div>
              </Link>
            </div>
            <div className="h-96 pt-20" id="skills">
              Skills
            </div>
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}

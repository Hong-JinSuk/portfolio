'use client';

import ClipBoard from '@/components/ui/clip-board';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ScrollSpy } from '@/components/ui/scroll-spy';
import { ThemeSwitch } from '@/components/ui/theme-switch';
import { FireExtinguisher, Github, Instagram, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const styles = {
  iconSize: 45,
  iconClassName:
    'p-2 opacity-70 hover:opacity-100 hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200',
  textClassName: 'opacity-70',
};

export default function Page() {
  const [activeSection, setActiveSection] = useState('about');
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.6 } // 60% 이상 보일 때 감지
    );
    sectionsRef.current.forEach((section) => observer.observe(section));

    return () => {
      sectionsRef.current.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const onNavigate = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex w-full h-full bg-background overflow-hidden">
      <aside className="flex flex-col w-[80%] h-full border pt-24">
        <section>
          <h1 className="text-5xl">Title</h1>
          <h3 className="flex py-3">
            <span className="text-xl">Sub Title</span> <FireExtinguisher />
          </h3>
          <p className={`${styles.textClassName}`}>안녕하세요오오용가리</p>
          <p className={`${styles.textClassName}`}>안녕하세요오오용가리</p>
          <p className={`${styles.textClassName}`}>안녕하세요오오용가리</p>
          <p className={`${styles.textClassName}`}>안녕하세요오오용가리</p>
          <p className={`${styles.textClassName}`}>안녕하세요오오용가리</p>
        </section>
        <ScrollSpy onNavigate={onNavigate} />
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
        <ScrollArea className="h-full">
          <div className="pt-24" id="top"></div>
          <div className="h-52">fsdfjndisofjodsifisdofjoisd</div>
          <div className="h-52">fsdfjndisofjodsifisdofjoisd</div>
          <div className="h-52">fsdfjndisofjodsifisdofjoisd</div>
          <div className="h-52">fsdfjndisofjodsifisdofjoisd</div>
          <div className="h-52">fsdfjndisofjodsifisdofjoisd</div>
          <div className="h-52">fsdfjndisofjodsifisdofjoisd</div>
          <div className="h-52">fsdfjndisofjodsifisdofjoisd</div>
          <div className="h-52">fsdfjndisofjodsifisdofjoisd</div>
          <div className="h-52">fsdfjndisofjodsifisdofjoisd</div>
          <div className="h-52">fsdfjndisofjodsifisdofjoisd</div>
          <div className="h-52">fsdfjndisofjodsifisdofjoisd</div>
          <div className="h-52">fsdfjndisofjodsifisdofjoisd</div>
          <div className="h-52">fsdfjndisofjodsifisdofjoisd</div>
          <div className="h-52">fsdfjndisofjodsifisdofjoisd</div>
        </ScrollArea>
      </main>
    </div>
  );
}

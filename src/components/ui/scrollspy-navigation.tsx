import { debounce } from 'lodash';
import { useCallback, useEffect, useState } from 'react';

type Props = {
  scrollAreaRef: React.RefObject<HTMLDivElement | null>;
  navigationItems: any[];
  className?: string;
};

export function ScrollspyNavigation({
  scrollAreaRef,
  navigationItems,
  className,
}: Props) {
  const [centerContentId, setCenterContentId] = useState<string>(
    navigationItems[0].id
  );
  const [hoveredId, setHoveredId] = useState(null);

  const findCenterContent = useCallback(() => {
    const scrollElement = scrollAreaRef.current?.querySelector(
      '[data-radix-scroll-area-viewport]'
    ) as HTMLDivElement;

    if (!scrollElement) {
      return;
    }

    const viewportCenterY = window.innerHeight / 3;

    let closestElement: HTMLElement | null = null;
    let closestDistance = Infinity;

    const childDivs = Array.from(
      scrollElement.querySelectorAll('div[id]')
    ) as HTMLElement[];

    childDivs.forEach((div) => {
      const rect = div.getBoundingClientRect(); // 현재 요소의 뷰포트 위치
      const divCenterY = rect.top + rect.height / 2; // 요소의 중앙 좌표

      const distance = Math.abs(divCenterY - viewportCenterY); // 뷰포트 중앙과의 거리

      if (distance < closestDistance) {
        closestDistance = distance;
        closestElement = div;
      }
    });

    if (closestElement) {
      setCenterContentId((closestElement as HTMLDivElement).id);
      console.log((closestElement as HTMLDivElement).id);
    }
  }, []);

  const onScroll = useCallback(
    debounce(() => {
      findCenterContent();
    }, 200),
    [findCenterContent]
  );

  useEffect(() => {
    const scrollElement = scrollAreaRef.current?.querySelector(
      '[data-radix-scroll-area-viewport]'
    ) as HTMLDivElement;

    if (!scrollElement) {
      return;
    }

    scrollElement.addEventListener('scroll', onScroll);

    return () => {
      scrollElement.removeEventListener('scroll', onScroll);
      onScroll.cancel(); // Debounce 정리
    };
  }, [onScroll]);

  const onNavigate = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`${className}`}>
      <nav id="navbar" className={`max-w-44`}>
        {navigationItems.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center space-x-8 cursor-pointer`}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(item.id);
            }}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div
              className={`${
                centerContentId === item.id || hoveredId === item.id
                  ? 'opacity-100 w-12 h-[1px] dark:bg-white bg-black'
                  : 'opacity-30 w-4 h-[1px] dark:bg-white bg-black'
              } transition-all duration-500`}
            ></div>
            <span
              className={`${
                centerContentId === item.id || hoveredId === item.id
                  ? 'opacity-100'
                  : 'opacity-30'
              } transition-all duration-700 text-center py-2`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </nav>
    </div>
  );
}

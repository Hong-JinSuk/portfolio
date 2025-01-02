import { debounce } from 'lodash';
import { Minus } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

type Props = {
  scrollAreaRef: React.RefObject<HTMLDivElement | null>;
  navigationItems: any[];
};

export function ScrollspyNavigation({ scrollAreaRef, navigationItems }: Props) {
  const [centerContentId, setCenterContentId] = useState<string>(
    navigationItems[0].id
  );

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
    <nav id="navbar" className="w-full">
      {navigationItems.map((item, index) => (
        <div
          key={item.id}
          className={`flex space-x-2 cursor-pointer`}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(item.id);
          }}
        >
          <Minus
            className={`${
              centerContentId === item.id ? 'opacity-100' : 'opacity-30'
            } `}
          />
          <span
            className={`${
              centerContentId === item.id ? 'opacity-100' : 'opacity-30'
            }`}
          >
            {item.label}
          </span>
        </div>
      ))}
    </nav>
  );
}

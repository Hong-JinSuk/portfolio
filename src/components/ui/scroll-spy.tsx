import { Minus } from 'lucide-react';

const navigationItems = [
  { id: 'top', label: 'About me' },
  { id: 'history', label: 'History' },
  { id: 'projects', label: 'Projects' },
];

export function ScrollSpy({
  onNavigate,
}: {
  onNavigate: (id: string) => void;
}) {
  return (
    <nav id="navbar" className="w-full">
      {navigationItems.map((item) => (
        <a
          key={item.id}
          className="flex space-x-2 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            onNavigate(item.id);
          }}
        >
          <Minus className="opacity-30" />
          <span className="opacity-30">{item.label}</span>
        </a>
      ))}
    </nav>
  );
}

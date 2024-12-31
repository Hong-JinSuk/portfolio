import Link from 'next/link';
import { Menubar, MenubarMenu, MenubarTrigger } from './menubar';

const menuItems = [
  { label: 'My', value: '/' },
  {
    label: 'Projects',
    value: '/projects',
  },
  {
    label: 'Skills',
    value: '/skills',
  },
];

export default function NavigationMenubar() {
  return (
    <Menubar>
      {menuItems.map((item, index) => (
        <MenubarMenu key={index}>
          <MenubarTrigger>
            <Link href={`${item.value}`}>
              <span className="text-lg">{item.label}</span>
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
      ))}
    </Menubar>
  );
}

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import NavigationMenubar from '@/components/ui/navigation-menubar';
import { ThemeSwitch } from '@/components/ui/theme-switch';

export default function Layout() {
  return (
    <header className="flex items-center justify-between w-full px-5 h-12 pt-8">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
      <NavigationMenubar />
      <ThemeSwitch />
    </header>
  );
}

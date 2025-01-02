'use client';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type Props = {
  useIcons?: boolean;
  className?: string;
  iconSize?: number;
};

export function ThemeSwitch({ useIcons = false, className, iconSize }: Props) {
  const { theme, setTheme } = useTheme();
  const [isInitialized, setIsInitialized] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const systemTheme = window.matchMedia(
        '(prefers-color-scheme: light)'
      ).matches;
      const initialTheme = theme || (systemTheme ? 'light' : 'dark');
      setIsDark(initialTheme === 'dark');
      setTheme(initialTheme);
      setIsInitialized(true);
    }
  }, [theme, setTheme]);

  const handleThemeChange = (checked: boolean) => {
    setIsDark(checked);

    setTimeout(() => {
      setTheme(checked ? 'dark' : 'light');
    }, 300);
  };

  const onClickTheme = () => {
    setIsDark((prev) => {
      const nextTheme = !prev ? 'dark' : 'light';
      setTheme(nextTheme);
      return !prev;
    });
  };

  if (!isInitialized) return null;

  return (
    <div className="flex items-center space-x-2">
      {useIcons ? (
        <>
          {isDark ? (
            <Moon
              className={`${className} transition-colors duration-300`}
              onClick={onClickTheme}
              size={iconSize}
            />
          ) : (
            <Sun
              className={`${className} transition-colors duration-300`}
              onClick={onClickTheme}
              size={iconSize}
            />
          )}
        </>
      ) : (
        <>
          <Switch
            id="theme"
            checked={isDark}
            onCheckedChange={handleThemeChange}
          />
          <Label htmlFor="theme">{isDark ? 'Dark' : 'Light'}</Label>
        </>
      )}
    </div>
  );
}

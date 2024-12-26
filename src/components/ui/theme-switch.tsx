'use client';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitch() {
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

    // 애니메이션 효과를 위한 테마 업데이트 지연
    setTimeout(() => {
      setTheme(checked ? 'dark' : 'light');
    }, 300);
  };

  if (!isInitialized) return null;

  return (
    <div className="flex items-center space-x-2">
      <Switch id="theme" checked={isDark} onCheckedChange={handleThemeChange} />
      <Label htmlFor="theme">{isDark ? 'DarkMode' : 'LightMode'}</Label>
    </div>
  );
}

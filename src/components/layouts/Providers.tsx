import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

type Props = {
  children: any;
};
export default function Providers({ children }: Props) {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const now: Date = new Date();
  const time: number = now.getHours();
  const lightOrDark = (time: number) => {
    if (time >= 4 && time <= 16) {
      return 'light';
    } else {
      return 'dark';
    }
  };
  return (
    <>
      <ThemeProvider
        defaultTheme={lightOrDark(time)}
        attribute='data-theme'
        themes={['light', 'dark']}
      >
        {children}
      </ThemeProvider>
    </>
  );
}
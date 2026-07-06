import { useEffect, useState } from 'react';

export function useTypewriter(
  lines: string[],
  opts: { speed?: number; enabled?: boolean } = {},
): { text: string; done: boolean } {
  const { speed = 28, enabled = true } = opts;
  const full = lines.join('\n');
  const [count, setCount] = useState(enabled ? 0 : full.length);

  useEffect(() => {
    if (!enabled) { setCount(full.length); return; }
    setCount(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= full.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [full, speed, enabled]);

  return { text: full.slice(0, count), done: count >= full.length };
}

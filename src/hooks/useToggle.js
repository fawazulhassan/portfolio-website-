import { useState, useCallback } from 'react';

export function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue(v => !v), []);
  const close = useCallback(() => setValue(false), []);
  return [value, toggle, close];
}

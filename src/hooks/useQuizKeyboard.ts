import { useEffect } from "react";
export function useQuizKeyboard(
  enabled: boolean,
  optionCount: number,
  choose: (index: number) => void,
  confirm: () => void,
) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (
        !enabled ||
        event.repeat ||
        event.ctrlKey ||
        event.metaKey ||
        event.altKey
      )
        return;
      const target = event.target as HTMLElement | null;
      if (
        target?.closest(
          'input,textarea,select,[contenteditable="true"],[role="dialog"]',
        )
      )
        return;
      if (document.querySelector('[role="dialog"][data-state="open"]')) return;
      const i = event.key.toLowerCase().charCodeAt(0) - 97;
      if (event.key.length === 1 && i >= 0 && i < Math.min(optionCount, 4)) {
        event.preventDefault();
        choose(i);
      } else if (event.key === "Enter") {
        event.preventDefault();
        confirm();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [enabled, optionCount, choose, confirm]);
}

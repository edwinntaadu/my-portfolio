import { useEffect, useState } from "react";

function useTypewriter(words = [], speed = 120, pause = 1500) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[wordIndex];
    let timer;

    if (!isDeleting && displayText.length < currentWord.length) {
      timer = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      }, speed);
    } else if (!isDeleting && displayText.length === currentWord.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      }, speed / 2);
    } else if (isDeleting && displayText.length === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 0);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, pause, speed, wordIndex, words]);

  return displayText;
}

export default useTypewriter;

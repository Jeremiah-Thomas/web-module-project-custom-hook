import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useDarkMode() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );
  console.log(isDark);

  useEffect(() => {
    useLocalStorage("isDark", isDark);
  }, [isDark]);

  return [isDark, setIsDark];
}

export default useDarkMode;

import { useEffect } from "react";

export function useMoveTop() { 
  useEffect(() => (document.documentElement.scrollTop = 0), []);
}
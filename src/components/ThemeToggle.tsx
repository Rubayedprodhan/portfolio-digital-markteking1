import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg bg-background border-2 border-primary/20 hover:border-primary hover:scale-110 transition-all"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-6 w-6 text-primary" />
      ) : (
        <Sun className="h-6 w-6 text-primary" />
      )}
    </Button>
  );
};

export default ThemeToggle;

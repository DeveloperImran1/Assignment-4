import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/providers/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center">
      <img
        className="h-28 w-28"
        src="https://i.postimg.cc/J0pJ6NS5/ffb5bbf3-70ae-466f-8b59-d76cb5406695-removebg-preview.png"
        alt="logo"
      />
      <div className="flex gap-3">
        <Link
          className="text-sm font-medium bg-[#3e6ae0] hover:bg-[#0cc1e0]  text-white px-3 py-2 rounded-md transition-all transition-3000"
          to="/books"
        >
          All Books
        </Link>
        <Link
          className="text-sm font-medium bg-[#3e6ae0] hover:bg-[#0cc1e0]  text-white px-3 py-2 rounded-md transition-all transition-3000"
          to="/books"
        >
          Add Book
        </Link>
        <Link
          className="text-sm font-medium bg-[#3e6ae0] hover:bg-[#0cc1e0]  text-white px-3 py-2 rounded-md transition-all transition-3000"
          to="/books"
        >
          Borrow Summary
        </Link>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Navbar;

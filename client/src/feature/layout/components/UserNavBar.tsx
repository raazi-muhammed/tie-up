"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { IoPerson } from "react-icons/io5";
import { IoLogIn } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const UserNavBar = () => {
    const { setTheme } = useTheme();

    return (
        <nav className="w-full backdrop-blur-lg sticky top-0 z-30">
            <div className="flex justify-between max-w-2xl mx-auto p-2 px-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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

                <section className="flex gap-2">
                    <Button asChild variant="outline" size="icon">
                        <Link href="/login">
                            <IoLogIn size="1.5rem" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                        <Link href="/inbox">
                            <TbMessageCircle2Filled size="1.5rem" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="icon">
                        <Link href="/profile">
                            <IoPerson size="1.5rem" />
                        </Link>
                    </Button>
                </section>
            </div>
        </nav>
    );
};

export default UserNavBar;

/* 
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

const UserNavBar = () => {
    return (
        <nav>
            <Button asChild variant="outline">
                <Link href="/login">Login</Link>
            </Button>
            <Button asChild variant="outline">
                <Link href="/profile">Profile</Link>
                <Button asChild variant="outline">
                    <Link href="/home">Home</Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="/inbox">Inbox</Link>
                </Button>
            </Button>
        </nav>
    );
};

export default UserNavBar;
 */

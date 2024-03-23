"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogInIcon, LogOutIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image";
import Link from "next/link";


  
function AccountDropDown() {
const session = useSession();
const islLoggedIn = session.data;

  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant={"link"}>
      <Avatar className="mr-2">
              <AvatarImage src={session.data?.user?.image ?? ""} />
              <AvatarFallback>PP</AvatarFallback>
            </Avatar>
        {session.data?.user?.name}</Button></DropdownMenuTrigger>
    <DropdownMenuContent>
     
      {islLoggedIn ? (
      <DropdownMenuItem onClick={()=>signOut()}>
        <LogOutIcon className="mr-2"/> SignOut</DropdownMenuItem>
      ):
      <DropdownMenuItem onClick={()=>signIn("google")}>
         <LogInIcon className="mr-2"/>SignIn</DropdownMenuItem>
      }
    </DropdownMenuContent>
  </DropdownMenu>
  
  );
}

export const Header = () => {
const session = useSession();


  return (
<header className="bg-gray-100 py-4 dark:bg-gray-900 z-10 relative px-4">
  <div className="flex justify-between items-center">
  <Link
          href="/"
          className="flex gap-2 items-center text-xl hover:underline"
        >
          <Image
            src="/icon.png"
            width="50"
            height="50"
            alt="the application icon of a magnifying glass"
          />
          DevFinder
        </Link>
  
    <div className="flex items-center gap-4">
    <AccountDropDown/>
     
        <ModeToggle  />
    </div>
    </div>
  </header>
  );

}
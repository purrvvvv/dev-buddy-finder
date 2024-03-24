import { Button } from "@/components/ui/button";
import { db } from "@/db";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Room } from "@/db/schema";
import { GitHubLogoIcon } from "@radix-ui/react-icons";


import { TagsList } from "@/components/tags-list";
import { SearchBar } from "./search-bar";
import { getRooms } from "@/data-access/rooms";
import { splitTags } from "@/lib/utils";


function RoomCard({room}:{room:Room}) {
  return(
<Card>
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
       
        {room.githubRepo && (
          <Link
            href={room.githubRepo}
            className="flex items-center gap-2 "
            target="_blank"  //for loading the link in new tab
            rel="noopener noreferrer" //same as above
          >
            <GitHubLogoIcon/>
            Github Link
          </Link>
        )}
        <TagsList tags={splitTags(room.tags)} />
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/rooms/${room.id}`}>Join Room</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
  

  export default async function Home({
    searchParams,
  }: {
    searchParams: {
      search: string;
    };
  }) {
    const rooms = await getRooms(searchParams.search);
  return (
    <main className=" min-h-screen p-16 ">
<div className="flex justify-between items-center mb-8">
<h1 className="text-4xl ">FIND YOUR DEV BUDDY</h1>

    <Button asChild>
      <Link href="/create-room">Create Room</Link>
    </Button>
    
    </div>
    <div className="mb-6">
  <SearchBar/>
</div>
    <div className="grid grid-cols-3 gap-4">
     {rooms.map((room) => {
        return <RoomCard room={room} key={room.id} />;
        
  })}
  </div>
    </main>

  );
}

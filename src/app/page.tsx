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
import { get } from "http";
import { getRooms } from "@/data-access/rooms";

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
            className="flex items-center gap-2"
            target="_blank"  //for loading the link in new tab
            rel="noopener noreferrer" //same as above
          >
            <GitHubLogoIcon/>
            Github Link
          </Link>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/rooms/${room.id}`}>Join Room</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
  


export default async function Home() {

  const rooms =  await getRooms();
  return (
    <main className=" min-h-screen p-16 ">
<div className="flex justify-between items-center mb-8">
<h1 className="text-4xl ">FIND YOUR DEV BUDDY</h1>
    <Button asChild>
      <Link href="/create-room">Create Room</Link>
    </Button>
    
    </div>
    <div className="grid grid-cols-3 gap-4">
     {rooms.map((room) => {
        return <RoomCard room={room} key={room.id} />;
        
  })}
  </div>
    </main>

  );
}

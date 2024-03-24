
import { unstable_noStore } from 'next/cache';
import { db } from '../db';
import { eq } from 'drizzle-orm';
import { room } from '@/db/schema';
export async function getRooms() 
{
 unstable_noStore(); //this function is used to prevent the data from being stored in the cache
const rooms = await db.query.room.findMany();
return rooms;    
}


export async function getRoom(roomId: string) 
{
    return await db.query.room.findFirst({
      where: eq(room.id, roomId),
    });
}
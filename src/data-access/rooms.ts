
import { unstable_noStore } from 'next/cache';
import { db } from '../db';
export async function getRooms() 
{
    unstable_noStore(); //this function is used to prevent the data from being stored in the cache
const rooms = await db.query.room.findMany();
return rooms;    
}
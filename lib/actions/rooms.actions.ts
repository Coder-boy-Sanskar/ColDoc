"use server";
import {nanoid} from  "nanoid"
import { liveblocks } from "../Liveblocks";
import { revalidatePath } from "next/cache";
import { parseStringify } from "../utils";


export const createDocuments=async({userId,email}:CreateDocumentParams)=>{
const roomid=nanoid();
try {
    
  const metadata={
    creatorId:userId,
    email,
    title:"untitled",
  }
const usersAccesses:RoomAccesses={
    [email]: ["room:write"]
}

  const room = await liveblocks.createRoom(roomid, {
    // The default room permissions. `[]` for private, `["room:write"]` for public.
    defaultAccesses: [],
  
    // Optional, the room's group ID permissions
   
    // Optional, the room's user ID permissions
    usersAccesses,
  
    // Optional, custom metadata to attach to the room
    metadata
  });
  revalidatePath('./')
return parseStringify(room) ;

} catch (error) {
    console.log(error);
}
}
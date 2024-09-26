import { currentUser } from "@clerk/nextjs/server";
import { liveblocks } from "../../../lib/Liveblocks";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { getRandomColor } from "@/lib/utils";



export async function POST(request: Request) {

    const router=useRouter()
  /**
   * Implement your own security here.
   *
   * It's your responsibility to ensure that the caller of this endpoint
   * is a valid user by validating the cookies or authentication headers
   * and that it has access to the requested room.
   */
const clerkUser= await currentUser();

if(!clerkUser) {router.push('/sign-in');}

   else{const {id,emailAddresses,firstName,lastName,imageUrl}=clerkUser
  // Get the current user from your database'
  const user ={
    id,
    info:{
        id,
        name: `${firstName}${lastName}`,
        avatar: imageUrl,
        color:getRandomColor(),
        email:emailAddresses[0].emailAddress
    }
  }

  // Start an auth session inside your endpoint
  const session = liveblocks.prepareSession(
    user.id,
    { userInfo: user?.info } // Optional
  );

  // Implement your own security, and give the user access to the room
//   const { room } = await request.json();
//   if (room && __shouldUserHaveAccess__(user, room)) {
//     session.allow(room, session.FULL_ACCESS);
//   }

  // Retrieve a token from the Liveblocks servers and pass it to the
  // requesting client
  const { body, status } = await session.authorize();
  return new Response(body, { status });
}
}
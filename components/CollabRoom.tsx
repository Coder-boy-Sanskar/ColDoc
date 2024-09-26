"use client";
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react';
import Loader from './Loader';
import Header from './ui/Header';
import { Editor } from './editor/Editor';

const CollabRoom = () => {
  return (
    <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div><Loader/></div>}>
         <div className='collaborative-room'>
         <Header className="">
        <p  className="text-white">text</p>
      </Header>
      <Editor/>
         </div>
        </ClientSideSuspense>
      </RoomProvider>
  )
}

export default CollabRoom

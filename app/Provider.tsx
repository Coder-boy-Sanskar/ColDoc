"use client";
import Loader from '@/components/Loader'
import { ClientSideSuspense, LiveblocksProvider, RoomProvider } from '@liveblocks/react'
import React, { ReactNode } from 'react'

const Provider = ({children}:{children: ReactNode}) => {
  return (
    <div>
        <LiveblocksProvider authEndpoint="api/liveblocks-auth">
      
        <ClientSideSuspense fallback={<div><Loader/></div>}>
          {children}
        </ClientSideSuspense>
     
    </LiveblocksProvider>
      
    </div>
  )
}

export default Provider

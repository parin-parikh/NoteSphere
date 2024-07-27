'use client'

import {
    ClientSideSuspense,
    RoomProvider as RoomProviderWrapper,
  } from "@liveblocks/react/suspense";

import LoadingSpinner from "./LoadingSpinner";
import LiveCursorPointer from "./LiveCursorPointer";

function RoomProvider({roomId, children}: {
    roomId: string;
    children: React.ReactNode;
}) {
  return (
    <RoomProviderWrapper 
        id={roomId} 
        initialPresence={{
            cursor: null
        }}
        
    >
        <ClientSideSuspense fallback={<LoadingSpinner />}>
            <LiveCursorPointer>{children}</LiveCursorPointer>
        </ClientSideSuspense>
    </RoomProviderWrapper>
  )
}
export default RoomProvider
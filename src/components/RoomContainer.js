import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../context";

function RoomContainer({ context }) {
  const { rooms, sortedRooms, loading } = context;
  if (loading) {
    return <h1>loading</h1>;
  }
  return (
    <>
      
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

// import React from "react";
// import RoomFilter from "./RoomFilter";
// import RoomList from "./RoomList";
// import { RoomConsumer } from "../context";

// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { rooms, sortedRooms, loading } = value;
//         if (loading) {
//           return <h1>loading</h1>;
//         }
//         return (
//           <div>
//             hello from room container
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }

"use client";

import ReservationCard from "./ReservationCard";
import { useOptimistic } from "react";

function ReservationList({ bookings }) {
  useOptimistic();

  return (
    <ul className="space-y-6">
      {bookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
        />
      ))}
    </ul>
  );
}

export default ReservationList;

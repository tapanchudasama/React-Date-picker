import React, { useState, useEffect } from "react";

import data from "../data.json";
const Message = (props) => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    let index = data.available_slots
      .map((e) => e.date)
      .indexOf(props.flag.date);
    if (index !== -1 && data.available_slots[index].date_slots.length === 0) {
      setMessage("No slots available this day.");
      setColor("red");
    } else if (
      index !== -1 &&
      data.available_slots[index].date_slots.length >= 0
    ) {
      setMessage("Continue Your Booking");
      setColor("blue");
    }
    if (props.flag.slotId !== -1) {
      setMessage("Your appointment is confirmed");
      setColor("green");
    }
  }, [props.flag.date, props.flag.slotId]);
  //
  return (
    <div
      style={{
        color: `${color}`,
        textAlign: "center",
        textTransform: "uppercase",
        fontFamily: "Roboto",
        paddingBottom: "30px",
      }}
    >
      {message}
    </div>
  );
};
export default Message;

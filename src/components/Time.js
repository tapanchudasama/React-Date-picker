import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import data from "../data.json";

const Time = (props) => {
  const [time, setTime] = useState("");

  console.log(time);
  useEffect(() => {
    setTime(props.time);
  }, [props.hourkey, props.slotkey, props.time]);

  var slotItems;
  if (
    props.hourkey !== -1 &&
    props.slotkey !== -1 &&
    data.available_slots[props.hourkey].length !== 0 &&
    data.available_slots[props.hourkey].date_slots[props.slotkey].length !== 0
  ) {
    slotItems = data.available_slots[props.hourkey].date_slots[
      props.slotkey
    ].hour_slots.map((obj, i) =>
      Object.keys(obj).map((current, j) => (
        <option
          key={j}
          value={JSON.stringify(
            data.available_slots[props.hourkey].date_slots[props.slotkey]
              .hour_slots[j]
          )}
        >
          {current}
        </option>
      ))
    );
  } else {
    slotItems = "";
  }

  return (
    <Form.Group>
      <Form.Label>Choose Slot</Form.Label>
      <Form.Control as="select" htmlSize={3} onChange={props.handleSlots}>
        {slotItems}
      </Form.Control>
    </Form.Group>
  );
};
export default Time;

import React from "react";
import { Form } from "react-bootstrap";
import data from "../data.json";

const Time = (props) => {
  var slotItems;
  console.log(props);
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
          key={i}
          value={
            data.available_slots[props.hourkey].date_slots[props.slotkey]
              .hour_slots[j]
          }
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
      <Form.Control as="select" onChange={props.handleSlots}>
        <option value={-1}>Select Time</option>
        {slotItems}
      </Form.Control>
    </Form.Group>
  );
};
export default Time;

import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import data from "../data.json";
import styles from "../styles.module.css";

const Hour = (props) => {
  const [hour, setHour] = useState("");
  console.log(hour);
  useEffect(() => {
    setHour(props.hour);
  }, [props.hourkey, props.hour]);
  var hourItems;
  if (
    props.hourkey !== -1 &&
    data.available_slots[props.hourkey].length !== 0
  ) {
    hourItems = data.available_slots[props.hourkey].date_slots.map(
      (current, i) => (
        <option key={i} value={current.hour}>
          {current.hour}
        </option>
      )
    );
  } else {
    hourItems = "";
  }
  return (
    <Form.Group>
      <Form.Label>Choose Hour</Form.Label>
      <Form.Control
        as="select"
        htmlSize={3}
        onChange={props.handleHour}
        className={styles.options}
      >
        {hourItems}
      </Form.Control>
    </Form.Group>
  );
};
export default Hour;

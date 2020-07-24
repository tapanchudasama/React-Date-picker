import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import styles from "../styles.module.css";

const Date = (props) => {
  const [dates, setDates] = useState(props.slots);
  useEffect(() => {
    setDates(props.slots);
  }, [props.date, props.slots]);

  const dateItems = dates.map((current, i) => (
    <option key={i} value={current.date}>
      {current.date}
    </option>
  ));
  return (
    <Form.Group>
      <Form.Label>Choose Date</Form.Label>
      <Form.Control
        as="select"
        onChange={props.handleDate}
        className={styles.options}
      >
        <option value={-1}>Select Date</option>
        {dateItems}
      </Form.Control>
    </Form.Group>
  );
};
export default Date;

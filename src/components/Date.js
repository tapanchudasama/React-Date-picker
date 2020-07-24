import React from "react";
import { Form } from "react-bootstrap";
import data from '../data.json';
import styles from '../styles.module.css';

const Date = (props) => {
  const dateItems = data.available_slots.map((current, i) => (
    <option key={i} value={current.date}>
      {current.date}
    </option>
  ));
  return (
    <Form.Group >
      <Form.Label>Choose Date</Form.Label>
      <Form.Control as="select" onChange={props.handleDate} className={styles.options}>
      <option value={-1}>Select Date</option>
        {dateItems}
      </Form.Control>
    </Form.Group>
  );
};
export default Date;

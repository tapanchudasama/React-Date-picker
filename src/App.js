import React from "react";
import data from "./data.json";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import styles from "./styles.module.css";
import Date from "./components/Date";
import Hour from "./components/Hour";
import Time from "./components/Time";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      time: "",
      hourkey: -1,
      slotkey: null,
      errorMsg: "",
      successMsg: "",
      slotId: "",
    };
    this.handleMessage = this.handleMessage.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
  }
  componentDidMount() {
    this.setState({
      hourkey: -1,
      slotkey: -1,
      errorMsg: "",
      successMsg: "",
      slotId: "",
    });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("previous");
    console.log(prevState);
    console.log("current");
    console.log(this.state);
    if (prevState.hourkey !== this.state.hourkey) {
      this.setState({
        hourkey: this.state.hourkey,
      });
      this.handleMessage();
    }
    if (prevState.slotkey !== this.state.slotkey) {
      this.setState({
        slotkey: this.state.slotkey,
      });
      this.handleMessage();
    }
    if (prevState.slotId !== this.state.slotId) {
      this.setState({
        slotId: this.state.slotId,
      });
      this.handleSuccess();
    }
  }
  handleDate = (event) => {
    this.setState({
      hourkey: data.available_slots
        .map((e) => e.date)
        .indexOf(event.target.value),
    });
    this.handleMessage();
  };

  handleHour = (event) => {
    this.setState({
      slotkey: data.available_slots[this.state.hourkey].date_slots
        .map((e) => e.hour)
        .indexOf(event.target.value),
    });
    this.handleMessage();
  };

  handleSlots = (event) => {
    this.setState({
      slotId: event.target.value,
    });
  };
  handleMessage() {
    if (
      this.state.hourkey !== -1 &&
      data.available_slots[this.state.hourkey].date_slots.length === 0
    ) {
      this.setState({ errorMsg: "No slots available on this day." });
    } else {
      this.setState({ errorMsg: "" });
    }
  }
  handleSuccess() {
    if (
      this.state.slotId !== "" &&
      this.state.hourkey !== -1 &&
      data.available_slots[this.state.hourkey].date_slots.length !== 0
    ) {
      this.setState({
        successMsg: `Your slot is booked.`,
      });
    } else {
      this.setState({
        successMsg: "",
      });
    }
  }

  render() {
    return (
      <div className={styles.body}>
        <Container>
          <h3 className={styles.heading}>{data.title}</h3>
          <Jumbotron>
            <p className={styles.error}>{this.state.errorMsg}</p>
            <p className={styles.success}>{this.state.successMsg}</p>
            <Row>
              <Col>
                <Date handleDate={this.handleDate} />
              </Col>
              <Col>
                <Hour
                  hourkey={this.state.hourkey}
                  handleHour={this.handleHour}
                />
              </Col>
              <Col>
                <Time
                  hourkey={this.state.hourkey}
                  slotkey={this.state.slotkey}
                  handleSlots={this.handleSlots}
                />
              </Col>
            </Row>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}
export default App;

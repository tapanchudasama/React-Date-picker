import React from "react";
import data from "./data.json";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import styles from "./styles.module.css";
import Date from "./components/Date";
import Hour from "./components/Hour";
import Time from "./components/Time";
import Message from "./components/Message";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      date: "",
      hour: "",
      time: "",
      hourkey: -1,
      slotkey: -1,
      slotId: -1,
      flag: false,
    };
  }
  componentDidMount() {
    this.setState({
      time: "",
      date: "",
      hour: "",
      flag: false,
      hourkey: -1,
      slotkey: -1,
      slotId: -1,
    });
  }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("previous");
  //   console.log(prevState);
  //   console.log("current");
  //   console.log(this.state);
  //   if (prevState.hourkey !== this.state.hourkey) {
  //     this.setState({
  //       hourkey: this.state.hourkey,
  //     });
  //     this.handleMessage();
  //   }
  //   if (prevState.slotkey !== this.state.slotkey) {
  //     this.setState({
  //       slotkey: this.state.slotkey,
  //     });
  //     this.handleMessage();
  //   }
  //   if (prevState.slotId !== this.state.slotId) {
  //     this.setState({
  //       slotId: this.state.slotId,
  //     });
  //     this.handleSuccess();
  //   }
  // }
  handleDate = (event) => {
    this.setState({
      date: event.target.value,
      hour: "",
      slotkey: -1,
      slotId: -1,
      hourkey: data.available_slots
        .map((e) => e.date)
        .indexOf(event.target.value),
    });
  };

  handleHour = (event) => {
    this.setState({
      hour: event.target.value,
      slotId: -1,
      slotkey: data.available_slots[this.state.hourkey].date_slots
        .map((e) => e.hour)
        .indexOf(event.target.value),
    });
  };

  handleSlots = (event) => {
    console.log(event.target.value);
    this.setState({
      time: event.target.value,
      slotId: event.target.value,
    });
  };

  render() {
    return (
      <div className={styles.body}>
        <Container>
          <h3 className={styles.heading}>{data.title}</h3>
          <Jumbotron>
            <Message flag={this.state} />
            <Row>
              <Col>
                <Date
                  handleDate={this.handleDate}
                  slots={data.available_slots}
                  date={this.state.date}
                />
              </Col>
              <Col>
                <Hour
                  hour={this.state.hour}
                  hourkey={this.state.hourkey}
                  handleHour={this.handleHour}
                />
              </Col>
              <Col>
                <Time
                  time={this.state.time}
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

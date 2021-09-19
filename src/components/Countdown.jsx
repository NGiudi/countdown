import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const timeToString = (_seconds) => {
  let minutes = Math.floor(_seconds / 60);
  let seconds = Math.floor(_seconds % 60);

  return (
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds
  );
};

const Countdown = ({ initValue, onFinishCount, trigger }) => {
  const [time, setTime] = useState({
    enabled: trigger,
    text: timeToString(initValue),
    value: initValue - 1,
  });

  useEffect(() => {
    if (time.enabled && time.value !== -1) {
      setTimeout(() => {
        setTime((prevState) => ({
          ...prevState,
          value: prevState.value - 1,
          text: timeToString(time.value),
        }));
      }, 1000);
    } else if (time.value === -1) {

      if (typeof(onFinishCount) === "function")
        onFinishCount();
      
      setTime({
        enabled: false,
        text: timeToString(initValue),
        value: initValue - 1,
      });
    }
  }, [initValue, onFinishCount, time]);

  useEffect(() => {
    if (trigger) {
      setTime((prevState) => ({
        ...prevState,
        enabled: true
      }));
    }
  }, [trigger]);

  return time.text;
}

Countdown.propTypes = {
  initValue: PropTypes.number.isRequired,
  onFinishCount: PropTypes.func,
  trigger: PropTypes.bool.isRequired,
}

Countdown.defaultProps = {
  initValue: 0,
  onFinishCount: null,
  trigger: false,
}

export default Countdown;
import { useEffect, useState } from 'react';
import { CountProps } from './Countdown.types';
import { ColonTime, Timer } from './Countdown.styles';
import CountdownNumber from '../CountdownNumber';

const Countdown = (props: CountProps) => {
  const { endDate } = props;

  const finalDate = new Date(endDate);
  const localDate = Date.now();

  const [timeleft, setTimeLeft] = useState(finalDate.getTime() - localDate);

  const hours = Math.floor(timeleft / (1000 * 60 * 60));
  const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  let hoursArr = hours.toString().padStart(2, '0').split('');
  let minutesArr = minutes.toString().padStart(2, '0').split('');
  let secondsArr = seconds.toString().padStart(2, '0').split('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(finalDate.getTime() - Date.now());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <Timer>
      {hoursArr.map((digit, index) => (
        <CountdownNumber key={index} number={digit} />
      ))}
      <ColonTime>:</ColonTime>
      {minutesArr.map((digit, index2) => (
        <CountdownNumber key={index2} number={digit} />
      ))}
      <ColonTime>:</ColonTime>
      {secondsArr.map((digit, index3) => (
        <CountdownNumber key={index3} number={digit} />
      ))}
    </Timer>
  );
};

export default Countdown;

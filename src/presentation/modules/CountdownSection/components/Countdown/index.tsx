import React, { useEffect, useState } from 'react';
import { CountProps } from './Countdown.types';
import { ColonTime, Timer } from './Countdown.styles';
import CountdownNumber from '../CountdownNumber';

function convertToChileTimeZone(dateString: string | Date) {
  const date = new Date(dateString);
  const localOffset = date.getTimezoneOffset();
  const chileOffset = -240;
  date.setMinutes(date.getMinutes() - (localOffset - chileOffset));
  return date;
}

const Countdown = (props: CountProps) => {
  const { endDate, setIsEnabled } = props;

  const finalDate = convertToChileTimeZone(endDate);
  const now = convertToChileTimeZone(new Date());
  const [timeleft, setTimeLeft] = useState(finalDate.getTime() - now.getTime());

  const hours = Math.floor(timeleft / (1000 * 60 * 60));
  const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  let hoursArr = hours.toString().padStart(2, '0').split('');
  let minutesArr = minutes.toString().padStart(2, '0').split('');
  let secondsArr = seconds.toString().padStart(2, '0').split('');

  useEffect(() => {
    if (timeleft > 0) {
      const timer = setInterval(() => {
        const newTimeLeft =
          finalDate.getTime() - convertToChileTimeZone(new Date()).getTime();
        setTimeLeft(newTimeLeft > 0 ? newTimeLeft : 0);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
    setIsEnabled(false);
  }, [finalDate, timeleft]);

  return (
    <React.Fragment>
      {timeleft > 0 && (
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
      )}
    </React.Fragment>
  );
};

export default Countdown;

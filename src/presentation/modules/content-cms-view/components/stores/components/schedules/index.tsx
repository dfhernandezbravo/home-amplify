import { StoreContent } from '@/domain/entities/content/content.types';
import { Container } from './styles';
import ValidateScheduleStore from './components/validate-schedule-store';

type Time = {
  start: string;
  end: string;
};

const Schedules = (props: StoreContent) => {
  const { monSatStartHour, monSatEndHour, sunHolStartHour, sunHolEndHour } =
    props;

  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();
  const day = now.getDay();

  const getHourMinStartMonSat = monSatStartHour.split(':');
  const getHourMinEndMonSat = monSatEndHour.split(':');
  const getHourMinStartSunHol = sunHolStartHour.split(':');
  const getHourMinEndSunHol = sunHolEndHour.split(':');

  const validateDay = () => {
    let time = {} as Time;

    if (day === 0) {
      time = {
        start: getHourMinStartSunHol[0],
        end: getHourMinEndSunHol[0],
      };
    } else {
      time = {
        start: getHourMinStartMonSat[0],
        end: getHourMinEndMonSat[0],
      };
    }
    return time;
  };
  const schedule = validateDay();

  const validateStoreOpen = () => {
    const result =
      +schedule.start <= hour && +schedule.start <= hour && +schedule.end <= min
        ? true
        : false;
    return result;
  };

  const validateStoreClosed = () => {
    const result =
      +schedule.start <= hour && +schedule.start <= hour && +schedule.end <= min
        ? false
        : true;
    return result;
  };

  const isStoreOpen = validateStoreOpen();
  const isStoreClosed = validateStoreClosed();

  return (
    <Container>
      <ValidateScheduleStore
        isStoreOpen={isStoreOpen}
        isStoreClosed={isStoreClosed}
      />
      <p className="schedule">
        Lunes a sábado:
        <span className="hour">
          {monSatStartHour} horas a {monSatEndHour} horas
        </span>
      </p>
      <p>
        Domingo/Festivo:
        <span className="hour">
          {sunHolStartHour} horas a {sunHolEndHour} horas
        </span>
      </p>
    </Container>
  );
};

export default Schedules;

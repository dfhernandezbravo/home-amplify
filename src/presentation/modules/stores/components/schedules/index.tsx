import { StoreContent } from '@/domain/entities/content/content.types';
import { Container } from './styles';

const Schedules = (props: StoreContent) => {
  const { monSatStartHour, monSatEndHour, sunHolStartHour, sunHolEndHour } =
    props;

  //TODO: Validate time to show if the store is open or not.

  return (
    <Container>
      <p>
        Lunes a sábado:{' '}
        <span className="hour">
          {monSatStartHour} horas a {monSatEndHour} horas
        </span>{' '}
      </p>{' '}
      &nbsp;
      <p>
        Domingo/Festivo:{' '}
        <span className="hour">
          {sunHolStartHour} horas a {sunHolEndHour} horas{' '}
        </span>
      </p>
    </Container>
  );
};

export default Schedules;

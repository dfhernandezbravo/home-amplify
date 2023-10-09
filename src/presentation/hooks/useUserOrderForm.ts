import { OrderForm } from '@/domain/entities/order-form/order-form.entity';
import useLocalStorage from './useLocalStorage';

const useUserOrderForm = () => {
  const { getValueLocalStorage } = useLocalStorage();

  const getUserId = () => {
    const orderForm = getValueLocalStorage('orderform');

    if (!orderForm) return '*';

    const { userProfileId } = JSON.parse(orderForm) as OrderForm;

    return userProfileId || '*';
  };

  return {
    getUserId,
  };
};

export default useUserOrderForm;

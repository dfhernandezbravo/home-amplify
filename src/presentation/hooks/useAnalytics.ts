import { customDispatchEvent } from '@/presentation/store/events/dispatchEvents';
import WindowsEvents from '@/presentation/events';
import { UseAnalytics } from '@/domain/entities/analytics/analytics';

const useAnalytics = () => {
  const methods: UseAnalytics = {
    dispatchAnalyticsEvent: (data) => {
      customDispatchEvent({
        name: WindowsEvents.ANALYTICS,
        detail: {
          ...data,
        },
      });
    },
    sendPromotionImpressionEvent: (data) => {
      methods.dispatchAnalyticsEvent(data);
    },
    sendPromotionClickEvent: (data) => {
      methods.dispatchAnalyticsEvent(data);
    },
    sendImpressionsEvent: (data) => {
      methods.dispatchAnalyticsEvent(data);
    },
    sendProductClickEvent: (data) => {
      methods.dispatchAnalyticsEvent(data);
    },
    sendAddToCartEvent: (data) => {
      methods.dispatchAnalyticsEvent(data);
    },
    sendPageviewVirtualEvent: (data) => {
      methods.dispatchAnalyticsEvent(data);
    },
  };

  return { methods };
};

export default useAnalytics;

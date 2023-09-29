import store from '@/presentation/store';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

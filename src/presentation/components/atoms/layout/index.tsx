import { useDevice } from '@/presentation/hooks/use-device';

type Devices = 'Desktop' | 'Tablet' | 'Phone';

interface Props {
  is: Devices[];
  children: React.ReactNode;
}

export const Layout = ({ is, children }: Props) => {
  const { device } = useDevice();

  if (is.includes('Desktop') && device === 'Desktop') {
    return <>{children}</>;
  }
  if (is.includes('Tablet') && device === 'Tablet') {
    return <>{children}</>;
  }
  if (is.includes('Phone') && device === 'Phone') {
    return <>{children}</>;
  }

  return null;
};

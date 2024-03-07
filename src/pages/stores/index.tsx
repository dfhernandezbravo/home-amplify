import MainLayout from '@/presentation/components/layouts/main-layout/main-layout';
import Stores from '@/presentation/modules/stores';

const StoresPage = () => {
  return (
    <MainLayout>
      <div className="store-container">
        <Stores />
      </div>
    </MainLayout>
  );
};

export default StoresPage;

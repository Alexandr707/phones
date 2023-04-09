import { FC, useEffect } from 'react';
import Container from '../components/Container';
import Heading from '../components/Heading';
import ProductsPerPage from '../components/ProductsPerPage';
import Table from '../components/table/Table';
import tableFields from '../data/phoneFieldsDescription';
import { useActions } from '../hooks/useActions';
import { useCompare } from '../hooks/useCompare';
import { range } from '../utils/range';

const Compare: FC = () => {
  const { items, itemsQuantity, currentIdList } = useCompare();
  const { setItemsQuantity } = useActions();
  const currentPhones = currentIdList.map(
    (id) => items.find((item) => item.id === id)!
  );

  useEffect(() => {
    if (itemsQuantity > items.length) setItemsQuantity(items.length);
  }, []);

  return (
    <main>
      <section className='pt-14'>
        <Container>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8'>
            <Heading title='Смартфоны' />
            {items.length > 2 && (
              <ProductsPerPage
                variants={range(2, Math.min(6, items.length))}
                label='Отобразить товары'
                current={itemsQuantity}
                onChange={setItemsQuantity}
              />
            )}
          </div>
        </Container>
        <Table
          rows={Object.keys(tableFields) as (keyof typeof tableFields)[]}
          phones={currentPhones}
        />
      </section>
    </main>
  );
};

export default Compare;

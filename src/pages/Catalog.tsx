import { FC } from 'react';
import CatalogCart from '../components/CatalogCart';
import Container from '../components/Container';
import Heading from '../components/Heading';
import phonesData from '../data/phonedb';

const Catalog: FC = () => {
  return (
    <main>
      <section className='pt-14'>
        <Container>
          <Heading title='Каталог' />
          <div className='mt-4 w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
            {phonesData.map((ph) => (
              <CatalogCart key={ph.id} phone={ph} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Catalog;

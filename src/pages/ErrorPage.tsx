import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import Heading from '../components/Heading';

const ErrorPage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <main>
      <section className='pt-14'>
        <Container>
          <Heading
            title='404 | Страница не найдена'
            className='text-rose-500'
          />
        </Container>
      </section>
    </main>
  );
};

export default ErrorPage;

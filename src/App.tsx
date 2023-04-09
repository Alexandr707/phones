import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import MainLayout from './layout/MainLayout';
import Catalog from './pages/Catalog';
import Compare from './pages/Compare';
import ErrorPage from './pages/ErrorPage';
import Lk from './pages/Lk';
import { persistor, store } from './store/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route path='' element={<Catalog />} />
              <Route path='compare' element={<Compare />} />
              <Route path='lk' element={<Lk />} />
              <Route path='*' element={<ErrorPage />} />
            </Route>
          </Routes>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

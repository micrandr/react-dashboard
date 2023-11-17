import { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate  } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Cookies from 'js-cookie';

import ECommerce from './pages/Dashboard/ECommerce';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import routes from './routes';


const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
    const isAuthenticated = !!Cookies.get('auth');
    // if(!isAuthenticated){
    //   navigate('/auth/signin')
    // }

  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
    <Toaster position='top-right' reverseOrder={false} containerClassName='overflow-auto'/>
    
        <Routes>          
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />        
          <Route element={<DefaultLayout />}>
            <Route index element={<ECommerce />} />
            {routes.map(({ path, component: Component }) => (
              <Route
                path={path}
                key={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component />
                  </Suspense>
                }
              />
            ))}
          </Route>
        </Routes>
      
    </>
  );
}

export default App;

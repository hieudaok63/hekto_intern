import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from '~/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './styles/GlobalStyle';

const App: React.FC = () => {
    return (
        <>
            <Router>
                <>
                    <Routes>
                        {routes.map((route, i) => {
                            const Element = route.element;
                            const Layout = route.layout
                                ? route.layout
                                : Fragment;
                            return (
                                <Route
                                    key={i}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Element />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </>
                <GlobalStyle />
            </Router>
            <ToastContainer />
        </>
    );
};

export default App;

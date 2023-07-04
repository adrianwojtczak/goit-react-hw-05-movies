import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';

export const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};
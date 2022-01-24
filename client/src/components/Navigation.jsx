import HelloReact from "./HelloReact";
import CountUpDown from "./CountUpDown";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <>
    <BrowserRouter>
      <div>
        <Link to={'/'}>HelloReact</Link>
        <Link to={'/countUpDown'}>CountUpDown</Link>
      </div>
      <Routes>
        <Route path={'/'} element={<HelloReact />} />
        <Route path={'/countUpDown'} element={<CountUpDown />} />
      </Routes>
    </BrowserRouter>
    </>
  )
};

export default Navigation;
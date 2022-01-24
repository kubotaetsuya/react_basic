import HelloReact from "./HelloReact";
import CountUpDown from "./CountUpDown";
import SignUp from "./account/SignUp";
import SignUpConfirmation from "./account/SignUpConfirmation";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <>
    <BrowserRouter>
      <div>
        <Link to={'/'}>HelloReact</Link>
        <Link to={'/countUpDown'}>CountUpDown</Link>
        <Link to={'/sign-up'}>SignUp</Link>
      </div>
      <Routes>
        <Route path={'/'} element={<HelloReact />} />
        <Route path={'/countUpDown'} element={<CountUpDown />} />
        <Route path={'/sign-up'} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </>
  )
};

export default Navigation;
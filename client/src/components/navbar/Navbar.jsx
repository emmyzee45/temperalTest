import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutSuccess } from "../../redux/redux-slices/UserSlice";

const Navbar = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.user.currentUser);
  const handleLogout = async() => {
    dispatch(logOutSuccess())
  }

  return (
    <div className="navContainer">
      <div className="navleft navfw-bolder">
      <div className="navhamburger" onClick={() => setOpen(!open)}>
        <div className="navline" />
        <div className="navline" />
        <div className="navline" />
      </div>
       {user && (
        <>
          <Link to="/" className="navleftItem navitem">${user?.balance.toFixed(2)}</Link>
          <Link to="/" className="navleftItem navitem">Top up</Link>
        </>
       )}
      </div>
      <ul className="navlist fw-bolder">
        <li className="navlistItem">
          <Link to="/subscription" className="navitem">Subscriptions</Link>
        </li>
        <li className="navlistItem">
          <Link to="/message" className="navitem">Messages</Link>
        </li>
        {!user ? (
        <li className="navlistItem">
          <Link to="/login" className="navitem">Login</Link>
        </li>
        ) : (
          <>
            <li className="navlistItem" onClick={handleLogout}>
              <Link className="navitem">Logout</Link>
            </li>
            <li>
            <Link to="/profile">
            <img className="navimg" src={user?.img ? user?.img : "https://firebasestorage.googleapis.com/v0/b/cardano-d265c.appspot.com/o/images.jpeg?alt=media&token=8c34ea8e-71f2-4b6f-bf93-f823e2b3a90e"} />
            </Link>
            </li>
          </>
        )}
      </ul>
      <ul
        onClick={() => setOpen(false)}
        className="navmenu"
        style={{ left: open ? "0px" : "-50vw" }}>
        <li className="navmenuItem">
          <Link to="/" className="navitem">Home</Link>
        </li>
        <li className="navmenuItem">
          <Link to="/about" className="navitem">$0.00</Link>
        </li>
        <li className="navmenuItem">
          <Link to="/" className="navitem">Top up</Link>
        </li>
        <li className="navmenuItem">
          <Link to="/subscription" className="navitem">Subscriptions</Link>
        </li>
        <li className="navmenuItem">
          <Link to="/message" className="navitem">Messages</Link>
        </li>
        {!user ? (
          <li className="navmenuItem">
            <Link to="/login" className="navitem">Login</Link>
          </li>
        ): (
          <li className="navlistItem" onClick={handleLogout}>    
          <Link className="navitem">Logout</Link>
        </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;

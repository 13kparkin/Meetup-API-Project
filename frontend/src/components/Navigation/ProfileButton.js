import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import {useHistory, Link} from "react-router-dom";


function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory();


  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu();
    history.push("/");
  };

  const handleViewGroupsClick = (e) => {
    e.preventDefault();
    closeMenu();
    history.push("/groups");
  }

  const handleViewEventsClick = (e) => {
    e.preventDefault();
    closeMenu();
    history.push("/events");
  }

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <div className="login-button">
        <Link onClick={openMenu}>
          <i className="fas fa-user-circle" />
        </Link>
        <ul className={ulClassName} ref={ulRef}>
          {user ? (
            <>
              {`Hello, ${user.firstName}`}
              <div>{user.email}</div>
              <Link className="view-groups" onClick={logout}>Log Out</Link>
              <Link className="view-groups" to='/groups'>View Groups</Link>
              <Link className="view-events" to='/events'>View Events</Link>
            </>
          ) : (
            <>
              <OpenModalMenuItem
                itemText="Log In"
                onItemClick={closeMenu}
                modalComponent={<LoginFormModal />}
              />
              <OpenModalMenuItem
                itemText="Sign Up"
                onItemClick={closeMenu}
                modalComponent={<SignupFormModal />}
              />
              <Link className="view-groups" onClick={handleViewGroupsClick}>
              View Groups
              </Link>
              <Link className="view-events" onClick={handleViewEventsClick}>
              View Events
              </Link>
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default ProfileButton;

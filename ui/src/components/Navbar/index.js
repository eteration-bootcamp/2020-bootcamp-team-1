import React from "react";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbar.module.css";
import { withRouter } from "react-router-dom";
import Searchbar from "../common/Searchbar";
import JoinModal from "../modals/JoinModal";
import ActionButton from "../ActionButton";
import Avatar from "../common/Avatar";
import Brand from "./Brand";
import { connect } from "react-redux";
import { switchModalVisibility, logout } from "../../actions/auth";

const Nav = ({
  history,
  currentUser: { id, username },
  switchModalVisibility,
  logout
}) => {
  const {
    push,
    location: { pathname }
  } = history;

  const loggedIn = id ? true : false;

  history.listen((location, action) => {
    window.scrollTo(0, 0);
  });

  const onClick = () => {
    if (!loggedIn) {
      switchModalVisibility();
    } else if (pathname === "/new") alert("OK");
    // will create a post request ?
    else push("/new");
  };

  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="md"
      className={styles.Navbar}
      variant="dark"
    >
      <Brand />
      <Searchbar />
      {pathname !== "/new" && (
        <ActionButton isLoggedIn={loggedIn} onClick={onClick} />
      )}
      {loggedIn && <Avatar name={username} onLogout={logout} />}
      <JoinModal />
    </Navbar>
  );
};

const mapStateToProps = state => ({
  currentUser: state.authReducer.currentUser
});

export default connect(mapStateToProps, {
  switchModalVisibility,
  logout
})(withRouter(Nav));

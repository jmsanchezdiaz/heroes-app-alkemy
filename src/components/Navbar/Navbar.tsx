import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useSpreadContext from "../../customHooks/useSpreadContext";

const Navbar = () => {
  const { logOut, userToken } = useSpreadContext();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  useEffect(() => {
    const resize = (): void => {
      setIsOpenMenu(false);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <header className="bg-danger ">
      <nav className="navbar navbar-expand-md  px-2 navbar-dark ">
        <div className="navbar-brand">
          <h3 className="text-white">Heroes App</h3>
        </div>

        {userToken && (
          <div>
            <button
              className="navbar-toggler"
              type="button"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarToggleExternalContent"
            >
              <div className="navbar-nav">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-item nav-link active" : "nav-item nav-link"
                  }
                >
                  Actual Team
                </NavLink>
                <NavLink to="/search" className="nav-item nav-link">
                  Search
                </NavLink>
                <button onClick={logOut} className="btn nav-item text-white">
                  Log Out
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      {userToken && isOpenMenu && (
        <div className="navbar-nav text-center">
          <NavLink
            to="/"
            onClick={() => setIsOpenMenu(false)}
            className={({ isActive }) =>
              isActive
                ? "nav-link text-white text-muted fw-bold"
                : "  nav-link text-white "
            }
          >
            Actual Team
          </NavLink>
          <NavLink
            to="/search"
            onClick={() => setIsOpenMenu(false)}
            className={({ isActive }) =>
              isActive
                ? "nav-link text-white text-muted fw-bold"
                : "  nav-link text-white "
            }
          >
            Search
          </NavLink>
          <button onClick={logOut} className="btn  nav-link text-white">
            Log Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

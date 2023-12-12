import { Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Logo from "./shared/logo";
import { useAuth } from "../context/auth-context";
import NavigationLink from "./shared/navigation-link";

const Header = () => {
  const auth = useAuth();
  return (
    <main>
      <AppBar
        sx={{ bgcolor: "transparent", boxShadow: "none", position: "static" }}
      >
        <Toolbar sx={{ display: "flex" }}>
          <Logo />
          <div>
            {auth?.isLoggedIn ? (
              <>
                <NavigationLink
                  bg="#00fffc"
                  to="/chat"
                  text="Go To Chat"
                  textColor="black"
                />
                <NavigationLink
                  bg="#51538f"
                  textColor="white"
                  to="/"
                  text="logout"
                  onClick={auth.logout}
                />
              </>
            ) : (
              <>
                <NavigationLink
                  bg="#00fffc"
                  to="/login"
                  text="Login"
                  textColor="black"
                />
                <NavigationLink
                  bg="#51538f"
                  textColor="white"
                  to="/signup"
                  text="Signup"
                />
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </main>
  );
};

export default Header;

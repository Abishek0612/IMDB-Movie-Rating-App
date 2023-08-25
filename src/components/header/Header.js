import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import imdb_logo from "../../assets/imdb_logo.png";
import { Avatar, IconButton } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" style={{ background: "#202020" }}>
      <Toolbar>
        {/* create a container div to hold elements */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/">
            <img style={{ width: "40px" }} src={imdb_logo} alt="logo" />
          </Link>

          {/* create a link to a popular page */}
          <Link
            to="/movies/popular"
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "20px",
            }}
          >
            <Typography variant="h6">Popular</Typography>
          </Link>

          {/* create a link to a Top page */}
          <Link
            to="/movies/toprated"
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "20px",
            }}
          >
            <Typography variant="h6">Top rated</Typography>
          </Link>

          {/* create a link to a Upcoming page */}
          <Link
            to="/movies/upcoming"
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "20px",
            }}
          >
            <Typography variant="h6">Upcoming</Typography>
          </Link>


          {/* create a link to Registeration page */}
          <Link
            to="/register"
            style={{
              textDecoration: "none",
              color: "white",
              float: "right",
              marginLeft: "600px",
            }}
          >
            <Typography variant="h6">Register</Typography>
          </Link>

          {/* create a link to Login page */}
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "white",
              float: "right",
              marginLeft: "20px",
            }}
          >
            <Typography variant="h6">Login</Typography>
          </Link>

          <IconButton style={{outlineColor:'white'}}>
            <Avatar
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwcHJvZmVzaW9uYWwlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
            />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

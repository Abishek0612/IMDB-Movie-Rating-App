import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import imdb_logo from "../../assets/imdb_logo.png";
import { Avatar, IconButton } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" style={{ background: "#202020" }}>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link to="/">
                <img style={{ width: "40px" }} src={imdb_logo} alt="logo" />
              </Link>
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
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link
                to="/register"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "20px",
                }}
              >
                <Typography variant="h6">Register</Typography>
              </Link>
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "20px",
                }}
              >
                <Typography variant="h6">Login</Typography>
              </Link>
              <IconButton style={{outlineColor:'white', marginLeft: "20px"}}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVuJTIwcHJvZmVzaWlvbmFsJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D%3D&auto=format&fit=crop&w=1000&q=60"
                />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
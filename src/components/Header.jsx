import React from "react";
import Grid from "@mui/material/Grid";

const Header = ({ toggleTheme }) => {
  return (
    <Grid style={{ marginTop: "5px" }} container spacing={2}>
      <Grid item xs style={{ height: "50px" }}>
        <div>
          <label className="switch " style={{ marginTop: "25px" }}>
            <input type="checkbox" onClick={toggleTheme} />
            <span class="slider round"></span>
          </label>{" "}
          <button className="btn">
            <h6 style={{ color: "white" }}>
              Watch List{" "}
              <svg
                style={{ marginLeft: "5px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-grid-3x3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4h4V6H6v4zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5v-4zm1 0v4h4v-4H6zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11v4zm-1 0V1H6v4h4z" />
              </svg>{" "}
            </h6>
          </button>
        </div>
      </Grid>
      <Grid item xs={6} style={{ height: "50px" }}>
        <h3>Movie Search with React Hook</h3>
      </Grid>
      <Grid item xs style={{ height: "50px" }}>
        <h4 style={{ fontWeight: "bold" }}>Soroush mini project</h4>
      </Grid>
    </Grid>
  );
};

export default Header;

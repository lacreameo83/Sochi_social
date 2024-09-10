import React from "react";
import { Box } from "@mui/system";
import { AppBar, Toolbar, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
        <AppBar position="static">
          <Toolbar>
            <section
              className="flex justify-around items-center gap-[15vw]"
              // style={{ display: "flex", justifyContet: "space-between" }}
              // sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <Link to="/home">
                <div
                  noWrap
                  component="div"
                  sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                >
                  Presy Social
                </div>
              </Link>

              <div>
                <input
                  type="text"
                  className="w-[30vw] outline-none text-black p-1 rounded-2xl  "
                  placeholder="   search for friends"
                />
              </div>
              <div className="flex items-center justify-between gap-8">
                <Link to="/home">
                  <div>HomePage</div>
                </Link>

                <div>Template</div>
                <div style={{ position: "relative" }}>
                  <AccountCircleIcon />
                  <div className="absolute right-[-4px] top-[-4px] w-4 h-4 bg-red-500 flex items-center justify-center rounded-full">
                    1
                  </div>
                </div>
                <div style={{ position: "relative" }}>
                  <MarkUnreadChatAltIcon />
                  <div className="absolute right-[-4px] top-[-4px] w-4 h-4 bg-red-500 flex items-center justify-center rounded-full">
                    1
                  </div>
                </div>
                <div style={{ position: "relative" }}>
                  <CircleNotificationsIcon />
                  <div className="absolute right-[-4px] top-[-4px] w-4 h-4 bg-red-500 flex items-center justify-center rounded-full">
                    1
                  </div>
                </div>
                <Link to="userprofile">
                  <div className="w-8 h-8 rounded-full">
                    <img
                      className="rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzZy1TK5SD6weV50ZrMUeTVBqIaNDgWrCaTsZAWjY31Pjazq-LK-i7N1U4Qz4fB-Dg8W0&usqp=CAU"
                      alt="profile-image"
                    />
                  </div>
                </Link>
              </div>
            </section>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Home;


import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { MDBIcon } from "mdb-react-ui-kit";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SidebarComponent() {
  
  const navigate = useNavigate();
  const { collapseSidebar } = useProSidebar();

  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>     
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
        <h4 style={{justifyContent:"center",textAlign:"center",display:"flex"}} >NepLance Admin</h4>
          <MenuItem>
          </MenuItem>
          <MenuItem onClick={()=>navigate("/adminhome")}  icon={<MDBIcon fas icon="home" />} >Home</MenuItem>
          <MenuItem onClick={()=>navigate("/viewusers")}  icon={<MDBIcon fas icon="users" />}>Users</MenuItem>
          <MenuItem onClick={()=>navigate("/viewservices")} icon={<MDBIcon fas icon="clipboard-list" />} >Serivices</MenuItem>
          <MenuItem onClick={()=>navigate("/viewreviews")}  icon={<MDBIcon fas icon="comment-alt" />}>Reviews</MenuItem>
          <MenuItem onClick={()=>navigate("/adminhome")}  icon={<MDBIcon fas icon="question-circle" />}>FAQ</MenuItem>
        </Menu>
      </Sidebar>
      <main>
       <Outlet/>
      </main>
    </div>
  );
}

export default SidebarComponent;
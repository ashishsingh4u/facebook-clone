import {
  Storefront,
  Chat,
  People,
  VideoLibrary,
  ExpandMoreOutlined,
  EmojiFlags,
  LocalHospital,
} from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./sidebarrow/SidebarRow";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://avatars.githubusercontent.com/u/2356330?v=4"
        title="Ashish Singh"
      />
      <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Watch" />
      <SidebarRow Icon={ExpandMoreOutlined} title="See More" />
    </div>
  );
}

export default Sidebar;

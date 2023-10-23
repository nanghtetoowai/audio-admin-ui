import { Avatar, Menu, Tag } from "antd";
import React from "react";
import "./SideBarContent.scss";
import {
  DownOutlined,
  HomeOutlined,
  PicLeftOutlined,
  PicRightOutlined,
  PlusCircleOutlined,
  RiseOutlined,
  UnorderedListOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";

export default function SideBarContent() {
  const onClick = (e) => {
    console.log("click ", e);
  };

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem(
      "",
      "grp",
      null,
      [
        getItem("Home", "1", <HomeOutlined />),
        getItem("Songs", "2", <PicLeftOutlined />),
        getItem("Playlists", "3", <UnorderedListOutlined />),
        getItem("Just for you", "4", <UserSwitchOutlined />),
        getItem("Top Charts", "5", <RiseOutlined />),
      ],
      "group"
    ),
  ];

  const items2 = [
    getItem(
      "",
      "grp",
      null,
      [
        getItem("Workout Mix", "1", <PicRightOutlined />),
        getItem("Chillin' at Home", "2", <PicLeftOutlined />),
        getItem("Booping at Adobe", "3", <PicRightOutlined />),
        getItem("XD 4 life", "4", <PicRightOutlined />),
      ],
      "group"
    ),
  ];
  return (
    <div>
      <div className="d-flex justify-content-start align-items-end gap-2 dot-wrapper">
        <div className="dot bg-success" />
        <div className="dot bg-danger" />
        <div className="dot bg-warning" />
      </div>
      {/* Account proifle dropdown */}
      <div className="sider-profile d-flex justify-content-center align-items-center">
        <div>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </div>
        <div className="d-flex flex-column">
          <h6 className="m-0 p-0">
            Joshua
            <span className="icon">
              <DownOutlined />
            </span>
          </h6>
          <Tag>PREMIUM</Tag>
        </div>
      </div>
      {/* Browse menus */}
      <div className="browse-menus">
        <h5 className="m-0">Browse</h5>
        <Menu
          onClick={onClick}
          style={{
            width: "100%",
            backgroundColor: "inherit",
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      </div>

      {/* Your playlist menus */}
      <div className="browse-menus mt-3">
        <h5 className="m-0">
          Your Playlists
          <span className="mx-2">
            <PlusCircleOutlined />
          </span>
        </h5>
        <Menu
          onClick={onClick}
          style={{
            width: "100%",
            backgroundColor: "inherit",
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items2}
        />
      </div>
    </div>
  );
}

import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Avatar, Table } from "antd";
import React from "react";
import { Ellipsis } from "react-bootstrap/esm/PageItem";

export default function RecentPlaylists() {
  const columns = [
    {
      title: "Name",
      render: (text) => (
        <Avatar shape="square" className="hover-bg-white cursor-pointer" />
      ),
      width: 30,
    },
    {
      title: "Age",
      dataIndex: "name",
      key: "name",
      width: 250,
    },
    {
      title: "Address",
      dataIndex: "artist",
      width: 300,
      render: (_, { artist }) => <div className="text-muted">{artist}</div>,
    },
    {
      title: "Address",
      dataIndex: "time",
      width: 40,
    },
    {
      title: "Tags",
      dataIndex: "isFavorite",
      render: (_, { isFavorite }) =>
        isFavorite ? <HeartFilled /> : <HeartOutlined />,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => <Ellipsis />,
    },
  ];

  const data = [
    {
      key: "1",
      name: "All the jazz",
      artist: "Various artists",
      time: "3:30",
      isFavorite: false,
    },
    {
      key: "2",
      name: "Splash",
      artist: "Blue Eye...",
      time: "3:30",
      isFavorite: true,
    },
    {
      key: "3",
      name: "Prism",
      artist: "Gus Bot",
      time: "3:30",
      isFavorite: true,
    },
    {
      key: "4",
      name: "Mind-blowing Boots",
      artist: "Various artists",
      time: "2:05",
      isFavorite: false,
    },
  ];
  return (
    <div>
      <h4 className="text-muted">Recent Played</h4>
      <Table columns={columns} dataSource={data} showHeader={false} />
    </div>
  );
}

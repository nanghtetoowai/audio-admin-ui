import { PlayCircleOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import './DashboardCard.scss';

export default function DashboardCard({ title, subtitle, style }) {
  return (
    <Card
      className="card-hover"
      headStyle={{ border: "none", padding: "30px" }}
      title={
        <div>
          <h2 className="text-white m-0 fs-1 fw-bold">{title}</h2>
          <p
            className="text-white fs-4 m-0 p-0"
            style={{ opacity: 0.6, letterSpacing: 2 }}
          >
            {subtitle}
          </p>
        </div>
      }
      bordered={false}
      style={style}
    >
      <PlayCircleOutlined className="text-white fs-3" />
    </Card>
  );
}

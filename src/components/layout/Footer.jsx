import {
  LaptopOutlined,
  MenuUnfoldOutlined,
  PlayCircleOutlined,
  PlusCircleOutlined,
  RetweetOutlined,
  SoundFilled,
  StepBackwardOutlined,
  StepForwardOutlined,
  SwapOutlined,
  TabletOutlined,
} from "@ant-design/icons";
import { Avatar, Col, Row, Slider, Space } from "antd";
import React from "react";

export default function FooterBar() {
  return (
    <Row gutter={24}>
      <Col span={4}>
        <Space>
          <Avatar
            size={50}
            shape="circle"
            className="hover-bg-white cursor-pointer"
          />
          <div>
            <h6 className="m-0 p-0">Mind Blowing</h6>
            <p className="m-0 text-xs text-light">Various Artists</p>
          </div>
          <PlusCircleOutlined
            style={{ position: "absolute", top: -10, right: 10 }}
          />
        </Space>
      </Col>
      <Col
        span={14}
        className="d-flex justify-content-center align-items-center"
      >
        <Space className="gap-4 fs-3">
          <SwapOutlined />
          <StepBackwardOutlined />
          <PlayCircleOutlined />
          <StepForwardOutlined />
          <RetweetOutlined />
          <Slider
            min={1}
            max={30}
            disabled={false}
            style={{
              width: "400px",
              backgroundColor: "#c7497f",
            }}
          />
        </Space>
      </Col>
      <Col
        span={6}
        className="d-flex justify-content-center align-items-center"
      >
        <Space className="gap-4 fs-4">
          <MenuUnfoldOutlined />
          <div className="d-flex justify-content-center align-items-center">
            <TabletOutlined className="fs-5" />
            <LaptopOutlined classID="fs-4" />
          </div>
          <SoundFilled />
          <Slider
            defaultValue={30}
            disabled={false}
            style={{ width: "100px" }}
          />
        </Space>
      </Col>
    </Row>
  );
}

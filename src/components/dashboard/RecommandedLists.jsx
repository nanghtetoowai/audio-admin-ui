import { Avatar, Col, Row } from "antd";
import React from "react";

export default function RecommandedLists() {
  return (
    <div>
      <h4 className="text-muted">Recommanded for you</h4>
      <Row gutter={24}>
        <Col span={8}>
          <Avatar
            size={180}
            shape="square"
            className="hover-bg-white cursor-pointer"
          />
          <h6 className="m-0 mt-2">Best of Blues</h6>
          <p className="text-xs text-muted m-0">Jazzmaster Bill</p>
        </Col>
        <Col span={8}>
          <Avatar
            size={180}
            shape="square"
            className="hover-bg-white cursor-pointer"
          />
          <h6 className="m-0 mt-2">Out of this World</h6>
          <p className="text-xs text-muted m-0">Lily Wanders</p>
        </Col>
        <Col span={8}>
          <Avatar
            size={180}
            shape="square"
            className="hover-bg-white cursor-pointer"
          />
          <h6 className="m-0 mt-2">Acoustics</h6>
          <p className="text-sm text-muted m-0">The Spaceman</p>
        </Col>
      </Row>
    </div>
  );
}

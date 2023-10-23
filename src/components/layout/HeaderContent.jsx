import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import { Badge, Input } from "antd";
import React, { useState } from "react";
import { Fade } from "react-bootstrap";

export default function HeaderContent() {
  const [show, setShow] = useState(false);
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        {!show ? (
          <SearchOutlined onClick={() => setShow(!show)} />
        ) : (
          <Fade in={show}>
            <Input
              id="example-collapse-text"
              onClick={() => setShow(!show)}
              placeholder="search"
              style={{ width: 400 }}
            />
          </Fade>
        )}
      </div>
      <div>
        <Badge count={3} size="small">
          <BellOutlined className="fs-6" />
        </Badge>
      </div>
    </div>
  );
}

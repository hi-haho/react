// import React from "react";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

function TabsExample() {
  return (
    <Nav variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/">🏠🏡🏠</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/gugu">구구단🙉</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="gugudan">구구단🤖</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="jik">직원 전체보기🙈</Nav.Link>
      </Nav.Item>
      {/* <Nav.Item>
        <Nav.Link eventKey="disabled">
          Disabled
        </Nav.Link>
      </Nav.Item> */}
    </Nav>
  );
}

export default TabsExample;

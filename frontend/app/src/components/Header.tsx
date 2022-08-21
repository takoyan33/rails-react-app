import { PageHeader } from "antd";
import React from "react";

const Header: React.FC = () => (
  <PageHeader
    className="site-page-header"
    // onBack={() => null}
    title="API図鑑"
    subTitle="様々なAPIが見れます"
  />
);

export default Header;

import {
  GithubFilled,
  InfoCircleFilled,
  QuestionCircleFilled,
} from "@ant-design/icons";
import {
  PageContainer,
  PageHeader,
  ProCard,
  ProLayout,
} from "@ant-design/pro-components";
import { useState } from "react";
import defaultProps from "./_defaultProps";
import logo from "@public/icon.ico";

export default (Props: any) => {
  const [pathname, setPathname] = useState("/home");
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <ProLayout
        title="后台管理系统"
        logo={logo}
        {...defaultProps}
        location={{
          pathname,
        }}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || "/home");
            }}
          >
            {dom}
          </div>
        )}
      ></ProLayout>
    </div>
  );
};

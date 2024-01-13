import { CrownFilled, SmileFilled, TabletFilled } from "@ant-design/icons";

export default {
  route: {
    routes: [
      {
        path: "/home",
        name: "欢迎",
        icon: <SmileFilled />,
        component: "./Home",
      },
      {
        path: "/admin",
        name: "管理页",
        icon: <CrownFilled />,
        access: "canAdmin",
        component: "./Admin",
        routes: [
          {
            path: "/admin/sub-page1",
            name: "一级页面",
            icon: "https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg",
            component: "./Welcome",
          },
        ],
      },
    ],
  },
  location: {
    pathname: "/home",
  },
};

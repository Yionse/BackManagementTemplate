import One from "@/pages/Admin/One";
import Home from "@/pages/Home";
import { CrownFilled, SmileFilled, TabletFilled } from "@ant-design/icons";

export default {
  routes: [
    {
      path: "/home",
      name: "首页",
      icon: <SmileFilled />,
      component: "./pages/Home",
    },
    {
      path: "/admin",
      name: "管理页",
      icon: <CrownFilled />,
      access: "canAdmin",
      routes: [
        {
          path: "/admin/sub-one",
          name: "一级页面",
          icon: "https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg",
          component: <One />,
        },
        {
          path: "/admin/sub-page2",
          name: "二级页面",
          icon: <CrownFilled />,
          component: "./Two",
        },
        {
          path: "/admin/sub-page3",
          name: "三级页面",
          icon: <CrownFilled />,
          component: "./Welcome",
        },
      ],
    },
    {
      name: "列表页",
      icon: <TabletFilled />,
      path: "/list",
      component: "./ListTableList",
      routes: [
        {
          path: "/list/sub-page",
          name: "列表页面",
          icon: <CrownFilled />,
          routes: [
            {
              path: "sub-sub-page1",
              name: "一一级列表页面",
              icon: <CrownFilled />,
              component: "./Welcome",
            },
            {
              path: "sub-sub-page2",
              name: "一二级列表页面",
              icon: <CrownFilled />,
              component: "./Welcome",
            },
            {
              path: "sub-sub-page3",
              name: "一三级列表页面",
              icon: <CrownFilled />,
              component: "./Welcome",
            },
          ],
        },
        {
          path: "/list/sub-page2",
          name: "二级列表页面",
          icon: <CrownFilled />,
          component: "./Welcome",
        },
        {
          path: "/list/sub-page3",
          name: "三级列表页面",
          icon: <CrownFilled />,
          component: "./Welcome",
        },
      ],
    },
  ],
};

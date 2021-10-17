export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            layout: false,
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },

  {
    path: '/buy',
    name: '购买商品',
    access: 'alluser',
    icon: 'BarChartOutlined',
    routes: [
      {
        path: '/buy/all',
        name: '随便看看',
        component: './store',
      },
      {
        path: '/buy/new',
        name: '新品上架',
        component: './store',
      },
      {
        path: '/buy/good',
        name: '优质货源',
        component: './store',
      },
    ],
  },
  {
    path: '/record',
    name: '交易记录',
    access: 'alluser',
    icon: 'AccountBookOutlined',
    routes: [
      {
        path: '/record/sell',
        name: '出售商品',
        component: './store',
      },
      {
        path: '/record/buy',
        name: '购买商品',
        component: './store',
      },
    ],
  },
  {
    path: '/system',
    name: '系统管理',
    access: 'alluser',
    icon: 'ToolOutlined',
    routes: [
      {
        path: '/system/users',
        name: '用户管理',
        component: './user',
      },
    ],
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    component: './404',
  },
];

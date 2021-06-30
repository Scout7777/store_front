export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  {
    path: '/home',
    name: '血液透析中心',
    // access: ['admin', 'doctor', 'nurse', 'engineer'],
    access: 'admin'|| 'doctor'|| 'nurse'||'engineer',
    icon: 'home',
    component: './Welcome',
  },
  {
    path: '/monitor',
    name: '透析监控',
    access: 'admin'|| 'doctor'|| 'nurse'||'engineer',
    icon: 'FundOutlined',
    component: './Welcome',
  },  
  {
    path: '/record',
    name: '透析记录',
    access: 'admin'|| 'doctor'|| 'nurse'||'engineer',
    icon: 'FileSearchOutlined',
    component: './Welcome',
  },
  {
    path: '/patient',
    name: '患者管理',
    access: 'admin'|| 'doctor'|| 'nurse'||'engineer',
    icon: 'TeamOutlined',
    component: './Welcome',
  },
  {
    path: '/bed',
    name: '排床管理',
    access: 'admin'|| 'doctor'|| 'nurse',
    icon: 'OrderedListOutlined',
    component: './Welcome',
  },
  {
    path: '/schedule',
    name: '医护排班',
    access: 'admin'|| 'doctor'|| 'nurse',
    icon: 'ScheduleOutlined',
    component: './Welcome',
  },
  {
    path: '/equipment_management',
    name: '设备管理',
    access: 'admin'|| 'doctor'|| 'nurse'||'engineer',
    icon: 'DatabaseOutlined',
    component: './Welcome',
  },
  {
    path: '/stock',
    name: '库存管理',
    access: 'admin'|| 'doctor'|| 'nurse',
    icon: 'GoldOutlined',
    component: './Welcome',
  },
  {
    path: '/account',
    name: '费用管理',
    access: 'admin'|| 'doctor'|| 'nurse',
    icon: 'AccountBookOutlined',
    component: './Welcome',
  },
  {
    path: '/quality',
    name: '质量分析',
    access: 'admin'|| 'doctor'|| 'nurse'||'engineer',
    icon: 'BarChartOutlined',
    component: './Welcome',
  },
  {
    path: '/dashboard',
    name: '设备监控',
    access: 'admin'|| 'doctor'|| 'nurse'||'engineer',
    icon: 'DashboardOutlined',
    component: './Welcome',
  },
  {
    path: '/system',
    name: '系统管理',
    access: 'admin',
    icon: 'ToolOutlined',
    routes: [
      {
        path: '/system/users',
        name: '用户管理',
        component: './TableList',
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

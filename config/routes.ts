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
    path: '/mobile',
    layout: false,
    routes: [
      {
        path: '/mobile',
        // component: '../layouts/index',
        routes: [
          {
            layout: false,
            path: '/mobile/login',
            component: './home',
          },
        ],
      },
    ],
  },
  {
    path: '/home',
    name: '血液透析中心',
    access: 'alluser',
    icon: 'home',
    component: './home',
  },
  {
    path: '/room',
    name: '透析室',
    access: 'alluser',
    icon: 'AppstoreOutlined',
    component: './room',
  },
  {
    path: '/monitor_pad',
    name: '透析操作',
    access: 'alluser',
    icon: 'FundOutlined',
    component: './monitor_pad',
  },
  {
    path: '/monitor',
    name: '透析监控',
    access: 'alluser',
    icon: 'FundOutlined',
    component: './monitor',
  },
  {
    path: '/record',
    name: '透析记录',
    access: 'alluser',
    icon: 'FileSearchOutlined',
    component: './record',
  },
  {
    path: '/patient',
    name: '患者管理',
    access: 'alluser',
    icon: 'TeamOutlined',
    component: './patient',
  },
  {
    path: '/bed',
    name: '排床管理',
    access: 'worker',
    icon: 'OrderedListOutlined',
    component: './bed',
  },
  // {
  //   path: '/bed_backup',
  //   name: '排床管理_日历',
  //   access: 'worker',
  //   icon: 'OrderedListOutlined',
  //   component: './bed_backup',
  // },
  {
    path: '/schedule',
    name: '医护排班',
    access: 'worker',
    icon: 'ScheduleOutlined',
    component: './schedule',
  },
  {
    path: '/equipment_management',
    name: '设备管理',
    access: 'alluser',
    icon: 'DatabaseOutlined',
    component: './equ_manage',
  },
  {
    path: '/stock',
    name: '库存管理',
    access: 'worker',
    icon: 'GoldOutlined',
    component: './stock',
  },
  {
    path: '/account',
    name: '费用管理',
    access: 'worker',
    icon: 'AccountBookOutlined',
    component: './account',
  },
  {
    path: '/quality',
    name: '质量分析',
    access: 'alluser',
    icon: 'BarChartOutlined',
    routes: [
      {
        path: '/quality/patient',
        name: '患者统计',
        component: './quality_patient',
      },
      {
        path: '/quality/equipment',
        name: '设施设备',
        component: './quality_equipment',
      },
      {
        path: '/quality/process',
        name: '透析过程',
        component: './quality_process',
      },
      {
        path: '/quality/result',
        name: '透析结果',
        component: './quality_result',
      },
      {
        path: '/quality/analysis',
        name: '患者分析',
        component: './quality_analysis',
      },
    ],
  },
  {
    path: '/dashboard',
    name: '设备检测',
    access: 'alluser',
    icon: 'DashboardOutlined',
    component: './dashboard',
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
    redirect: '/room',
  },
  {
    component: './404',
  },
];

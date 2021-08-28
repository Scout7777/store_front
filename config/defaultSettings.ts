import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  headerTheme: 'light',
  primaryColor: '#366BD3',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '血液透析系统',
  pwa: false,
  menu: {
    locale: false, //关闭国际化
  },
  logo: '/logo.svg',
  iconfontUrl: '',
};

export default Settings;

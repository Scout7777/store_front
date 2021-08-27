import { Pie } from '@ant-design/charts';
// AgeOfPatients
const Form6 = () => {
  const data = [
    {
      医疗支付方式: '基本医保',
      value: 27,
    },
    {
      医疗支付方式: '新农合',
      value: 25,
    },
    {
      医疗支付方式: '自费医疗',
      value: 18,
    },
    {
      医疗支付方式: '公费医疗',
      value: 15,
    },
    {
      医疗支付方式: '商业保险',
      value: 10,
    },
    {
      医疗支付方式: '军队医疗',
      value: 15,
    },
    {
      医疗支付方式: '其他',
      value: 10,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: '医疗支付方式',
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: function content(_ref) {
        const { percent } = _ref;
        return ''.concat((percent * 100).toFixed(0), '%');
      },
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [{ type: 'element-active' }],
  };
  return <Pie {...config} />;
};

export default Form6;

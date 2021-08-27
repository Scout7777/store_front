import { Pie } from '@ant-design/charts';
// AgeOfPatients
const Form15 = () => {
  const data = [
    {
      医疗支付方式: '医保卡',
      value: 27,
    },
    {
      医疗支付方式: '微信',
      value: 25,
    },
    {
      医疗支付方式: '支付宝',
      value: 18,
    },
    {
      医疗支付方式: '银行卡',
      value: 15,
    },
    {
      医疗支付方式: '现金',
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

export default Form15;

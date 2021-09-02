import { Pie } from '@ant-design/charts';
// AgeOfPatients
const Form1 = () => {
  const data = [
    {
      key: '主要死因',
      value: 27,
    },
    {
      key: '心血管事件',
      value: 25,
    },
    {
      key: '脑血管事件',
      value: 18,
    },
    {
      key: '消化道出血等出血性疾病',
      value: 15,
    },
    {
      key: '其他',
      value: 10,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'key',
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

export default Form1;

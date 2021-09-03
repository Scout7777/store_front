import { Pie } from '@ant-design/charts';
// AgeOfPatients
const Form1 = () => {
  const data = [
    {
      key: '20岁以下',
      value: 27,
    },
    {
      key: '20-30',
      value: 25,
    },
    {
      key: '30-40',
      value: 18,
    },
    {
      key: '40-50',
      value: 15,
    },
    {
      key: '50-60',
      value: 10,
    },
    {
      key: '60-70',
      value: 10,
    },
    {
      key: '70-80',
      value: 10,
    },
    {
      key: '80岁以上',
      value: 5,
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

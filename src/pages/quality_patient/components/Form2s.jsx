import { Pie } from '@ant-design/charts';
// AgeOfPatients
const Form1 = () => {
  const data = [
    {
      key: '本院透析人数',
      value: 15,
    },
    {
      key: '',
      value: 22,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'key',
    radius: 0.9,
    color: ['#2ca02c', '#1E90FF'],

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

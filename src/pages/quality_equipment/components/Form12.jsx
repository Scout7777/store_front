import { Pie } from '@ant-design/charts';
// AgeOfPatients
const Form13 = () => {
  const data = [
    {
      key: '2班透析治疗的例次',
      value: 27,
    },
    {
      key: '2班预期给定床位数×12×周数-2班透析治疗的例次',
      value: 25,
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

export default Form13;

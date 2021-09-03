import { Pie } from '@ant-design/charts';
// AgeOfPatients
const Form1 = () => {
  const data = [
    {
      key: '达标次数',
      value: 34,
    },
    {
      key: '已完成次数-达标次数',
      value: 36,
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

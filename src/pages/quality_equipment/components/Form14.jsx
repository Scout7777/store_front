import { Pie } from '@ant-design/charts';
// AgeOfPatients
const Form4 = () => {
  const data = [
    {
      key: '单种血液透析装置数量',
      value: 2,
    },
    {
      key: '透析以及过滤装置',
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

export default Form4;

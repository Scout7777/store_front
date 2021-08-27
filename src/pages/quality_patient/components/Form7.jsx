import { Pie } from '@ant-design/charts';
// AgeOfPatients
const Form7 = () => {
  const data = [
    {
      年龄: '小于12个月',
      value: 27,
    },
    {
      年龄: '12-36',
      value: 25,
    },
    {
      年龄: '36-60',
      value: 18,
    },
    {
      年龄: '大于60个月',
      value: 15,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: '年龄',
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

export default Form7;

import { Pie } from '@ant-design/charts';

const Form6 = () => {
  const data = [
    {
      type: '20岁以下',
      value: 27,
    },
    {
      type: '20-30',
      value: 25,
    },
    {
      type: '30-40',
      value: 18,
    },
    {
      type: '40-50',
      value: 15,
    },
    {
      type: '50-60',
      value: 10,
    },
    {
      type: '60岁以上',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
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

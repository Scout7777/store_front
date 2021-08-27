import { Pie } from '@ant-design/charts';

const Pie4 = () => {
  const data = [
    {
      type: '病因a',
      value: 27,
    },
    {
      type: '病因b',
      value: 25,
    },
    {
      type: '病因b',
      value: 18,
    },
    {
      type: '病因b',
      value: 15,
    },
    {
      type: '病因b0',
      value: 10,
    },
    {
      type: '病因b',
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

export default Pie4;

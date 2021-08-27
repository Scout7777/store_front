import { Pie } from '@ant-design/charts';
// AgeOfPatients
const Form13 = () => {
  const data = [
    {
      原发病类型: '原发病A',
      value: 27,
    },
    {
      原发病类型: '原发病A',
      value: 25,
    },
    {
      原发病类型: '原发病B',
      value: 18,
    },
    {
      原发病类型: '原发病C',
      value: 15,
    },
    {
      原发病类型: '原发病D',
      value: 10,
    },
    {
      原发病类型: '原发病E',
      value: 10,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: '原发病类型',
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

import { Pie } from '@ant-design/charts';
// AgeOfPatients
const Form5 = () => {
  const data = [
    {
      原发病类型: '乙肝：乙肝HBV',
      value: 27,
    },
    {
      原发病类型: '丙肝：丙肝HCV',
      value: 25,
    },
    {
      原发病类型: '梅毒：梅毒检测状态代码RPR',
      value: 18,
    },
    {
      原发病类型: '艾滋病：艾滋病HIV',
      value: 15,
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

export default Form5;

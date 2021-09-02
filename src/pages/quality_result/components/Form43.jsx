import { Pie } from '@ant-design/charts';
// AgeOfPatients
const Form1 = () => {
  const data = [
    {
      key: '自体动静脉内瘘',
      value: 27,
    },
    {
      key: '移植物内瘘',
      value: 25,
    },
    {
      key: '中心静脉导管（带隧道带涤纶套的导管）',
      value: 18,
    },
    {
      key: '其他类',
      value: 15,
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

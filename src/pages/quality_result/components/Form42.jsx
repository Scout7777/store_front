import { Pie } from '@ant-design/charts';
// AgeOfPatients
const Form1 = () => {
  const data = [
    {
      key: '死亡',
      value: 1,
    },
    {
      key: '肾移植',
      value: 25,
    },
    {
      key: '放弃治疗',
      value: 18,
    },
    {
      key: '转为腹透患者',
      value: 15,
    },
    {
      key: '好转脱离透析',
      value: 10,
    },
    {
      key: '其他',
      value: 10,
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

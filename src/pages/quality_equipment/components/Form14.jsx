import { Pie } from '@ant-design/charts';
// AgeOfPatients
const Form14 = () => {
  const data = [
    {
      透析装置: '血液透析装置',
      value: 27,
    },
    {
      透析装置: '血液透析过滤装置',
      value: 25,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: '透析装置',
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

export default Form14;

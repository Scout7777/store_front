import { Pie } from '@ant-design/charts';
// AgeOfPatients
const Form18 = () => {
  const data = [
    {
      血液透析模式: 'HD',
      value: 27,
    },
    {
      血液透析模式: 'HDF',
      value: 25,
    },
    {
      血液透析模式: 'HFD',
      value: 18,
    },
    {
      血液透析模式: 'HP',
      value: 15,
    },
    {
      血液透析模式: 'CRRT',
      value: 10,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: '血液透析模式',
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

export default Form18;

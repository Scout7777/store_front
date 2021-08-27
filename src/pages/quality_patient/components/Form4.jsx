import { Pie } from '@ant-design/charts';
// AgeOfPatients
const Form4 = () => {
  const data = [
    {
      原发病类型: '原发性肾小球疾病',
      value: 2,
    },
    {
      原发病类型: '继发性肾小球疾病',
      value: 25,
    },
    {
      原发病类型: '遗传性及先天性疾病',
      value: 18,
    },
    {
      原发病类型: '肾小管间质疾病',
      value: 15,
    },
    {
      原发病类型: '药物性肾损害',
      value: 10,
    },
    {
      原发病类型: '泌尿系肿瘤',
      value: 12,
    },
    {
      原发病类型: '泌尿系感染和结实',
      value: 15,
    },
    {
      原发病类型: '肾脏切除术后',
      value: 10,
    },
    {
      原发病类型: '原发病不明确',
      value: 12,
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

export default Form4;

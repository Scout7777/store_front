// PrevalenceOfChronicComplication
import { Bar } from '@ant-design/charts';

const Form3 = () => {
  const data = [
    {
      key: '乙肝',
      value: 0.22,
    },
    {
      key: '丙肝',
      value: 0.12,
    },
    {
      key: '梅毒',
      value: 0.21,
    },
    {
      key: '艾滋',
      value: 0.34,
    },
  ];
  const config = {
    data,
    xField: 'value',
    yField: 'key',
    seriesField: 'key',
    legend: { position: 'top-left' },
    label: {
      position: 'middle',
      layout: [{ type: 'value' }],
    },
  };
  return <Bar {...config} />;
};

export default Form3;

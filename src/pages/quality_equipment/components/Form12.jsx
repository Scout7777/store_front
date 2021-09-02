// PrevalenceOfChronicComplication
import { Bar } from '@ant-design/charts';

const Form10 = () => {
  const data = [
    {
      key: '2班床位使用率',
      value: 0.25,
    },
    {
      key: '3班床位使用率',
      value: 0.75,
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

export default Form10;

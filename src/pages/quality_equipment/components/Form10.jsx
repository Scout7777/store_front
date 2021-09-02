// PrevalenceOfChronicComplication
import { Bar } from '@ant-design/charts';

const Form10 = () => {
  const data = [
    {
      key: '实际/核准开放床位数比例',
      value: 0.25,
    },
  ];
  const config = {
    data,
    xField: 'value',
    yField: 'key',
    seriesField: 'key',
    legend: { position: 'top-left' },
    barWidthRatio: '0.3',
    label: {
      position: 'middle',
      layout: [{ type: 'value' }],
    },
  };
  return <Bar {...config} />;
};

export default Form10;

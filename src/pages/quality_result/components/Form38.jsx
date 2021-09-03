// PrevalenceOfChronicComplication
import { Bar } from '@ant-design/charts';

const Form3 = () => {
  const data = [
    {
      key: '维持性血液透析患者年住院率',
      value: 0.22,
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

export default Form3;

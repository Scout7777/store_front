// PrevalenceOfChronicComplication
import { Bar } from '@ant-design/charts';

const Form10 = () => {
  const data = [
    {
      床位: '实际/核准开放床位数比例',
      value: 0.25,
    },
  ];
  const config = {
    data,
    xField: 'value',
    yField: '床位',
    seriesField: '床位',
    legend: { position: 'top-left' },
  };
  return <Bar {...config} />;
};

export default Form10;

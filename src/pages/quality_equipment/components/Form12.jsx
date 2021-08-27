// PrevalenceOfChronicComplication
import { Bar } from '@ant-design/charts';

const Form12 = () => {
  const data = [
    {
      核准开放床位: '开放2班床位',
      使用率: 0.31,
    },
    {
      核准开放床位: '开放3班床位',
      使用率: 0.42,
    },
  ];
  const config = {
    data,
    xField: '使用率',
    yField: '核准开放床位',
    seriesField: '核准开放床位',
    legend: { position: 'top-left' },
  };
  return <Bar {...config} />;
};

export default Form12;

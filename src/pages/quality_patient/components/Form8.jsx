// PrevalenceOfChronicComplication
import { Bar } from '@ant-design/charts';

const Form8 = () => {
  const data = [
    {
      统计数: '平均数',
      value: 5,
    },
    {
      统计数: '中位数',
      value: 3,
    },
    {
      统计数: '标准差',
      value: 0.5,
    },
  ];
  const config = {
    data,
    xField: 'value',
    yField: '统计数',
    seriesField: '统计数',
    legend: { position: 'top-left' },
  };
  return <Bar {...config} />;
};

export default Form8;

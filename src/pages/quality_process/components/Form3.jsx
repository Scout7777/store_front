import { Bar } from '@ant-design/charts';

const Form3 = () => {
  const data = [
    {
      year: 'A区',
      value: '20%',
    },
    {
      year: 'B区',
      value: '50%',
    },
    {
      year: 'C区',
      value: '60%',
    },
    {
      year: 'D区',
      value: '70%',
    },
    {
      year: 'E区',
      value: '90%',
    },
  ];
  const config = {
    data,
    xField: 'value',
    yField: 'year',
    seriesField: 'year',
    legend: { position: 'top-left' },
  };
  return <Bar {...config} />;
};

export default Form3;

import { Line } from '@ant-design/charts';

const DemoLine = () => {
  const data = [
    {
      key: '8.11',
      value: 0.12,
    },
    {
      key: '8.12',
      value: 0.85,
    },
    {
      key: '8.13',
      value: 0.23,
    },
    {
      key: '8.14',
      value: 0.77,
    },
    {
      key: '8.15',
      value: 0.55,
    },
  ];
  const config = {
    data,
    xField: 'key',
    yField: 'value',
    autoFit: true,

    annotations: [
      {
        type: 'regionFilter',
        start: ['min', '0.65'],
        end: ['max', 'max'],
        color: '#F4664A',
      },
      {
        type: 'text',
        position: ['min', '0.65'],
        content: 'URR高于65%',
        offsetY: -4,
        style: { textBaseline: 'bottom' },
      },
      {
        type: 'line',
        start: ['min', '0.65'],
        end: ['max', '0.65'],
        style: {
          stroke: '#F4664A',
          lineDash: [2, 2],
        },
      },
    ],
  };
  return <Line {...config} />;
};

export default DemoLine;

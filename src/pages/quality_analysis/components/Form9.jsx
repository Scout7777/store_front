import React from 'react';
import { Line } from '@ant-design/charts';

const DemoLine = () => {
  const data = [
    {
      key: '8.11',
      value: 1.3,
    },
    {
      key: '8.12',
      value: 1.5,
    },
    {
      key: '8.13',
      value: 0.5,
    },
    {
      key: '8.14',
      value: 0.18,
    },
    {
      key: '8.15',
      value: 0.99,
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
        start: ['min', '1.2'],
        end: ['max', 'max'],
        color: '#F4664A',
      },
      {
        type: 'text',
        position: ['min', '1.2'],
        content: 'Kt/V（spKt/V）大于1.2',
        offsetY: -4,
        style: { textBaseline: 'bottom' },
      },
      {
        type: 'line',
        start: ['min', '1.2'],
        end: ['max', '1.2'],
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

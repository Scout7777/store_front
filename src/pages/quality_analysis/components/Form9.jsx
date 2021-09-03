import React from 'react';
import { Line } from '@ant-design/charts';

const DemoLine = () => {
  const data = [
    {
      key: '8.11',
      value: 8,
      lable: 'kt/V',
    },
    {
      key: '8.11',
      value: 9,
      lable: 'URR',
    },
    {
      key: '8.12',
      value: 11,
      lable: 'URR',
    },
    {
      key: '8.12',
      value: 15,
      lable: 'kt/V',
    },
    {
      key: '8.13',
      value: 45,
      lable: 'URR',
    },
    {
      key: '8.13',
      value: 12,
      lable: 'kt/V',
    },
    {
      key: '8.14',
      value: 47,
      lable: 'URR',
    },
    {
      key: '8.14',
      value: 8,
      lable: 'kt/V',
    },
    {
      key: '8.15',
      value: 48,
      lable: 'URR',
    },
    {
      key: '8.15',
      value: 9,
      lable: 'kt/V',
    },
  ];
  const config = {
    data,
    xField: 'key',
    yField: 'value',
    seriesField: 'lable',
    label: {},
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    tooltip: { showMarkers: false },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red',
        },
      },
    },
    interactions: [{ type: 'marker-active' }],
  };
  return <Line {...config} />;
};

export default DemoLine;

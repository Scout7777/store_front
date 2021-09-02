import React from 'react';
import { Line } from '@ant-design/charts';

const DemoLine = () => {
  const data = [
    {
      key: '1',
      value: 81,
    },
    {
      key: '2',
      value: 91,
    },
    {
      key: '3',
      value: 112,
    },
    {
      key: '4',
      value: 151,
    },
    {
      key: '5',
      value: 145,
    },
    {
      key: '6',
      value: 112,
    },
  ];
  const config = {
    data,
    xField: 'key',
    yField: 'value',
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

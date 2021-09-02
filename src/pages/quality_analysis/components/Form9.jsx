import React from 'react';
import { Line } from '@ant-design/charts';

const DemoLine = () => {
  const data = [
    {
      key: '1992',
      value: 8,
      lable: 'kt/V',
    },
    {
      key: '1992',
      value: 9,
      lable: 'URR',
    },
    {
      key: '1993',
      value: 11,
      lable: 'URR',
    },
    {
      key: '1993',
      value: 15,
      lable: 'kt/V',
    },
    {
      key: '1998',
      value: 45,
      lable: 'URR',
    },
    {
      key: '1998',
      value: 12,
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

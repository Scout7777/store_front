import React from 'react';
import { Line } from '@ant-design/charts';

const DemoLine = () => {
  const data = [
    {
      key: '8.11',
      value: 120,
      lable: '透前',
    },
    {
      key: '8.11',
      value: 144,
      lable: '透中',
    },
    {
      key: '8.11',
      value: 93,
      lable: '透后',
    },

    {
      key: '8.12',
      value: 87,
      lable: '透前',
    },
    {
      key: '8.12',
      value: 91,
      lable: '透中',
    },
    {
      key: '8.12',
      value: 90,
      lable: '透后',
    },

    {
      key: '8.13',
      value: 88,
      lable: '透前',
    },
    {
      key: '8.13',
      value: 77,
      lable: '透中',
    },
    {
      key: '8.13',
      value: 80,
      lable: '透后',
    },

    {
      key: '8.14',
      value: 108,
      lable: '透前',
    },
    {
      key: '8.14',
      value: 95,
      lable: '透中',
    },
    {
      key: '8.14',
      value: 69,
      lable: '透后',
    },

    {
      key: '8.15',
      value: 110,
      lable: '透前',
    },
    {
      key: '8.15',
      value: 91,
      lable: '透中',
    },
    {
      key: '8.15',
      value: 92,
      lable: '透后',
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
  };
  return <Line {...config} />;
};

export default DemoLine;

import React from 'react';
import { Line } from '@ant-design/charts';

const DemoArea = () => {
  const data = [
    { lable: '干体重', key: 8.11, value: 70 },
    { lable: '透前体重', key: 8.11, value: 81 },
    { lable: '透后体重', key: 8.11, value: 60 },
    { lable: '干体重', key: 8.12, value: 55 },
    { lable: '透前体重', key: 8.12, value: 79 },
    { lable: '透后体重', key: 8.12, value: 59 },
    { lable: '干体重', key: 8.13, value: 66 },
    { lable: '透前体重', key: 8.13, value: 78 },
    { lable: '透后体重', key: 8.13, value: 58 },
    { lable: '干体重', key: 8.14, value: 45 },
    { lable: '透前体重', key: 8.14, value: 80 },
    { lable: '透后体重', key: 8.14, value: 57 },
    { lable: '干体重', key: 8.15, value: 65 },
    { lable: '透前体重', key: 8.15, value: 77 },
    { lable: '透后体重', key: 8.15, value: 60 },
  ];

  const config = {
    data,
    xField: 'key',
    yField: 'value',
    seriesField: 'lable',
    smooth: true,
    color: ['#7FFFD4', '#1979C9', '#FAA219'],
  };
  return <Line {...config} />;
};

export default DemoArea;

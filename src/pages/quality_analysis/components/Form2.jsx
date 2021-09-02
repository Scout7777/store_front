import React from 'react';
import { Area } from '@ant-design/charts';

const DemoArea = () => {
  const data = [
    { lable: '干体重', key: 8.11, value: 102 },
    { lable: '透前体重', key: 8.11, value: 199 },
    { lable: '透后体重', key: 8.11, value: 120 },
    { lable: '干体重', key: 8.12, value: 132 },
    { lable: '透前体重', key: 8.12, value: 205 },
    { lable: '透后体重', key: 8.12, value: 99 },
    { lable: '干体重', key: 8.13, value: 135 },
    { lable: '透前体重', key: 8.13, value: 188 },
    { lable: '透后体重', key: 8.13, value: 118 },
    { lable: '干体重', key: 8.14, value: 123 },
    { lable: '透前体重', key: 8.14, value: 200 },
    { lable: '透后体重', key: 8.14, value: 102 },
    { lable: '干体重', key: 8.15, value: 111 },
    { lable: '透前体重', key: 8.15, value: 200 },
    { lable: '透后体重', key: 8.15, value: 131 },
  ];

  const config = {
    data,
    xField: 'key',
    yField: 'value',
    seriesField: 'lable',
  };
  return <Area {...config} />;
};

export default DemoArea;

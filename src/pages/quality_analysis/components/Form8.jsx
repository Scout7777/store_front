import React from 'react';
import { Area } from '@ant-design/charts';

const DemoArea = () => {
  const data = [
    { lable: '设定', key: 8.11, value: 125 },
    { lable: '实际', key: 8.11, value: 118 },
    { lable: '设定', key: 8.12, value: 123 },
    { lable: '实际', key: 8.12, value: 144 },
    { lable: '设定', key: 8.13, value: 156 },
    { lable: '实际', key: 8.13, value: 121 },
    { lable: '设定', key: 8.14, value: 166 },
    { lable: '实际', key: 8.14, value: 123 },
    { lable: '设定', key: 8.15, value: 166 },
    { lable: '实际', key: 8.15, value: 128 },
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

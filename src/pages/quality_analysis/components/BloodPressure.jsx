import React from 'react';
import { Box } from '@ant-design/charts';

const DemoBox = () => {
  const data = [
    {
      Species: '收缩压SBP',
      key: '8.11',
      value: 140,
      _bin: [130, 135, 144, 150, 157],
    },
    {
      Species: '收缩压SBP',
      key: '8.12',
      value: 141,
      _bin: [130, 135, 140, 143, 153],
    },
    {
      Species: '收缩压SBP',
      key: '8.13',
      value: 142,
      _bin: [130, 135, 144, 146, 150],
    },
    {
      Species: '收缩压SBP',
      key: '8.14',
      value: 144,
      _bin: [130, 135, 139, 143, 150],
    },
    {
      Species: '收缩压SBP',
      key: '8.15',
      value: 140,
      _bin: [130, 135, 140, 143, 150],
    },
    {
      Species: '舒张压DBP',
      key: '8.11',
      value: 74,
      _bin: [58, 63, 70, 78, 84],
    },
    {
      Species: '舒张压DBP',
      key: '8.12',
      value: 75,
      _bin: [61, 63, 72, 75, 79],
    },
    {
      Species: '舒张压DBP',
      key: '8.13',
      value: 76,
      _bin: [55, 63, 70, 76, 80],
    },
    {
      Species: '舒张压DBP',
      key: '8.14',
      value: 77,
      _bin: [54, 63, 68, 74, 82],
    },
    {
      Species: '舒张压DBP',
      key: '8.15',
      value: 78,
      _bin: [60, 63, 70, 75, 83],
    },
  ];
  const config = {
    data,
    xField: 'key',
    yField: '_bin',
    groupField: 'Species',
  };
  return <Box {...config} />;
};

export default DemoBox;

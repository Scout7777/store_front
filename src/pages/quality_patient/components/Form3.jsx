// PrevalenceOfChronicComplication
import { Bar } from '@ant-design/charts';

const Form3 = () => {
  const data = [
    {
      并发症类型: '肾性贫血',
      患病率: 0.22,
    },
    {
      并发症类型: '骨矿物质代谢紊乱',
      患病率: 0.12,
    },
    {
      并发症类型: '营养不良',
      患病率: 0.21,
    },
    {
      并发症类型: '淀粉样变性',
      患病率: 0.34,
    },
    {
      并发症类型: '呼吸系统',
      患病率: 0.17,
    },
    {
      并发症类型: '心血管系统',
      患病率: 0.22,
    },
    {
      并发症类型: '神经系统',
      患病率: 0.26,
    },
    {
      并发症类型: '消化系统',
      患病率: 0.18,
    },
    {
      并发症类型: '皮肤瘙痒',
      患病率: 0.24,
    },
    {
      并发症类型: '不安腿',
      患病率: 0.11,
    },
    {
      并发症类型: '其他',
      患病率: 0.05,
    },
  ];
  const config = {
    data,
    xField: '患病率',
    yField: '并发症类型',
    seriesField: '并发症类型',
    legend: { position: 'top-left' },
    label: {
      position: 'middle',
      layout: [{ type: '患病率' }],
    },
  };
  return <Bar {...config} />;
};

export default Form3;

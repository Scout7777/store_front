import { Table } from 'antd';

const columns = [
  {
    title: '并发症类型',
    dataIndex: 'type',
    width: '20%',
  },
  {
    title: '发生次数',
    dataIndex: 'number',
    width: '20%',
  },
  {
    title: '发生频率',
    dataIndex: 'frequency',
    width: '20%',
  },
  {
    title: '上次发生时间',
    dataIndex: 'lastTime',
    width: '20%',
  },
  {
    title: '下次发生预测',
    dataIndex: 'nextTime',
    width: '20%',
  },
];

const data = [
  {
    type: '透析中低血压',
    number: '5次',
    frequency: '10%',
    lastTime: '8.11',
    nextTime: '是',
  },
  {
    type: '肌肉痉挛',
    number: '5次',
    frequency: '10%',
    lastTime: '8.11',
    nextTime: '否',
  },
  {
    type: '恶心和呕吐',
    number: '5次',
    frequency: '10%',
    lastTime: '8.11',
    nextTime: '是',
  },
  {
    type: '头痛',
    number: '5次',
    frequency: '10%',
    lastTime: '8.11',
    nextTime: '否',
  },
  {
    type: '胸痛和背痛',
    number: '5次',
    frequency: '10%',
    lastTime: '8.11',
    nextTime: '是',
  },
  {
    type: '皮肤瘙痒',
    number: '5次',
    frequency: '10%',
    lastTime: '8.11',
    nextTime: '否',
  },
  {
    type: '失衡综合征',
    number: '5次',
    frequency: '10%',
    lastTime: '8.11',
    nextTime: '是',
  },
  {
    type: '透析器反应',
    number: '5次',
    frequency: '10%',
    lastTime: '8.11',
    nextTime: '是',
  },
  {
    type: '心律失常',
    number: '5次',
    frequency: '10%',
    lastTime: '8.11',
    nextTime: '是',
  },
  {
    type: '溶血',
    number: '5次',
    frequency: '10%',
    lastTime: '8.11',
    nextTime: '是',
  },
  {
    type: '空气栓塞',
    number: '5次',
    frequency: '10%',
    lastTime: '8.11',
    nextTime: '是',
  },
  {
    type: '发热',
    number: '5次',
    frequency: '10%',
    lastTime: '8.11',
    nextTime: '是',
  },
  {
    type: '透析器破膜',
    number: '5次',
    frequency: '10%',
    lastTime: '8.11',
    nextTime: '是',
  },
  {
    type: '体外循环凝血',
    number: '5次',
    frequency: '10%',
    lastTime: '8.11',
    nextTime: '否',
  },
];
export default () => {
  return <Table columns={columns} dataSource={data} title={() => '历史透析次数：50'} />;
};

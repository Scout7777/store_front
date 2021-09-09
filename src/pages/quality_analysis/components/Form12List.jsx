import { Table } from 'antd';

const columns = [
  {
    title: '并发症类型',
    dataIndex: 'type',
    width: '33%',
  },
  {
    title: '确诊日期',
    dataIndex: 'time',
    width: '33%',
  },
  {
    title: '采取治疗',
    dataIndex: 'action',
    width: '33%',
  },
];

const data = [
  {
    type: '心脑血管并发症',
    time: '8.11',
    action: '否',
  },
  {
    type: '贫血',
    time: '9.11',
    action: '否',
  },
  {
    type: '骨矿物质代谢紊乱',
    time: '8.21',
    action: '否',
  },
  {
    type: '高血压 ',
    time: '8.11',
    action: '是',
  },
  {
    type: '感染 ',
    time: '10.11',
    action: '是',
  },
  {
    type: '营养不良 ',
    time: '11.11',
    action: '是',
  },
];
export default () => {
  return <Table columns={columns} dataSource={data} title={() => '历史透析次数：50'} />;
};

import { Table } from 'antd';

const columns = [
  {
    title: '日期',
    dataIndex: 'date',
    width: '25%',
  },
  {
    title: '种类',
    dataIndex: 'type',
    width: '25%',
  },
  {
    title: '剂量',
    dataIndex: 'dosis',
    width: '25%',
  },
  {
    title: '问题',
    dataIndex: 'problem',
    width: '25%',
  },
];

const data = [
  {
    date: '8.11',
    type: 15,
    dosis: '好',
    problem: 11,
  },
  {
    date: '8.12',
    type: 11,
    dosis: '好',
    problem: 11,
  },
  {
    date: '8.13',
    type: 14,
    dosis: '好',
    problem: 11,
  },
  {
    date: '8.14',
    type: 6,
    dosis: '好',
    problem: 11,
  },
  {
    date: '8.15',
    type: 7,
    dosis: '好',
    problem: 11,
  },
];
export default () => {
  return <Table columns={columns} dataSource={data} />;
};

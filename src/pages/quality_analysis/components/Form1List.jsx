import { Table } from 'antd';

const columns = [
  {
    title: '日期',
    dataIndex: 'date',
    width: '25%',
  },
  {
    title: '入室方式',
    dataIndex: 'way',
    width: '25%',
  },
  {
    title: '神志',
    dataIndex: 'state',
    width: '25%',
  },
  {
    title: '食欲',
    dataIndex: 'appetitive',
    width: '25%',
  },
];

const data = [
  {
    date: '8.11',
    way: 15,
    state: '好',
    appetitive: 11,
  },
  {
    date: '8.12',
    way: 11,
    state: '好',
    appetitive: 11,
  },
  {
    date: '8.13',
    way: 14,
    state: '好',
    appetitive: 11,
  },
  {
    date: '8.14',
    way: 6,
    state: '好',
    appetitive: 11,
  },
  {
    date: '8.15',
    way: 7,
    state: '好',
    appetitive: 11,
  },
];
export default () => {
  return <Table columns={columns} dataSource={data} />;
};

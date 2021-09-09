import { Table } from 'antd';

const columns = [
  {
    title: '日期',
    dataIndex: 'date',
  },
  {
    title: '透前脉搏',
    dataIndex: 'before',
  },
  {
    title: '透中脉搏',
    dataIndex: 'in',
  },
  {
    title: '透后脉搏',
    dataIndex: 'after',
  },
];

const data = [
  {
    date: '8.11',
    before: '120',
    in: '144',
    after: '93',
  },
  {
    date: '8.12',
    before: '120',
    in: '144',
    after: '93',
  },
  {
    date: '8.13',
    before: '120',
    in: '144',
    after: '93',
  },
  {
    date: '8.14',
    before: '120',
    in: '144',
    after: '93',
  },
  {
    date: '8.15',
    before: '120',
    in: '144',
    after: '93',
  },
];
export default () => {
  return <Table columns={columns} dataSource={data} />;
};

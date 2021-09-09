import { Table } from 'antd';

const columns = [
  {
    title: '日期',
    dataIndex: 'date',
  },
  {
    title: '评估',
    dataIndex: 'judge',
  },
];

const data = [
  {
    date: '8.11',
    judge: '合格',
  },
  {
    date: '8.12',
    judge: '合格',
  },
  {
    date: '8.13',
    judge: '不合格',
  },
  {
    date: '8.14',
    judge: '合格',
  },
  {
    date: '8.15',
    judge: '合格',
  },
];
export default () => {
  return <Table columns={columns} dataSource={data} />;
};

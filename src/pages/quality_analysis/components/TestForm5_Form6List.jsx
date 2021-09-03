import { Table } from 'antd';

const columns = [
  {
    title: '应完成次数',
    dataIndex: 'plan',
    width: '33%',
  },
  {
    title: '已完成次数',
    dataIndex: 'reality',
    width: '33%',
  },
  {
    title: '合格次数',
    dataIndex: 'accept',
    width: '33%',
  },
];

const data = [
  {
    plan: 50,
    reality: 20,
    accept: 10,
  },
];
export default () => {
  return <Table columns={columns} dataSource={data} />;
};

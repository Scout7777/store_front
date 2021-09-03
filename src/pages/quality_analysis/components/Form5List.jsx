import { Table } from 'antd';

const columns = [
  {
    title: '日期',
    dataIndex: 'date',
    width: '20%',
  },
  {
    title: '透析方式',
    dataIndex: 'way',
    width: '40%',
  },
  {
    title: '透析器',
    dataIndex: 'equipment',
    width: '40%',
  },
];

const data = [
  {
    date: '8.11',
    way: 15,
    equipment: 11,
  },
  {
    date: '8.12',
    way: 11,
    equipment: 11,
  },
  {
    date: '8.13',
    way: 14,
    equipment: 12,
  },
  {
    date: '8.14',
    way: 6,
    equipment: 9,
  },
  {
    date: '8.15',
    way: 7,
    equipment: 8,
  },
];
export default () => {
  return <Table columns={columns} dataSource={data} />;
};

import { Table } from 'antd';

const columns = [
  {
    title: '日期',
    dataIndex: 'date',
    width: '20%',
  },
  {
    title: '透前体重与干体重差值',
    dataIndex: 'BeforeMinusDry',
    width: '40%',
  },
  {
    title: '干体重与透后体重差值',
    dataIndex: 'DryMinusAfter',
    width: '40%',
  },
];

const data = [
  {
    date: '8.11',
    BeforeMinusDry: 15,
    DryMinusAfter: 11,
  },
  {
    date: '8.12',
    BeforeMinusDry: 11,
    DryMinusAfter: 11,
  },
  {
    date: '8.13',
    BeforeMinusDry: 14,
    DryMinusAfter: 12,
  },
  {
    date: '8.14',
    BeforeMinusDry: 6,
    DryMinusAfter: 9,
  },
  {
    date: '8.15',
    BeforeMinusDry: 7,
    DryMinusAfter: 8,
  },
];
export default () => {
  return <Table columns={columns} dataSource={data} />;
};

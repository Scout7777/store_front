import { Table } from 'antd';

const columns = [
  {
    title: '日期',
    dataIndex: 'date',
    width: '20%',
  },
  {
    title: '（超滤量）设定与实际差值',
    dataIndex: 'PlanMinusReality',
    width: '80%',
  },
];

const data = [
  {
    date: '8.11',
    PlanMinusReality: 15,
  },
  {
    date: '8.12',
    PlanMinusReality: 11,
  },
  {
    date: '8.13',
    PlanMinusReality: 14,
  },
  {
    date: '8.14',
    PlanMinusReality: 6,
  },
  {
    date: '8.15',
    PlanMinusReality: 7,
  },
];
export default () => {
  return <Table columns={columns} dataSource={data} />;
};

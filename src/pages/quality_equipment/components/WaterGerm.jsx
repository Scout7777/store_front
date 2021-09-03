import { Table } from 'antd';

const columns = [
  {
    title: '检测时间',
    dataIndex: 'date',
    width: '33%',
  },
  {
    title: '检测项目',
    dataIndex: 'project',
    width: '33%',
  },
  {
    title: '是否合格',
    dataIndex: 'qualified',
    width: '33%',
  },
];

const data = [
  {
    date: '8.11',
    project: 15,
    qualified: '是',
  },
  {
    date: '8.12',
    project: 15,
    qualified: '是',
  },
  {
    date: '8.13',
    project: 15,
    qualified: '是',
  },
  {
    date: '8.14',
    project: 15,
    qualified: '是',
  },
  {
    date: '8.15',
    project: 15,
    qualified: '是',
  },
];
export default () => {
  return <Table columns={columns} dataSource={data} />;
};

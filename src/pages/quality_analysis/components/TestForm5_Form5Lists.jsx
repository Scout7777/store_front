import { Table } from 'antd';

const columns = [
  {
    title: '日期',
    dataIndex: 'date',
    width: '20%',
  },
  {
    title: '检查项目',
    dataIndex: 'project',
    width: '20%',
  },
  {
    title: '结果',
    dataIndex: 'result',
    width: '20%',
  },
  {
    title: '参考区间',
    dataIndex: 'section',
    width: '20%',
  },
  {
    title: '单位',
    dataIndex: 'unit',
    width: '20%',
  },
];

const data = [
  {
    date: '8.11',
    project: 'kk',
    result: '11',
    section: '8~12',
    unit: '毫升',
  },
  {
    date: '8.12',
    project: 'kk',
    result: '11',
    section: '8~12',
    unit: '毫升',
  },
  {
    date: '8.13',
    project: 'kk',
    result: '11',
    section: '8~12',
    unit: '毫升',
  },
  {
    date: '8.14',
    project: 'kk',
    result: '11',
    section: '8~12',
    unit: '毫升',
  },
  {
    date: '8.15',
    project: 'kk',
    result: '11',
    section: '8~12',
    unit: '毫升',
  },
];
export default () => {
  return <Table columns={columns} dataSource={data} />;
};

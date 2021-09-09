import { Table } from 'antd';

const columns = [
  {
    title: '日期',
    dataIndex: 'date',
  },
  {
    title: '时间',
    dataIndex: 'time',
  },
  {
    title: '收缩压SBP',
    dataIndex: 'SBP',
  },
  {
    title: '舒张压DBP',
    dataIndex: 'DBP',
  },
];

const data = [
  {
    date: '8.11',
    time: '10:43',
    SBP: '144',
    DBP: '71',
  },
  {
    date: '',
    time: '12:43',
    SBP: '139',
    DBP: '72',
  },
  {
    date: '',
    time: '14:43',
    SBP: '150',
    DBP: '69',
  },
  {
    date: '',
    time: '16:43',
    SBP: '144',
    DBP: '75',
  },
  {
    date: '',
    time: '18:43',
    SBP: '143',
    DBP: '74',
  },

  {
    date: '8.12',
    time: '10:43',
    SBP: '144',
    DBP: '71',
  },
  {
    date: '',
    time: '12:43',
    SBP: '139',
    DBP: '72',
  },
  {
    date: '',
    time: '14:43',
    SBP: '150',
    DBP: '69',
  },
  {
    date: '',
    time: '16:43',
    SBP: '144',
    DBP: '75',
  },
  {
    date: '',
    time: '18:43',
    SBP: '143',
    DBP: '74',
  },
  {
    date: '8.13',
    time: '10:43',
    SBP: '144',
    DBP: '71',
  },
  {
    date: '',
    time: '12:43',
    SBP: '139',
    DBP: '72',
  },
  {
    date: '',
    time: '14:43',
    SBP: '150',
    DBP: '69',
  },
  {
    date: '',
    time: '16:43',
    SBP: '144',
    DBP: '75',
  },
  {
    date: '',
    time: '18:43',
    SBP: '143',
    DBP: '74',
  },
  {
    date: '8.14',
    time: '10:43',
    SBP: '144',
    DBP: '71',
  },
  {
    date: '',
    time: '12:43',
    SBP: '139',
    DBP: '72',
  },
  {
    date: '',
    time: '14:43',
    SBP: '150',
    DBP: '69',
  },
  {
    date: '',
    time: '16:43',
    SBP: '144',
    DBP: '75',
  },
  {
    date: '',
    time: '18:43',
    SBP: '143',
    DBP: '74',
  },
  {
    date: '8.15',
    time: '10:43',
    SBP: '144',
    DBP: '71',
  },
  {
    date: '',
    time: '12:43',
    SBP: '139',
    DBP: '72',
  },
  {
    date: '',
    time: '14:43',
    SBP: '150',
    DBP: '69',
  },
  {
    date: '',
    time: '16:43',
    SBP: '144',
    DBP: '75',
  },
  {
    date: '',
    time: '18:43',
    SBP: '143',
    DBP: '74',
  },
];
export default () => {
  return <Table columns={columns} dataSource={data} />;
};

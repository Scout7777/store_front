import { Table } from 'antd';

const columns = [
  {
    title: '学历',
    dataIndex: 'educationBackground',
    width: '33%',
  },
  {
    title: '人数',
    dataIndex: 'number',
    width: '33%',
  },
  {
    title: '比例',
    dataIndex: 'potion',
    width: '33%',
  },
];

const data = [
  {
    educationBackground: '中专',
    number: 8,
    potion: '8%',
  },
  {
    educationBackground: '大专',
    number: 5,
    potion: '5%',
  },
  {
    educationBackground: '本科',
    number: 5,
    potion: '5%',
  },
  {
    educationBackground: '研究生（硕士）',
    number: 80,
    potion: '80%',
  },
  {
    educationBackground: '研究生（博士）',
    number: 2,
    potion: '2%',
  },
];
export default () => {
  return <Table columns={columns} dataSource={data} />;
};

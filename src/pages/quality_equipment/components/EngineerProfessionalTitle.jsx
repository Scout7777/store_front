import { Table } from 'antd';

const columns = [
  {
    title: '职称',
    dataIndex: 'professionalTitle',
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
    professionalTitle: '助理工程师（初级）',
    number: 8,
    potion: '8%',
  },
  {
    professionalTitle: '工程师（中级）',
    number: 5,
    potion: '5%',
  },
  {
    professionalTitle: '高级工程师（副高级）',
    number: 5,
    potion: '5%',
  },
  {
    professionalTitle: '研究员（正高级）',
    number: 2,
    potion: '2%',
  },
  {
    professionalTitle: '教授级高级工程师（正高级）',
    number: 2,
    potion: '2%',
  },
];
export default () => {
  return <Table columns={columns} dataSource={data} />;
};

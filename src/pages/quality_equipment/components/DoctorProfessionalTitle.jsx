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
    professionalTitle: '医生（初级）',
    number: 8,
    potion: '8%',
  },
  {
    professionalTitle: '住院医师（初级）',
    number: 5,
    potion: '5%',
  },
  {
    professionalTitle: '主治医师（中级）',
    number: 5,
    potion: '5%',
  },
  {
    professionalTitle: '副主任医师（副高级）',
    number: 80,
    potion: '80%',
  },
  {
    professionalTitle: '主任医师（正高级）',
    number: 2,
    potion: '2%',
  },
];
export default () => {
  return <Table columns={columns} dataSource={data} />;
};

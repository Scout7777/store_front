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
    professionalTitle: '护士（初级）',
    number: 8,
    potion: '8%',
  },
  {
    professionalTitle: '护师（初级）',
    number: 5,
    potion: '5%',
  },
  {
    professionalTitle: '主管护师（中级）',
    number: 5,
    potion: '5%',
  },
  {
    professionalTitle: '副主任护师（副高级）',
    number: 80,
    potion: '80%',
  },
  {
    professionalTitle: '主任护师（正高级）',
    number: 2,
    potion: '2%',
  },
];
export default () => {
  return <Table columns={columns} dataSource={data} />;
};

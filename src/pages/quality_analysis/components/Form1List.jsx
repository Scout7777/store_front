import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '22px' }}
      labelStyle={{ fontSize: '22px', width: '22%' }}
      column={1}
    >
      <Descriptions.Item label="入室方式">30</Descriptions.Item>
      <Descriptions.Item label="神志">12</Descriptions.Item>
      <Descriptions.Item label="食欲">30</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

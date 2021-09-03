import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '22px' }}
      labelStyle={{ fontSize: '22px', width: '22%' }}
      column={2}
    >
      <Descriptions.Item label="应完成患者">30</Descriptions.Item>
      <Descriptions.Item label="已完成患者">12</Descriptions.Item>
      <Descriptions.Item label="应完成次数">50</Descriptions.Item>
      <Descriptions.Item label="已完成次数">24</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

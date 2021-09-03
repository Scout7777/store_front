import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '22px' }}
      labelStyle={{ fontSize: '22px', width: '22%' }}
      column={2}
    >
      <Descriptions.Item label="总患者">30</Descriptions.Item>
      <Descriptions.Item label="高血压发生患者">12</Descriptions.Item>
      <Descriptions.Item label="总次数">50</Descriptions.Item>
      <Descriptions.Item label="高血压发生次数">24</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

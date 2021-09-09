import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '16px' }}
      labelStyle={{ fontSize: '16px' }}
      layout={'vertical'}
      column={20}
    >
      <Descriptions.Item label="同期血液透析患者的总人数" span={40}>
        30
      </Descriptions.Item>
      <Descriptions.Item label="自体动静脉内瘘">12</Descriptions.Item>
      <Descriptions.Item label="移植物内瘘">30</Descriptions.Item>
      <Descriptions.Item label="中心静脉导管">12</Descriptions.Item>
      <Descriptions.Item label="其他类">30</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

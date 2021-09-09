import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '16px' }}
      labelStyle={{ fontSize: '16px' }}
      layout={'vertical'}
      column={2}
    >
      <Descriptions.Item label="同期使用动静脉内瘘的维持性血液透析的总患者日">30</Descriptions.Item>
      <Descriptions.Item label="维持性血液透析患者动静脉内瘘通畅的天数">12</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

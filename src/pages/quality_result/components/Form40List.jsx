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
      <Descriptions.Item label="同期血液透析患者的总人数">30</Descriptions.Item>
      <Descriptions.Item label="血液透析患者的死亡人数">1</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

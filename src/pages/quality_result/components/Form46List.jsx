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
      <Descriptions.Item label="同期血液透析患者使用透析导管的总天数">30</Descriptions.Item>
      <Descriptions.Item label=" 血液透析患者血液透析导管相关性感染总例次">12</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '16px' }}
      labelStyle={{ fontSize: '16px' }}
      layout={'vertical'}
      column={10}
    >
      <Descriptions.Item label="血透室（中心）透析治疗的例次">123</Descriptions.Item>
      <Descriptions.Item label="同期中心核准的血液透析床位数×12×周数">1234</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '16px' }}
      labelStyle={{ fontSize: '16px' }}
      layout={'vertical'}
      column={15}
    >
      <Descriptions.Item label="同期血透室（中心）血透患者的总死亡人数" span={40}>
        1
      </Descriptions.Item>
      <Descriptions.Item label="主要死因">0</Descriptions.Item>
      <Descriptions.Item label="心血管事件">0</Descriptions.Item>
      <Descriptions.Item label="脑血管事件">0</Descriptions.Item>
      <Descriptions.Item label="消化道出血等出血性疾病">0</Descriptions.Item>
      <Descriptions.Item label="其他">1</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

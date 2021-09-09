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
      <Descriptions.Item label="同期总退出人数" span={40}>
        0
      </Descriptions.Item>
      <Descriptions.Item label="死亡">0</Descriptions.Item>
      <Descriptions.Item label="肾移植">0</Descriptions.Item>
      <Descriptions.Item label="放弃治疗">0</Descriptions.Item>
      <Descriptions.Item label="转为腹透患者">0</Descriptions.Item>
      <Descriptions.Item label="好转脱离透析">0</Descriptions.Item>
      <Descriptions.Item label="其他">0</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

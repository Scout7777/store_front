import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '22px' }}
      labelStyle={{ fontSize: '22px', width: '22%' }}
      column={2}
    >
      <Descriptions.Item label="维持性血透析患者总住院数" span={4}>
        30
      </Descriptions.Item>
      <Descriptions.Item label="心血管疾病">12</Descriptions.Item>
      <Descriptions.Item label="脑血管疾病">30</Descriptions.Item>
      <Descriptions.Item label="肾性贫血">12</Descriptions.Item>
      <Descriptions.Item label="骨矿物质代谢紊乱">12</Descriptions.Item>
      <Descriptions.Item label="营养不良">12</Descriptions.Item>
      <Descriptions.Item label="感染（非血管通路）">30</Descriptions.Item>
      <Descriptions.Item label="血管通路并发症">12</Descriptions.Item>
      <Descriptions.Item label="肿瘤">12</Descriptions.Item>
      <Descriptions.Item label="其他">12</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

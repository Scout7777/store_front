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
      <Descriptions.Item label="血液透析患者中血源性传染病阴性转阳患者总数" span={40}>
        30
      </Descriptions.Item>
      <Descriptions.Item label="乙肝">12</Descriptions.Item>
      <Descriptions.Item label="丙肝">30</Descriptions.Item>
      <Descriptions.Item label="梅毒">12</Descriptions.Item>
      <Descriptions.Item label="艾滋病抗体">12</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

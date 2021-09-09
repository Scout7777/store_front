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
      <Descriptions.Item label="同期传染病总数" span={40}>
        100
      </Descriptions.Item>
      <Descriptions.Item label="乙肝HBV">21</Descriptions.Item>
      <Descriptions.Item label="丙肝HCV">37</Descriptions.Item>
      <Descriptions.Item label="梅毒检测状态代码RPR">12</Descriptions.Item>
      <Descriptions.Item label="艾滋病HIV">30</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

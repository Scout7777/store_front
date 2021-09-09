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
      <Descriptions.Item label="乙肝">30</Descriptions.Item>
      <Descriptions.Item label="丙肝">30</Descriptions.Item>
      <Descriptions.Item label="艾滋">30</Descriptions.Item>
      <Descriptions.Item label="梅毒">30</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

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
      <Descriptions.Item label="同期维持性血液透析患者总数">30</Descriptions.Item>
      <Descriptions.Item label="同一动静脉内瘘持续使用时间＞2年的维持性血液透析患者数:">
        12
      </Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

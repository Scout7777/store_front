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
      <Descriptions.Item label="区域总人口">100</Descriptions.Item>
      <Descriptions.Item label="区域总患者数">37</Descriptions.Item>
      <Descriptions.Item label="本医院透析人数">15</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

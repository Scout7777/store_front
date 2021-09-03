import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '22px' }}
      labelStyle={{ fontSize: '22px', width: '22%' }}
      column={1}
    >
      <Descriptions.Item label="区域内总人数">100</Descriptions.Item>
      <Descriptions.Item label="区域内总透析人数">37</Descriptions.Item>
      <Descriptions.Item label="本医院透析人数">15</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

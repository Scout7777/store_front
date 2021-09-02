import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '22px' }}
      labelStyle={{ fontSize: '22px', width: '22%' }}
      column={2}
    >
      <Descriptions.Item label="构成总人数" span={4}>
        300
      </Descriptions.Item>
      <Descriptions.Item label="20岁以下">5</Descriptions.Item>
      <Descriptions.Item label="20-40">12</Descriptions.Item>
      <Descriptions.Item label="40-60">24</Descriptions.Item>
      <Descriptions.Item label="60-80" s>
        50
      </Descriptions.Item>
      <Descriptions.Item label=" 80岁以上">9</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

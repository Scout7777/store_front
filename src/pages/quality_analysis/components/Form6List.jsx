import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '22px' }}
      labelStyle={{ fontSize: '22px', width: '22%' }}
      column={1}
    >
      <Descriptions.Item label="种类">30</Descriptions.Item>
      <Descriptions.Item label="剂量">30</Descriptions.Item>
      <Descriptions.Item label="问题">30</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '22px' }}
      labelStyle={{ fontSize: '22px', width: '22%' }}
      column={1}
    >
      <Descriptions.Item label="平均数">5</Descriptions.Item>
      <Descriptions.Item label="中位数">3</Descriptions.Item>
      <Descriptions.Item label="标准差">0.5</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

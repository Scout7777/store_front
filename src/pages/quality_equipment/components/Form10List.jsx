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
      <Descriptions.Item label="实际开放床位数">25</Descriptions.Item>
      <Descriptions.Item label="核准开放床位数">50</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

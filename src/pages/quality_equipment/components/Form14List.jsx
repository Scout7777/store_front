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
      <Descriptions.Item label="单种血液透析装置数量">134</Descriptions.Item>
      <Descriptions.Item label="透析以及过滤装置">462</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

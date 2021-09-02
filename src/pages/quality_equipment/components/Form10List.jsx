import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '22px' }}
      labelStyle={{ fontSize: '22px', width: '22%' }}
      column={1}
    >
      <Descriptions.Item label="实际开放床位数">76469</Descriptions.Item>
      <Descriptions.Item label="核准开放床位数">42893</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

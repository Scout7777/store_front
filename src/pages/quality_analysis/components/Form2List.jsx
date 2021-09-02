import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '22px' }}
      labelStyle={{ fontSize: '22px', width: '22%' }}
      column={2}
    >
      <Descriptions.Item label="透前体重与干体重差值">11</Descriptions.Item>
      <Descriptions.Item label="干体重与透后体重差值">2</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

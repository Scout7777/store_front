import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '22px' }}
      labelStyle={{ fontSize: '22px', width: '22%' }}
      column={1}
    >
      <Descriptions.Item label="（超滤量）设定与实际差值">30</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

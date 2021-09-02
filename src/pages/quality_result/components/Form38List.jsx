import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '22px' }}
      labelStyle={{ fontSize: '22px', width: '22%' }}
      column={2}
    >
      <Descriptions.Item label="同期维持性血液透析患者的患者年">30</Descriptions.Item>
      <Descriptions.Item label="维持性血液透析患者住院人次 ">12</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

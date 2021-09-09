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
      <Descriptions.Item label="同期总支付人数" span={40}>
        300
      </Descriptions.Item>
      <Descriptions.Item label="基本医保">75</Descriptions.Item>
      <Descriptions.Item label="新农合">46</Descriptions.Item>
      <Descriptions.Item label="自费医疗">34</Descriptions.Item>
      <Descriptions.Item label="公费医疗">87</Descriptions.Item>
      <Descriptions.Item label="商业保险">6</Descriptions.Item>
      <Descriptions.Item label="军队医疗">4</Descriptions.Item>
      <Descriptions.Item label="其他">48</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

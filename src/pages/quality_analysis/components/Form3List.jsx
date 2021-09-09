import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '16px' }}
      labelStyle={{ fontSize: '16px' }}
      column={10}
      layout={'vertical'}
    >
      <Descriptions.Item label="性别">男</Descriptions.Item>
      <Descriptions.Item label="出生日期">1999-08-08</Descriptions.Item>
      <Descriptions.Item label="原发病">干燥性综合征</Descriptions.Item>
      <Descriptions.Item label="慢性肾衰竭">否</Descriptions.Item>
      <Descriptions.Item label="首次透析日期">2021-08-08</Descriptions.Item>
      <Descriptions.Item label="本院首透日期">2021-08-08</Descriptions.Item>
      <Descriptions.Item label="医疗支付方式">本地医保</Descriptions.Item>
      <Descriptions.Item label="本人电话">15565548710</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

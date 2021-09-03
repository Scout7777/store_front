import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '22px' }}
      labelStyle={{ fontSize: '22px', width: '22%' }}
      column={2}
    >
      <Descriptions.Item label="同期原发病诊断总数" span={4}>
        300
      </Descriptions.Item>
      <Descriptions.Item label="原发性肾小球疾病">102</Descriptions.Item>
      <Descriptions.Item label="继发性肾小球疾病">55</Descriptions.Item>
      <Descriptions.Item label="遗传性及先天性疾病">12</Descriptions.Item>
      <Descriptions.Item label="肾小管间质疾病">7</Descriptions.Item>
      <Descriptions.Item label="药物性肾损害">46</Descriptions.Item>
      <Descriptions.Item label="泌尿系肿瘤">23</Descriptions.Item>
      <Descriptions.Item label="泌尿系感染和结实">12</Descriptions.Item>
      <Descriptions.Item label="肾脏切除术后">8</Descriptions.Item>
      <Descriptions.Item label="原发病不明确">35</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;

import React, { useState, useRef } from 'react';
// import { PageContainer } from '@ant-design/pro-layout';
import { Space, Tag, Row, Col, Button } from 'antd';
import { FilterOutlined, PlusOutlined } from '@ant-design/icons';
// import { PlusOutlined } from '@ant-design/icons';
import { updateUser } from '@/services/histsys/user';
import UpdateForm from './components/UserUpdateForm';
import CreateForm from './components/MonitorForm';
import PatientCard from './components/Card';
import { LightFilter, ProFormSelect, ProFormRadio, ProFormDatePicker } from '@ant-design/pro-form';
import { getAreas } from '@/services/histsys/bed';

// const { TabPane } = Tabs;
// import MonitorList from './components/MonitorList';
// import { orange } from '@material-ui/core/colors';

function log(e) {
  console.log(e);
}

function preventDefault(e) {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
}

export default () => {
  const [createModalVisible, handleCreateModalVisible] = useState();
  const [updateModalVisible, handleUpdateModalVisible] = useState();
  const [currentRow, setCurrentRow] = useState();
  const [layOut] = useState('card');
  const [selectMode, setSelectMode] = useState(false);
  const actionRef = useRef();

  // const options = [
  //   { label: '传统布局', value: 'traditional' },
  //   { label: '卡片布局', value: 'card' }
  // ];

  const MockValue = [];

  const aa = ['a', 'b'];

  for (let i = 0; i < 10; i += 1) {
    MockValue.push({
      time: 'a',
      name: '测试患者',
      problem: '心梗',
      notice: '轮椅',
      dashboard: '高血压',
      way: aa[Math.floor(Math.random() * aa.length)],
      bp: '90/150',
      weight_before: '70',
      weight_later: '68',
      water: '2.0',
      water_now: '1.8',
      select: false,
    });
  }

  return (
    <div>
      {/* <Radio.Group
          options={options}
          onChange={e => {setLayOut(e.target.value)}}
          value={layOut}
          optionType="button"
          style={{margin: 6, right: 6}}
        /> */}
      {layOut === 'traditional' ? (
        <div>
          <CreateForm
            onCancel={() => {
              handleCreateModalVisible(false);
            }}
            visible={createModalVisible}
          />
          <UpdateForm
            onSubmit={async (value) => {
              const { id } = currentRow || {};
              const success = await updateUser(id, value);
              if (success) {
                handleUpdateModalVisible(false);
                setCurrentRow(undefined);
                if (actionRef.current) {
                  actionRef.current.reload();
                }
              }
            }}
            onCancel={() => {
              handleUpdateModalVisible(false);
              setCurrentRow(undefined);
            }}
            visible={updateModalVisible}
            values={currentRow || {}}
          />
        </div>
      ) : (
        <div>
          <Row>
            <Col span={16}>
              <LightFilter
                initialValues={{
                  area: 'one',
                }}
                bordered
                collapseLabel={<FilterOutlined />}
                size={'large'}
                onFinish={async (values) => console.log(values)}
              >
                <ProFormSelect
                  name="bedAreaId"
                  request={async () => {
                    const resp = await getAreas();
                    const value = resp.data.map((item) => ({
                      label: item.name,
                      value: item.id,
                    }));
                    return value;
                  }}
                  placeholder="分区"
                />
                <ProFormSelect
                  name="week"
                  valueEnum={{
                    this: '本周',
                    last: '上周',
                  }}
                  initialValue={'this'}
                />
                <ProFormRadio.Group
                  name="radio"
                  radioType="button"
                  initialValue={'Mon'}
                  options={[
                    {
                      value: 'Mon',
                      label: '周一',
                    },
                    {
                      value: 'Tues',
                      label: '周二',
                    },
                    {
                      value: 'Wed',
                      label: '周三',
                    },
                    {
                      value: 'Thur',
                      label: '周四',
                    },
                    {
                      value: 'Fri',
                      label: '周五',
                    },
                    {
                      value: 'Sat',
                      label: '周六',
                    },
                    {
                      value: 'Sun',
                      label: '周日',
                    },
                  ]}
                />
                <ProFormDatePicker name="time" placeholder="日期" />
                <ProFormRadio.Group
                  name="radio"
                  radioType="button"
                  options={[
                    {
                      value: 'morning',
                      label: '上午',
                    },
                    {
                      value: 'afternoon',
                      label: '下午',
                    },
                    {
                      value: 'evenning',
                      label: '晚间',
                    },
                  ]}
                />
                <ProFormSelect
                  name="nurse"
                  valueEnum={{
                    nurse1: '护士1',
                    nurse2: '护士2',
                    nurse3: '护士3',
                  }}
                  placeholder="责任护士"
                />
              </LightFilter>
            </Col>
            <Col span={8}>
              {!selectMode ? (
                <Space>
                  <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={() => {
                      setSelectMode(true);
                    }}
                  >
                    我的病人
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => {
                      setSelectMode(true);
                    }}
                  >
                    床位互换
                  </Button>
                </Space>
              ) : (
                <Space>
                  <Button
                    type="primary"
                    onClick={() => {
                      setSelectMode(false);
                    }}
                  >
                    保存
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => {
                      setSelectMode(false);
                    }}
                  >
                    取消
                  </Button>
                </Space>
              )}
            </Col>
          </Row>
          <Row style={{ marginTop: '18px' }}>
            <Tag color="#406aaC" closable={false} onClose={log}>
              我的患者1
            </Tag>
            <Tag color="#406aaC" closable onClose={preventDefault}>
              我的患者2
            </Tag>
          </Row>
          <div style={{ marginBottom: '18px', marginTop: '18px', fontSize: '20px' }}>一区</div>
          {/* <Space size={[12, 18]} wrap style={{background: (selectMode ? "#848587" : "#F0F2F5")}}> */}
          <Space size={[12, 18]} wrap>
            {MockValue.map((item, index) => (
              <PatientCard selectMode={selectMode} name={item.name} index={index} />
              // eslint-disable-next-line react/no-array-index-key
            ))}
          </Space>
          <div style={{ marginBottom: '18px', marginTop: '18px', fontSize: '20px' }}>二区</div>
          {/* <Space size={[12, 18]} wrap style={{background: (selectMode ? "#848587" : "#F0F2F5")}}> */}
          <Space size={[12, 18]} wrap>
            {MockValue.map((item, index) => (
              <PatientCard selectMode={selectMode} name={item.name} index={index + 10} />
              // eslint-disable-next-line react/no-array-index-key
            ))}
          </Space>
        </div>
      )}
    </div>
  );
};

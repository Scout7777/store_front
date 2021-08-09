import React, { useState, useRef } from 'react';
// import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Space, Tag, Row, Col, Button } from 'antd';
import { FilterOutlined, PlusOutlined } from '@ant-design/icons';
// import { PlusOutlined } from '@ant-design/icons';
import { updateUser } from '@/services/histsys/user';
import UpdateForm from './components/UserUpdateForm';
import CreateForm from './components/MonitorForm';
import PatientCard from './components/Card';
import { LightFilter, ProFormSelect, ProFormRadio, ProFormDatePicker } from '@ant-design/pro-form';

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

  const columns = [
    {
      title: '床位',
      dataIndex: 'position',
      render: (_, record, index) => <div>{index + 1}床</div>,
    },
    {
      title: '班次',
      dataIndex: 'time',
      valueEnum: {
        a: {
          text: '上午',
          color: 'blue',
        },
        b: {
          text: '下午',
          color: 'red',
        },
        c: {
          text: '晚间',
          color: 'blue',
        },
      },
    },
    {
      title: '患者号',
      dataIndex: 'staffNo',
      sorter: true,
      render: (_, record, index) => <div>00000{index + 1}</div>,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: '症状评估',
      dataIndex: 'problem',
      search: false,
      render: () => (
        <Space>
          {/* {record.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))} */}
          <Tag>脑梗</Tag>
          <Tag>糖尿病</Tag>
        </Space>
      ),
    },
    {
      title: '评估提醒',
      dataIndex: 'way',
      search: false,
      render: () => (
        <Space>
          {/* {record.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))} */}
          <Tag color={'orange'}>轮椅</Tag>
        </Space>
      ),
    },
    {
      title: '监控警告',
      dataIndex: 'dashboard',
      search: false,
      render: () => (
        <Space>
          {/* {record.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))} */}
          <Tag color={'red'}>高血压</Tag>
        </Space>
      ),
    },
    {
      title: '临时医嘱',
      dataIndex: 'advice',
      sorter: true,
    },
    {
      title: '透析方式',
      dataIndex: 'way',
      valueEnum: {
        a: {
          text: 'HD',
          color: 'blue',
        },
        b: {
          text: 'HDF',
          color: 'red',
        },
      },
    },
    {
      title: '透前血压',
      dataIndex: 'bp',
    },
    {
      title: '透前体重',
      dataIndex: 'weight_before',
    },
    {
      title: '透后体重',
      dataIndex: 'weight_later',
    },
    {
      title: '设定脱水量',
      dataIndex: 'water',
    },
    {
      title: '器显脱水量',
      dataIndex: 'water_now',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: () => [
        <a
          key="config"
          onClick={() => {
            handleCreateModalVisible(true);
          }}
        >
          查看详情/操作
        </a>,
        // <a key="delete" onClick={() => {}}>
        //   查看详情/操作
        // </a>,
      ],
    },
  ];

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
          <ProTable
            actionRef={actionRef}
            rowKey="key"
            search={{
              labelWidth: 120,
            }}
            toolBarRender={() => [
              // <Button
              //   type="primary"
              //   key="primary"
              //   onClick={() => {
              //     handleCreateModalVisible(true);
              //   }}
              // >
              //   <PlusOutlined /> 新建
              // </Button>,
            ]}
            // request={searchUser}
            dataSource={MockValue}
            columns={columns}
            // rowSelection={{
            //   onChange: (_, selectedRows) => {
            //     setSelectedRows(selectedRows);
            //   },
            // }}
          />
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
            <Col span={18}>
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
                  name="area"
                  valueEnum={{
                    one: '一区',
                    two: '二区',
                  }}
                  placeholder="分区"
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
            <Col span={6}>
              {!selectMode ? (
                <Button
                  type="primary"
                  icon={<PlusOutlined />}
                  onClick={() => {
                    setSelectMode(true);
                  }}
                >
                  选择我的病人
                </Button>
              ) : (
                <div>
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
                    style={{ marginLeft: 18 }}
                    onClick={() => {
                      setSelectMode(false);
                    }}
                  >
                    取消
                  </Button>
                </div>
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
          {MockValue.map((item, index) => (
            <PatientCard selectMode={selectMode} name={item.name} index={index} />
            // eslint-disable-next-line react/no-array-index-key
          ))}
          <div style={{ marginBottom: '18px', marginTop: '18px', fontSize: '20px' }}>二区</div>
          {/* <Space size={[12, 18]} wrap style={{background: (selectMode ? "#848587" : "#F0F2F5")}}> */}
          {/* <Space size={[12, 18]} wrap> */}
          {MockValue.map((item, index) => (
            <PatientCard selectMode={selectMode} name={item.name} index={index + 10} />
            // eslint-disable-next-line react/no-array-index-key
          ))}
          {/* </Space> */}
        </div>
      )}
    </div>
  );
};

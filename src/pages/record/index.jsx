import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Button, Space, Tag, Progress } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import CreateForm from './components/UserCreateForm';
import { searchPatient } from '@/services/histsys/dialysis';
import MonitorForm from '@/pages/room/components/MonitorForm';
// import MonitorList from './components/MonitorList';

export default () => {
  const [ModalVisible, handleModalVisible] = useState();
  const [createModalVisible, handleCreateModalVisible] = useState();
  const [currentRow, setCurrentRow] = useState();
  const actionRef = useRef();

  const MockValue = [];
  const mock = [
    <Tag>急诊</Tag>,
    <Tag>临时</Tag>,
    <Tag>退出</Tag>,
    <Tag>请假</Tag>,
    <Tag>住院</Tag>,
    <Tag>长期</Tag>,
    <Tag>新入</Tag>,
    '-',
    '-',
    '-',
    '-',
  ];
  const bed = [
    <>
      <Tag>一/晚</Tag>
      <Tag>四/晚</Tag>
    </>,
    <>
      <Tag>一/早</Tag>
      <Tag>三/早</Tag>
      <Tag>五/早</Tag>
    </>,
    <>
      <Tag>二/下</Tag>
      <Tag>四/下</Tag>
      <Tag>六/下</Tag>
    </>,
    '-',
  ];
  const zhengzhuang = [
    <Tag color={'purple'}>房颤</Tag>,
    <Tag color={'purple'}>甲</Tag>,
    '-',
    '-',
    '-',
  ];
  const guomin = [
    <Tag color={'red'}>药物</Tag>,
    <Tag color={'red'}>透析器</Tag>,
    <>
      <Tag color={'red'}>透析器</Tag>
      <Tag color={'red'}>药物</Tag>
    </>,
    '-',
    '-',
    '-',
  ];

  const aa = ['a', 'b'];
  //  let result= Math.floor(Math.random() * aa.length);

  for (let i = 0; i < 20; i += 1) {
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
      createdAt: Date.now() - Math.floor(Math.random() * 10000),
    });
  }

  const columns = [
    // {
    //   title: '头像',
    //   dataIndex: 'avatar',
    //   valueType: 'avatar',
    //   search: false,
    // },
    {
      title: '门诊号（登记号）',
      dataIndex: ['electronicMedicalRecord', 'outpatientNo'],
      sorter: true,
      // render: (_, record) => `0000000${record.id}`,
    },
    {
      title: '姓名',
      dataIndex: ['electronicMedicalRecord', 'patientName'],
    },
    {
      title: '状态',
      dataIndex: 'state',
      search: false,
      render: () => <Space>{mock[Math.floor(Math.random() * mock.length)]}</Space>,
    },
    {
      title: '排床规律',
      dataIndex: 'labels',
      search: false,
      render: () => (
        <Space>
          {/* {record.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))} */}
          {bed[Math.floor(Math.random() * bed.length)]}
        </Space>
      ),
    },
    {
      title: '感染四项',
      dataIndex: 'role',
      valueEnum: {
        a: {
          text: '丙肝',
          color: 'green',
        },
        b: {
          text: 'HIV',
          color: 'blue',
        },
        c: {
          text: '乙肝',
          color: 'red',
        },
        d: {
          text: '梅毒',
          color: 'black',
        },
        e: {
          text: '正常',
        },
      },
    },
    {
      title: '检验时效',
      dataIndex: 'status',
      hideInForm: false,
      render: () => <Progress percent={30} size="small" />,
      // valueType: () => ({
      //   type: 'progress',
      //   status: 'active',
      // }),
      // valueEnum: {
      //   active: {
      //     text: '检验时效中',
      //     status: 'Success',
      //   },
      //   disable: {
      //     text: '已过期，请及时检验',
      //     status: 'default',
      //   },
      // },
    },
    {
      title: '血管通路',
      hideInForm: false,
      render: () => (
        <Space>
          {/* {record.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))} */}
          <Tag>AVF</Tag>
        </Space>
      ),
    },
    {
      title: '症状评估',
      render: () => (
        <Space>
          {/* {record.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))} */}
          {zhengzhuang[Math.floor(Math.random() * zhengzhuang.length)]}
        </Space>
      ),
    },
    {
      title: '用药情况',
    },
    {
      title: '过敏史',
      render: () => (
        <Space>
          {/* {record.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))} */}
          {guomin[Math.floor(Math.random() * guomin.length)]}
        </Space>
      ),
    },
    // {
    //   title: '创建时间',
    //   sorter: true,
    //   search: false,
    //   dataIndex: 'createdAt',
    //   valueType: 'dateTime',
    // },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="config"
          onClick={() => {
            setCurrentRow(record);
            handleModalVisible(true);
          }}
        >
          查看详情
        </a>,
        <a key="delete" onClick={() => {}}>
          打印
        </a>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable
        scroll={{ x: '100%' }}
        // headerTitle="患者列表"
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalVisible(true);
            }}
          >
            <PlusOutlined /> 手动补录
          </Button>,
        ]}
        request={searchPatient}
        // dataSource={MockValue}
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

      <MonitorForm
        onCancel={() => {
          handleModalVisible(false);
          setCurrentRow(undefined);
        }}
        visible={ModalVisible}
        values={currentRow || {}}
      />
    </PageContainer>
  );
};

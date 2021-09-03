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

  // const PopTag = (props) => {
  //   const [visible, setVisible] = useState(false);

  //   const { label, color } = props;

  //   function hide() {
  //     setVisible(false);
  //   }

  //   function handleVisibleChange(value) {
  //     console.log(value);
  //     setVisible({ value });
  //   }

  //   return (
  //     <Popover
  //       content={
  //         <Space>
  //           <a onClick={hide}>急诊</a>
  //           <a onClick={hide}>临时</a>
  //           <a onClick={hide}>退出</a>
  //           <a onClick={hide}>请假</a>
  //           <a onClick={hide}>住院</a>
  //           <a onClick={hide}>长期</a>
  //           <a onClick={hide}>新入</a>
  //         </Space>
  //       }
  //       title="操作"
  //       trigger="click"
  //       visible={visible}
  //       onVisibleChange={handleVisibleChange}
  //     >
  //       <Tag color={color}>{label}</Tag>
  //     </Popover>
  //   );
  // };

  const MockValue = [];
  // const mock = [
  //   <PopTag label="急诊"></PopTag>,
  //   <PopTag label="临时"></PopTag>,
  //   <PopTag label="退出">退出</PopTag>,
  //   <PopTag label="请假">请假</PopTag>,
  //   <PopTag label="住院">住院</PopTag>,
  //   <PopTag label="长期">长期</PopTag>,
  //   <PopTag label="新入">新入</PopTag>,
  //   '-',
  //   '-',
  //   '-',
  //   '-',
  // ];
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
      render: (_, record) =>
        record.status.map((item, index) => (
          <>
            <Tag index={index}>{item}</Tag>
          </>
        )),
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
    {
      title: '出生日期',
      dataIndex: ['electronicMedicalRecord', 'birthDate'],
      valueType: 'date',
      search: false,
    },
    {
      title: '血型',
      dataIndex: 'bloodType',
      search: false,
    },
    {
      title: '联系人关系',
      dataIndex: 'contactRelation',
      search: false,
    },
    {
      title: '联系人电话',
      dataIndex: 'contactTelephone',
      search: false,
    },
    {
      title: '性别',
      dataIndex: ['electronicMedicalRecord', 'gender'],
      search: false,
    },
    {
      title: '身高',
      dataIndex: ['electronicMedicalRecord', 'height'],
      search: false,
    },
    {
      title: '家庭住址',
      dataIndex: 'homeAddress',
      search: false,
    },
    {
      title: '身份证类型',
      dataIndex: ['electronicMedicalRecord', 'idType'],
      search: false,
    },
    {
      title: '身份证号码',
      dataIndex: ['electronicMedicalRecord', 'idNo'],
      search: false,
    },
    {
      title: '本人电话',
      dataIndex: ['electronicMedicalRecord', 'telephone'],
      search: false,
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
            console.log(record);
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

import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Button, Space, Tag, Progress, Popover } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
// import { searchUser, updateUser } from '@/services/histsys/user';
import { searchPatient } from '@/services/histsys/patient';
import { getWeek, getReal, getTemplateWeek } from '@/services/histsys/bed';
import UpdateForm from './components/PatientUpdateForm';
import CreateForm from './components/PatientCreateForm';

// const ProcessMap = {
//   // close: 'normal',
//   active: 'active',
//   // online: 'success',
//   disable: 'exception',
// };

export default () => {
  const [createModalVisible, handleCreateModalVisible] = useState();
  const [updateModalVisible, handleUpdateModalVisible] = useState();
  const [currentRow, setCurrentRow] = useState();
  const actionRef = useRef();

  const PopTag = (props) => {
    const [visible, setVisible] = useState(false);

    const { lable, color } = props;

    function hide() {
      setVisible(false);
    }

    function handleVisibleChange(value) {
      setVisible({ value });
    }

    return (
      <Popover
        content={
          <Space>
            <a onClick={hide}>急诊</a>
            <a onClick={hide}>临时</a>
            <a onClick={hide}>退出</a>
            <a onClick={hide}>请假</a>
            <a onClick={hide}>住院</a>
            <a onClick={hide}>长期</a>
            <a onClick={hide}>新入</a>
          </Space>
        }
        title="操作"
        trigger="click"
        visible={visible}
        onVisibleChange={handleVisibleChange}
      >
        <Tag color={color}>{lable}</Tag>
      </Popover>
    );
  };

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

  //  let result= Math.floor(Math.random() * aa.length);

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
    },
    {
      title: '姓名',
      dataIndex: ['electronicMedicalRecord', 'patientName'],
    },
    {
      title: '状态',
      dataIndex: 'state',
      search: false,
      render: () => (
        <Space>
          <PopTag></PopTag>
        </Space>
      ),
    },
    {
      title: '排床规律',
      dataIndex: 'labels',
      search: false,
      render: () => <Space>{bed[Math.floor(Math.random() * bed.length)]}</Space>,
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
      render: (_, record) => (
        <a
          key="config"
          onClick={() => {
            setCurrentRow(record);
            handleUpdateModalVisible(true);
          }}
        >
          {_}
        </a>
      ),
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
      dataIndex: 'birthDate',
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
      dataIndex: 'gender',
      search: false,
    },
    {
      title: '身高',
      dataIndex: 'height',
      search: false,
    },
    {
      title: '家庭住址',
      dataIndex: 'homeAddress',
      search: false,
    },
    {
      title: '身份证类型',
      dataIndex: 'idType',
      search: false,
    },
    {
      title: '身份证号码',
      dataIndex: 'idNo',
      search: false,
    },
    {
      title: '本人电话',
      dataIndex: 'telephone',
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
            setCurrentRow(record);
            handleUpdateModalVisible(true);
          }}
        >
          更新
        </a>,
        <a key="delete" onClick={() => {}}>
          查看
        </a>,
      ],
    },
  ];
  return (
    <PageContainer>
      <ProTable
        scroll={{ x: '100%' }}
        headerTitle="患者列表"
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
              console.log(getWeek());
              console.log(getTemplateWeek(202133));
              console.log(getReal());
              handleCreateModalVisible(true);
            }}
          >
            <PlusOutlined /> 新建
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
      <UpdateForm
        onCancel={() => {
          handleUpdateModalVisible(false);
          setCurrentRow(undefined);
        }}
        visible={updateModalVisible}
        values={currentRow || {}}
      />
      {/* <CreateForm
        onCancel={() => {
          handleUpdateModalVisible(false);
        }}
        visible={updateModalVisible}
      /> */}
    </PageContainer>
  );
};

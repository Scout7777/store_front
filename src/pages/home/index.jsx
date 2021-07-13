import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Space, Tag } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';
import { searchUser, updateUser } from '@/services/histsys/user';
import UpdateForm from './components/UserUpdateForm';
import CreateForm from './components/UserCreateForm';
import MonitorList from './components/MonitorList';

export default () => {
  const [createModalVisible, handleCreateModalVisible] = useState();
  const [updateModalVisible, handleUpdateModalVisible] = useState();
  const [currentRow, setCurrentRow] = useState();
  const actionRef = useRef();

  const columns = [
    {
      title: '床位',
      dataIndex: 'position',
      render: (_, record, index) => <div>{index + 1}床</div>,
    },
    {
      title: '班次',
      dataIndex: 'role',
      valueEnum: {
        admin: {
          text: '上午',
          color: 'blue',
        },
        doctor: {
          text: '下午',
          color: 'red',
        },
        nurse: {
          text: '晚间',
          color: 'blue',
        },
        engineer: {
          text: '下午',
          color: 'red',
        },
      },
    },
    {
      title: '患者号',
      dataIndex: 'staffNo',
      sorter: true,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: '症状评估',
      dataIndex: 'labels',
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
      dataIndex: 'labels',
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
      dataIndex: 'labels',
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
      dataIndex: 'role',
      valueEnum: {
        admin: {
          text: 'HD',
          color: 'blue',
        },
        doctor: {
          text: 'HDF',
          color: 'red',
        },
        nurse: {
          text: 'HD',
          color: 'blue',
        },
        engineer: {
          text: 'HDF',
          color: 'red',
        },
      },
    },
    {
      title: '透前血压',
      dataIndex: '透前血压',
    },
    {
      title: '透前体重',
      dataIndex: '透前体重',
    },
    {
      title: '透后体重',
      dataIndex: '透后体重',
    },
    {
      title: '设定脱水量',
      dataIndex: '透后体重',
    },
    {
      title: '器显脱水量',
      dataIndex: '透后体重',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: () => [
        // render: (_, record) => [
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
    <PageContainer>
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
        request={searchUser}
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
      <MonitorList />
    </PageContainer>
  );
};

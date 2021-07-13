import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
// import { Button, Card } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';
import { searchUser, updateUser } from '@/services/histsys/user';
import UpdateForm from './components/UserUpdateForm';
import CreateForm from './components/UserCreateForm';
// import MonitorList from './components/MonitorList';

export default () => {
  const [createModalVisible, handleCreateModalVisible] = useState();
  const [updateModalVisible, handleUpdateModalVisible] = useState();
  const [currentRow, setCurrentRow] = useState();
  const actionRef = useRef();

  const columns = [
    // {
    //   title: '头像',
    //   dataIndex: 'avatar',
    //   valueType: 'avatar',
    //   search: false,
    // },
    {
      title: '患者号',
      dataIndex: 'staffNo',
      sorter: true,
    },
    {
      title: '床位',
      dataIndex: 'position',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: '联系电话',
      dataIndex: 'telephone',
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
      title: '灌流器',
      dataIndex: '灌流器',
    },
    {
      title: '透析器',
      dataIndex: '透析器',
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
      title: '透析时间',
      sorter: true,
      search: false,
      dataIndex: 'createdAt',
      valueType: 'dateTime',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: () => [
        // render: (_, record) => [
        // <a
        //   key="config"
        //   onClick={() => {
        //     handleUpdateModalVisible(true);
        //     setCurrentRow(record);
        //   }}
        // >
        //   更新
        // </a>,
        <a key="delete" onClick={() => {}}>
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
        // headerTitle="患者列表"
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
    </PageContainer>
  );
};

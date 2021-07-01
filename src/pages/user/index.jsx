import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { pageUser, createUser, updateUser } from '@/services/histsys/user';
import UpdateForm from './components/UserUpdateForm';
import CreateForm from './components/UserCreateForm';

export default () => {
  const [createModalVisible, handleCreateModalVisible] = useState();
  const [updateModalVisible, handleUpdateModalVisible] = useState();
  const [currentRow, setCurrentRow] = useState();
  const actionRef = useRef();

  const columns = [
    {
      title: '头像',
      dataIndex: 'avatar',
      valueType: 'avatar',
      search: false,
    },
    {
      title: '工号',
      dataIndex: 'staffNo',
      sorter: true,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: '手机',
      dataIndex: 'telephone',
    },
    {
      title: '用户类型',
      dataIndex: 'role',
      valueEnum: {
        admin: {
          text: '管理员',
          color: 'pink',
        },
        doctor: {
          text: '医生',
          color: 'red',
        },
        nurse: {
          text: '护士',
          color: 'yellow',
        },
        engineer: {
          text: '工程师',
          color: 'blue',
        },
      },
    },
    {
      title: '状态',
      dataIndex: 'status',
      hideInForm: true,
      valueEnum: {
        active: {
          text: '激活',
          status: 'Success',
        },
        disable: {
          text: '禁用',
          status: 'default',
        },
      },
    },
    {
      title: '创建时间',
      sorter: true,
      search: false,
      dataIndex: 'createdAt',
      valueType: 'dateTime',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="config"
          onClick={() => {
            handleUpdateModalVisible(true);
            setCurrentRow(record);
          }}
        >
          更新
        </a>,
        <a
          key="delete"
          onClick={() => {
            alert('删除成功');
          }}
        >
          删除
        </a>,
      ],
    },
  ];
  return (
    <PageContainer>
      <ProTable
        headerTitle="用户列表"
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
              handleCreateModalVisible(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={pageUser}
        columns={columns}
        // rowSelection={{
        //   onChange: (_, selectedRows) => {
        //     setSelectedRows(selectedRows);
        //   },
        // }}
      />
      <CreateForm
        onSubmit={async (value) => {
          const resp = await createUser(value);
          if (resp.status === 201) {
            handleCreateModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
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
          console.log('???');
          handleUpdateModalVisible(false);
          setCurrentRow(undefined);
        }}
        visible={updateModalVisible}
        values={currentRow || {}}
      />
    </PageContainer>
  );
};

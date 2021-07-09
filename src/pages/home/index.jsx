import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Button, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
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
      title: '姓名',
      dataIndex: 'name',
      sorter: true,
    },
    // {
    //   title: '手机',
    //   dataIndex: 'telephone',
    // },
    {
      title: '患者类型',
      dataIndex: 'role',
      valueEnum: {
        admin: {
          text: '正常',
          color: 'pink',
        },
        doctor: {
          text: 'HIV',
          color: 'red',
        },
        nurse: {
          text: '乙肝',
          color: 'yellow',
        },
        engineer: {
          text: '梅毒',
          color: 'blue',
        },
      },
    },
    {
      title: '检验状态',
      dataIndex: 'status',
      hideInForm: true,
      valueEnum: {
        active: {
          text: '检验时效中',
          status: 'Success',
        },
        disable: {
          text: '已过期，请及时检验',
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
        <a key="delete" onClick={() => {}}>
          删除
        </a>,
      ],
    },
  ];
  return (
    <PageContainer>
      <ProTable
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
              handleCreateModalVisible(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={searchUser}
        columns={columns}
        // rowSelection={{
        //   onChange: (_, selectedRows) => {
        //     setSelectedRows(selectedRows);
        //   },
        // }}
      />
      <Card>
        <MonitorList />
      </Card>
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

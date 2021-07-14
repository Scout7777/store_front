import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
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
      title: '透析编号',
      dataIndex: 'dialysisId',
    },
    {
      title: '姓名',
      dataIndex: 'name',
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
      title: '耗材费用',
      dataIndex: '灌流器',
    },
    {
      title: '药品费用',
      dataIndex: '透析器',
    },
    {
      title: '设备费用',
      dataIndex: '透前血压',
    },
    {
      title: '其他费用',
      dataIndex: '透前体重',
    },
    {
      title: '合计',
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
        <a
          key="config"
          onClick={() => {
            handleCreateModalVisible(true);
          }}
        >
          查看详情
        </a>,
        <a
          key="config"
          onClick={() => {
            handleCreateModalVisible(true);
          }}
        >
          打印单据
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
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleCreateModalVisible(true);
            }}
          >
            <PlusOutlined /> 手动补录
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

import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { searchUser, createUser, updateUser, deleteUser } from '@/services/histsys/user';
import BuyCreateForm from './components/BuyCreateForm';
import SellCreateForm from './components/SellCreateForm';

export default () => {
  const [createModalVisible, handleCreateModalVisible] = useState();
  const [updateModalVisible, handleUpdateModalVisible] = useState();
  const [currentRow, setCurrentRow] = useState();
  const actionRef = useRef();

  const columns = [
    {
      title: '名称',
      dataIndex: 'thingname',
      search: true,
    },
    {
      title: '图片',
      dataIndex: 'picture',
      sorter: true,
    },
    {
      title: '价格',
      dataIndex: 'price',
      sorter: true,
    },

    {
      title: '商品类型',
      dataIndex: 'type',
      valueEnum: {
        admin: {
          text: '日用品',
          color: 'pink',
        },
        doctor: {
          text: '电器',
          color: 'red',
        },
        nurse: {
          text: '食品',
          color: 'yellow',
        },
        engineer: {
          text: '床上用品',
          color: 'blue',
        },
      },
    },
    {
      title: '卖家信誉分',
      dataIndex: 'score',
      sorter: true,
    },
    {
      title: '卖家电话',
      dataIndex: 'telephone',
    },
    {
      title: '卖家留言',
      dataIndex: 'comment',
    },
    {
      title: '上架时间',
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
          购买商品
        </a>,
        <a
          key="delete"
          onClick={async () => {
            const success = await deleteUser(record.id);
            if (success) {
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
        >
          查看商家
        </a>,
      ],
    },
  ];
  return (
    <PageContainer>
      <ProTable
        scroll={{ x: '100%' }}
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
            <PlusOutlined /> 上架商品
          </Button>,
        ]}
        request={searchUser}
        columns={columns}
      />
      <SellCreateForm
        onSubmit={async (value) => {
          const reform = value;
          const [a, b] = value.id;
          reform.idType = a;
          reform.idNo = b;
          reform.staffStatus = value.status === 'active' ? 'online' : 'offline';
          const resp = await createUser(reform);
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

      <BuyCreateForm
        onSubmit={async (value) => {
          const { id } = currentRow || {};
          const reform = value;
          reform.staffStatus = value.status === 'disable' ? 'offline' : 'online';
          const success = await updateUser(id, reform);
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

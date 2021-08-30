import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Button, Popover } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { searchDevice, createDevice, updateDevice, statusDevice } from '@/services/histsys/device';
import DeviceForm from './components/DeviceForm';

export default () => {
  const [createModalVisible, handleCreateModalVisible] = useState()
  const [updateModalVisible, handleUpdateModalVisible] = useState()
  const [currentSelectedPopoverButtonVisible, handleCurrentSelectedPopoverButtonVisible] = useState()
  const [currentRow, setCurrentRow] = useState()
  const actionRef = useRef()

  // console.log(currentSelectedPopoverButtonVisible)
  const columns = [
    {
      title: '设备编号',
      dataIndex: 'id',
      sorter: true,
    },
    {
      title: '设备名称',
      dataIndex: 'name',
      sorter: true,
    },
    // {
    //   title: '归属床位',
    //   dataIndex: 'bed',
    //   sorter: true,
    // },
    {
      title: '设备类别',
      dataIndex: 'type',
      valueEnum: {
        血液透析机: {
          text: '血液透析机',
          color: 'green',
        },
        血液透析滤过机: {
          text: '血液透析滤过机',
          color: 'green',
        },
        连续肾脏替代治疗机: {
          text: '连续肾脏替代治疗机',
          color: 'green',
        },
        床纯水设备: {
          text: '床纯水设备',
          color: 'blue',
        },
        中央供液设备: {
          text: '中央供液设备',
          color: 'blue',
        },
        除颤仪名称: {
          text: '除颤仪名称',
          color: 'gray',
        },
        负压吸引器名称: {
          text: '负压吸引器名称',
          color: 'gray',
        },
        简易呼吸器名称: {
          text: '简易呼吸器名称',
          color: 'gray',
        },
        其它: {
          text: '其它',
          color: 'gray',
        },
      }
    },
    {
      title: '设备状态',
      dataIndex: 'status',
      valueEnum: {
        空闲: {
          text: '空闲',
          color: 'green',
        },
        工作: {
          text: '工作',
          color: 'blue',
        },
        维修: {
          text: '维修',
          color: 'red',
        },
        消毒: {
          text: '消毒',
          color: 'gray',
        },
        报废: {
          text: '报废',
          color: 'black',
        },
      },
    },
    {
      title: '启用时间',
      sorter: true,
      search: false,
      dataIndex: 'enableTime',
      valueType: 'dateTime',
    },
    {
      title: '添加时间',
      sorter: true,
      search: false,
      dataIndex: 'createdAt',
      valueType: 'dateTime',
    },
    // {
    //   title: '废弃时间',
    //   sorter: true,
    //   search: false,
    //   dataIndex: 'discardTime',
    //   valueType: 'dateTime',
    //   hideInDescriptions: true,
    // },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="detail"
          onClick={() => {
            handleUpdateModalVisible(true);
            setCurrentRow(record);
          }}
        >
          更新设备
        </a>,
        <a
          key="config"
          onClick={() => {
            handleUpdateModalVisible(true);
            setCurrentRow(record);
          }}
        >
          检修
        </a>,
        <Popover
          key="status"
          content={
          <a 
            onClick={async () => {
              const success = await statusDevice(record.id, "报废");
              if (success) {
                if (actionRef.current) {
                  actionRef.current.reload();
                }
                handleCurrentSelectedPopoverButtonVisible(false)
              }
            }}
          >确认报废</a>}
          trigger="click"
          visible={currentSelectedPopoverButtonVisible === `${record.id}`}
          onVisibleChange={visible => handleCurrentSelectedPopoverButtonVisible(visible ? `${record.id}` : null)}
        >
          <a>报废</a>
        </Popover>,
      ],
    },
  ];
  return (
    <PageContainer>
      <ProTable
        headerTitle="设备列表"
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
            <PlusOutlined /> 新增设备
          </Button>,
        ]}
        request={searchDevice}
        columns={columns}
        // rowSelection={{
        //   onChange: (_, selectedRows) => {
        //     setSelectedRows(selectedRows);
        //   },
        // }}
      />
      <DeviceForm
        title="新建设备"
        onSubmit={async (value) => {
          const success = await createDevice(value);
          if (success) {
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
      <DeviceForm
        title="更新设备"
        mode="edit"
        onSubmit={async (value) => {
          const { id } = currentRow || {};
          const success = await updateDevice(id, value);
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

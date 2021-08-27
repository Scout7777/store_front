import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Tabs, Button, Popover } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { pageDs, createDsGroup, createDsItem, updateDsItem, deleteDsItem } from '@/services/histsys/disinfection';
import DsGroupForm from './components/DsGroupForm';

const DS_GROUP_TYPES = ["透析机消毒检测", "水处理机消毒检测", "浓缩液配制桶及容器清洁与消毒", "物表消毒", "透析室空气消毒", "透析用水检测", "透析机透析液检测", "配置透析液检测"]
export default () => {
  const [createModalVisible, handleCreateModalVisible] = useState({});
  const [updateModalVisible, handleUpdateModalVisible] = useState({});
  const [currentRow, setCurrentRow] = useState();
  const actionRef = {
    "透析机消毒检测": useRef(),
    "水处理机消毒检测": useRef(),
    "浓缩液配制桶及容器清洁与消毒": useRef(),
    "物表消毒": useRef(),
    "透析室空气消毒": useRef(),
    "透析用水检测": useRef(),
    "透析机透析液检测": useRef(),
    "配置透析液检测": useRef(),
  }
  const [currentSelectedPopoverButtonVisible, handleCurrentSelectedPopoverButtonVisible] = useState()


  const openCreateModal = (type) => {
    const map = {}
    map[type] = true
    handleCreateModalVisible(map)
  }
  const closeCreateModal = () => {
    handleCreateModalVisible({})
  }
  const openUpdateModal = (type) => {
    const map = {}
    map[type] = true
    handleUpdateModalVisible(map)
  }
  const closeUpdateModal = () => {
    handleUpdateModalVisible({})
  }

  let columns = [
    {
      title: '检测编号',
      dataIndex: 'id',
      sorter: false,
    },
    {
      title: '检测时间',
      sorter: false,
      dataIndex: 'createdAt',
      valueType: 'dateTime',
    },
    {
      title: '合格情况',
      sorter: false,
      render: record => {
        return <div>3/5</div>
      }
    }
  ];


  const makeColumnOps = (type) => {
    columns.push({
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: () => [
        <a
          key="testit"
          onClick={() => {
            setCurrentRow(record);
            openUpdateModal(type);
          }}
        >
          检测
        </a>,
        <Popover
          key="remove"
          content={
          <a
            onClick={async () => {
              const success = await deleteDsItem('', record.recordId, record.id);
              if (success) {
                if (actionRef[type].current) {
                  actionRef[type].current.reload();
                }
                handleCurrentSelectedPopoverButtonVisible(false)
              }
            }}
          >确认删除</a>}
          trigger="click"
          visible={currentSelectedPopoverButtonVisible === `${record.id}`}
          onVisibleChange={visible => handleCurrentSelectedPopoverButtonVisible(visible ? `${record.id}` : null)}
        >
          <a>删除</a>
        </Popover>,
      ],
    })
  }

  return (
    <PageContainer>
       <Tabs defaultActiveKey="透析机消毒检测" onChange={null}>
        {
          DS_GROUP_TYPES.map(type => {
            return <Tabs.TabPane tab={type} key={type}>
            <ProTable
              headerTitle={type}
              actionRef={actionRef[type]}
              rowKey="key"
              search={false}
              toolBarRender={() => [
                <Button
                  type="primary"
                  key="create_group"
                  onClick={() => {
                    openCreateModal(type)
                  }}
                >
                  <PlusOutlined /> 新增{type}记录
                </Button>,
              ]}
              request={arg => pageDs(type, arg)}
              columns={columns}
            />
            <DsGroupForm
              title={`新增${type}记录`}
              type={type}
              onSubmit={async (value) => {
                const groupResp = await createDsGroup(type, {}); // empty payload is ok
                const group = groupResp.data
                const success = await createDsItem(type, group.id, value);
                if (success) {
                  closeCreateModal();
                  setCurrentRow(undefined);
                  if (actionRef[type].current) {
                    actionRef[type].current.reload();
                  }
                }
              }}
              onCancel={() => {
                closeCreateModal()
              }}
              visible={createModalVisible[type]}
            />
            <DsGroupForm
              title={type}
              type={type}
              onSubmit={async (value) => {
                const { id, recordId } = currentRow || {};
                const success = await updateDsItem(type, recordId, id, value);
                if (success) {
                  closeUpdateModal();
                  setCurrentRow(undefined);
                  if (actionRef[type].current) {
                    actionRef[type].current.reload();
                  }
                }
              }}
              onCancel={() => {
                closeUpdateModal();
                setCurrentRow(undefined);
              }}
              visible={updateModalVisible[type]}
              values={currentRow || {}}
            />
          </Tabs.TabPane>
          })
        }
      </Tabs>
    </PageContainer>
  );
};

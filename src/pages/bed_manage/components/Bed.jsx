import React, { useState } from 'react';
import { EditableProTable } from '@ant-design/pro-table';
import { Card, Popover, message } from 'antd';
import { listBeds, createBed, deleteBed, updateBed } from '@/services/histsys/bed_manage';
import DeviceSelect from '@/pages/dashboard/components/DeviceSelect';

export default ({area={}, ...props}) => {
  const [editableKeys, setEditableRowKeys] = useState([]);
  const [currentSelectedPopoverButtonVisible, handleCurrentSelectedPopoverButtonVisible] = useState(false);

  const columns = [
    {
      title: '床位名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '类型',
      key: 'type',
      dataIndex: 'type',
      valueType: 'select',
      valueEnum: {
        床: {
          status: 'Success',
          text: '床',
        },
        椅: {
          color: 'blue',
          text: '椅',
        },
      },
    },
    {
      title: '绑定设备',
      key: 'device',
      width: 200,
      // dataIndex: 'device',
      render: record => {
        const device = record.device || {}
        if (device && device.id) {
          if (device.bed && device.bed.id !== record.id) {
            return <div>{`${device.name}(${device.type})`}<span style={{color: '#999', fontSize: 12}}>{`<该设备已被其他床位绑定>`}</span></div>
          }
          return `${device.name}(${device.type})`
        }
        return <div style={{fontSize: 12, color: '#999'}}>{'<未绑定设备>'}</div>
      },
      renderFormItem: record => {
        return <DeviceSelect record={record.device}/>
      }
    },
    {
      title: '备注',
      dataIndex: 'remark',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <Popover
          key="delete"
          content={
          <a 
            onClick={async () => {
              const success = await deleteBed(record.id);
              if (success) {
                if (props.bedActionRef && props.bedActionRef.current) {
                  props.bedActionRef.current.reload();
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
    },
  ];

  let virusName = '<未选择类型>'
  if (area.virus) {
    virusName = area.virus === '无' ? '' : `（${area.virus}）`
  }
  const areaName = (area.name || '<未命名>') + virusName

  return (
    <div>
      <Card>
        <div style={{fontSize: 20, fontWeight: 500}}>
          床位
          <span style={{fontSize: 14, fontWeight: 400, marginLeft: 12}}>【当前区域：{areaName}】</span>
        </div>
      </Card>
      <EditableProTable
        rowKey="id"
        actionRef={props.bedActionRef}
        // headerTitle=
        columns={columns}
        request={args => listBeds(area.id, args)}
        recordCreatorProps={{creatorButtonText: `新建 ${area.name ? `（${area.name}）` : ''} 床位`, onlyAddOneLineAlertMessage: "请先提交未保存的数据", record: {isCreate: true, id: -1*(new Date().getTime())}}}
        editable={{
          editableKeys,
          onSave: async (rowKey, data) => {
            const payload = JSON.parse(JSON.stringify(data || {}))
            delete payload.createdAt
            delete payload.updatedAt
            delete payload.index
            if (payload.device) {
              payload.deviceId = payload.device.id
            }
            if (payload.isCreate) {
              const resp = await createBed({...payload, bedAreaId: area.id});
              if (resp.status === 201) {
                if (props.bedActionRef && props.bedActionRef.current) {
                  props.bedActionRef.current.reload();
                }
                message.info(resp.message || '创建成功')
              }
            } else {
              const resp = await updateBed(payload.id, payload); // area 不可更改
              if (resp.status === 200) {
                if (props.bedActionRef && props.bedActionRef.current) {
                  props.bedActionRef.current.reload();
                }
                message.info(resp.message || '更新成功')
              }
            }
          },
          onChange: setEditableRowKeys,
          actionRender: (row, config, dom) => [dom.save, dom.cancel],
        }}
      />
    </div>
  );
};

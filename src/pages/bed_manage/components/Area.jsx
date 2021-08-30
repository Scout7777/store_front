import React, { useState, useRef } from 'react';
import { EditableProTable } from '@ant-design/pro-table';
import { Popover } from 'antd';
import { getAreas, createArea, deleteArea, updateArea } from '@/services/histsys/bed';

export default (props) => {
  const [editableKeys, setEditableRowKeys] = useState([]);
  const [currentSelectedPopoverButtonVisible, handleCurrentSelectedPopoverButtonVisible] = useState(false);
  const actionRef = useRef()

  const columns = [
    {
      title: '分区名称',
      dataIndex: 'name',
      key: 'name',
      width: 120,
    },
    {
      title: '类型',
      key: 'virus',
      dataIndex: 'virus',
      // width: 120,
      valueType: 'select',
      valueEnum: {
        无: {
          text: '无',
        },
        乙肝: {
          text: '乙肝',
        },
        丙肝: {
          text: '丙肝',
        },
        梅毒: {
          text: '梅毒',
        },
        艾滋: {
          text: '艾滋',
        },
      },
    },
    {
      title: '操作',
      valueType: 'option',
      width: 120,
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
              const success = await deleteArea(record.id);
              if (success) {
                if (actionRef.current) {
                  actionRef.current.reload();
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

  const handleOnRowSelected = (record, _rowKey) => {
    // console.log(record, rowKey)
    return {
      onClick: _event => {
        // console.log('click!', record, rowKey)
        if (!record.isCreate && props.onAreaSelect) {
          props.onAreaSelect(record)
        }
      }, // 点击行
      onDoubleClick: _ => {},
      onContextMenu: _ => {},
      onMouseEnter: _ => {}, // 鼠标移入行
      onMouseLeave: _ => {},
    }
  }

  const handleOnTableChange = (rows, _rowKeys) => {
    // console.log({rowkeys, rows})
    if (rows && rows.length > 0 && props.onAreaSelect) {
      props.onAreaSelect(rows[0])
    }
  }

  return (
    <EditableProTable
      rowKey="id"
      headerTitle="区域"
      actionRef={actionRef}
      columns={columns}
      request={getAreas}
      onChange={handleOnTableChange}
      onRow={handleOnRowSelected}
      style={{cursor: 'pointer'}}
      recordCreatorProps={{creatorButtonText: "新建区域", onlyAddOneLineAlertMessage: "请先提交未保存的数据", record: {isCreate: true, id: -1*(new Date().getTime())}}}
      editable={{
        editableKeys,
        onSave: async (rowKey, data) => {
          let resp = null
          if (data.isCreate) {
            resp = await createArea(data);
          } else {
            resp = await updateArea(data.id, data);
          }
          if (resp && actionRef.current) {
            actionRef.current.reload();
          }
        },
        onChange: setEditableRowKeys,
        actionRender: (row, config, dom) => [dom.save, dom.cancel],
      }}
    />
  );
};

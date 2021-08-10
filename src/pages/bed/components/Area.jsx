import React, { useState } from 'react';
// import { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
// import ProField from '@ant-design/pro-field';
// import { ProFormRadio } from '@ant-design/pro-form';
// import ProCard from '@ant-design/pro-card';
import { Modal } from 'antd';
import { getAreas, createArea, deleteArea, updateArea } from '@/services/histsys/bed';

export default (props) => {
  const [editableKeys, setEditableRowKeys] = useState([]);
  const [dataSource, setDataSource] = useState([]);

  const columns = [
    {
      title: '分区名称',
      dataIndex: 'name',
      key: 'name',
      // formItemProps: (form, { rowIndex }) => {
      //   return {
      //     rules: rowIndex > 2 ? [{ required: true, message: '此项为必填项' }] : [],
      //   };
      // },
    },
    {
      title: '类型',
      key: 'virus',
      dataIndex: 'virus',
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
        <a
          key="delete"
          onClick={async () => {
            setDataSource(dataSource.filter((item) => item.id !== record.id));
            const resp = await deleteArea(record.id);
            console.log(resp);
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  return (
    <Modal
      visible={props.visible}
      onCancel={props.onFinish}
      onOk={props.onFinish}
      width={900}
      destroyOnClose={true}
    >
      <EditableProTable
        rowKey="id"
        headerTitle="区域管理"
        columns={columns}
        request={getAreas}
        value={dataSource}
        onChange={setDataSource}
        editable={{
          type: 'multiple',
          editableKeys,
          onSave: async (rowKey, data) => {
            if (data.id) {
              const resp = await updateArea(data.id, data);
              console.log(resp);
            } else {
              const resp = await createArea(data);
              console.log(resp);
            }
          },
          onChange: setEditableRowKeys,
        }}
      />
    </Modal>
  );
};

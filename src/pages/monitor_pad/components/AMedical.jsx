import React, { useState } from 'react';
// import { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
// import ProField from '@ant-design/pro-field';
// import { ProFormRadio } from '@ant-design/pro-form';
// import ProCard from '@ant-design/pro-card';
import { Modal } from 'antd';

export default (props) => {
  const [editableKeys, setEditableRowKeys] = useState([]);
  const [dataDrag, setDataDrag] = useState([]);
  const [dataNursing, setDataNursing] = useState([]);

  const nursing = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      // formItemProps: (form, { rowIndex }) => {
      //   return {
      //     rules: rowIndex > 2 ? [{ required: true, message: '此项为必填项' }] : [],
      //   };
      // },
    },
    {
      title: '数量',
      dataIndex: 'amount',
      key: 'amount',
      // formItemProps: (form, { rowIndex }) => {
      //   return {
      //     rules: rowIndex > 2 ? [{ required: true, message: '此项为必填项' }] : [],
      //   };
      // },
    },
    {
      title: '时间',
      dataIndex: 'date',
      key: 'date',
      valueType: 'time',
      // formItemProps: (form, { rowIndex }) => {
      //   return {
      //     rules: rowIndex > 2 ? [{ required: true, message: '此项为必填项' }] : [],
      //   };
      // },
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
            setDataNursing(dataNursing.filter((item) => item.id !== record.id));
            console.log(resp);
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  const drug = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      // formItemProps: (form, { rowIndex }) => {
      //   return {
      //     rules: rowIndex > 2 ? [{ required: true, message: '此项为必填项' }] : [],
      //   };
      // },
    },
    {
      title: '数量',
      dataIndex: 'amount',
      key: 'amount',
      // formItemProps: (form, { rowIndex }) => {
      //   return {
      //     rules: rowIndex > 2 ? [{ required: true, message: '此项为必填项' }] : [],
      //   };
      // },
    },
    {
      title: '单位',
      dataIndex: 'unit',
      key: 'unit',
      // formItemProps: (form, { rowIndex }) => {
      //   return {
      //     rules: rowIndex > 2 ? [{ required: true, message: '此项为必填项' }] : [],
      //   };
      // },
    },
    {
      title: '用法',
      dataIndex: 'method',
      key: 'method',
      // formItemProps: (form, { rowIndex }) => {
      //   return {
      //     rules: rowIndex > 2 ? [{ required: true, message: '此项为必填项' }] : [],
      //   };
      // },
    },
    {
      title: '频率',
      dataIndex: 'freq',
      key: 'freq',
      // formItemProps: (form, { rowIndex }) => {
      //   return {
      //     rules: rowIndex > 2 ? [{ required: true, message: '此项为必填项' }] : [],
      //   };
      // },
    },
    {
      title: '使用时机',
      dataIndex: 'use',
      key: 'use',
      // formItemProps: (form, { rowIndex }) => {
      //   return {
      //     rules: rowIndex > 2 ? [{ required: true, message: '此项为必填项' }] : [],
      //   };
      // },
    },
    {
      title: '时间',
      dataIndex: 'date',
      key: 'date',
      valueType: 'time',
      // formItemProps: (form, { rowIndex }) => {
      //   return {
      //     rules: rowIndex > 2 ? [{ required: true, message: '此项为必填项' }] : [],
      //   };
      // },
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
            setDataDrag(dataDrag.filter((item) => item.id !== record.id));
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
        headerTitle="护理"
        columns={nursing}
        value={dataNursing}
        onChange={setDataNursing}
        editable={{
          type: 'multiple',
          editableKeys,
          onSave: async (rowKey, data) => {
            if (data.id) {
              console.log(data.id);
            } else {
              console.log(新建);
            }
          },
          onChange: setEditableRowKeys,
        }}
      />
      <EditableProTable
        rowKey="id"
        headerTitle="药品"
        columns={drug}
        value={dataDrag}
        onChange={setDataDrag}
        editable={{
          type: 'multiple',
          editableKeys,
          onSave: async (rowKey, data) => {
            if (data.id) {
              console.log(data.id);
            } else {
              console.log(新建);
            }
          },
          onChange: setEditableRowKeys,
        }}
      />
    </Modal>
  );
};

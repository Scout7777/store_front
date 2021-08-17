import React, { useState } from 'react';
// import { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import ProField from '@ant-design/pro-field';
// import { ProFormRadio } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { createAllergy } from '@/services/histsys/patient';
import { notification } from 'antd';

// const waitTime = (time = 100) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, time);
//   });
// };

export default (props) => {
  const [editableKeys, setEditableRowKeys] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [position] = useState('bottom');

  const columns = [
    {
      title: '过敏源',
      dataIndex: 'name',
      formItemProps: (form, { rowIndex }) => {
        return {
          rules: rowIndex > 2 ? [{ required: true, message: '此项为必填项' }] : [],
        };
      },
      // 第二行不允许编辑
      // editable: (text, record, index) => {
      //   return index !== 0;
      // },
    },
    {
      title: '过敏类型',
      key: 'type',
      dataIndex: 'type',
      valueType: 'select',
      valueEnum: {
        药物过敏史: {
          text: '药物',
          status: 'Error',
        },
        过敏透析器: {
          text: '透析器',
          status: 'Success',
        },
        其他过敏: {
          text: '其他',
          status: 'Info',
        },
      },
    },
    {
      title: '备注',
      dataIndex: 'remark',
      // fieldProps: (from, { rowKey, rowIndex }) => {
      //   if (from.getFieldValue([rowKey || '', 'title']) === '不好玩') {
      //     return {
      //       disabled: true,
      //     };
      //   }
      //   if (rowIndex > 9) {
      //     return {
      //       disabled: true,
      //     };
      //   }
      //   return {};
      // },
    },
    // {
    //   title: '创建时间',
    //   dataIndex: 'created_at',
    //   valueType: 'date',
    // },
    {
      title: '操作',
      valueType: 'option',
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
          onClick={() => {
            setDataSource(dataSource.filter((item) => item.id !== record.id));
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  return (
    <>
      <EditableProTable
        rowKey="id"
        headerTitle="过敏记录"
        maxLength={5}
        recordCreatorProps={
          position !== 'hidden'
            ? {
                position: 'bottom',
                record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
              }
            : false
        }
        columns={columns}
        // request={async () => ({
        //   data: defaultData,
        //   total: 3,
        //   success: true,
        // })}
        // dataSource={defaultData}
        value={dataSource}
        onChange={setDataSource}
        editable={{
          type: 'multiple',
          editableKeys,
          onSave: async (rowKey, data, row) => {
            console.log(rowKey, data, row);
            const reform = data;
            delete reform.id;
            delete reform.index;
            if (props?.id) {
              await createAllergy(props.id, reform);
            } else
              notification.open({
                description: '请先创建患者',
                message: '消息',
              });
          },
          onChange: setEditableRowKeys,
        }}
      />
      <ProCard title="表格数据" headerBordered collapsible defaultCollapsed>
        <ProField
          fieldProps={{
            style: {
              width: '100%',
            },
          }}
          mode="read"
          valueType="jsonCode"
          text={JSON.stringify(dataSource)}
        />
      </ProCard>
    </>
  );
};

import React, { useState } from 'react';
// import { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import ProField from '@ant-design/pro-field';
// import { ProFormRadio } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const defaultData = [
  {
    id: 624748504,
    title: '并发症1',
    decs: '请勿使用',
    state: 'b',
    created_at: '2020-05-26T09:42:56Z',
    update_at: '2020-05-26T09:42:56Z',
  },
];

export default () => {
  const [editableKeys, setEditableRowKeys] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [position] = useState('bottom');

  const columns = [
    {
      title: '并发症名称',
      dataIndex: 'title',
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
      title: '血管通路',
      key: 'access',
      dataIndex: 'access',
      valueType: 'select',
      valueEnum: {
        a: '通路一',
        b: '通路二',
        c: '通路三',
      },
    },
    {
      title: '发现时间',
      dataIndex: 'find_at',
      valueType: 'date',
    },
    {
      title: '并发症',
      key: 'access',
      dataIndex: 'com',
      valueType: 'select',
      valueEnum: {
        a: '类型一',
        b: '类型二',
        c: '类型三',
      },
    },
    {
      title: '处理时间',
      dataIndex: 'handle_at',
      valueType: 'date',
    },
    {
      title: '溶栓时间',
      dataIndex: 'rong_at',
      valueType: 'date',
    },
    {
      title: '溶栓次数',
      dataIndex: 'times',
      valueType: 'digit',
    },
    {
      title: 'PAT时间',
      dataIndex: 'rong_at',
      valueType: 'date',
    },
    {
      title: 'PAT压力',
      dataIndex: 'times',
      valueType: 'digit',
    },
    {
      title: 'PAT次数',
      dataIndex: 'patTimes',
      valueType: 'digit',
    },
    {
      title: '失功原因',
      dataIndex: 'reason',
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
        headerTitle="血管通路并发症"
        scroll={{ x: 100 }}
        recordCreatorProps={
          position !== 'hidden'
            ? {
                position: 'bottom',
                record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
              }
            : false
        }
        columns={columns}
        request={async () => ({
          data: defaultData,
          total: 3,
          success: true,
        })}
        value={dataSource}
        onChange={setDataSource}
        editable={{
          type: 'multiple',
          editableKeys,
          onSave: async (rowKey, data, row) => {
            console.log(rowKey, data, row);
            await waitTime(2000);
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

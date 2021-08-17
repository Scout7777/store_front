import React, { useState, useEffect } from 'react';
// import { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import ProField from '@ant-design/pro-field';
// import { ProFormRadio } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { createChronicComp } from '@/services/histsys/patient';
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
  const [dataSource, setDataSource] = useState(props?.originData);
  const [position] = useState('bottom');

  useEffect(() => {
    setDataSource(props.originData);
  }, [props.originData]);

  const columns = [
    {
      title: '并发症类型',
      key: 'type',
      dataIndex: 'type',
      valueType: 'text',
    },
    {
      title: '并发症细类',
      dataIndex: 'childType',
      valueType: 'text',
    },
    {
      title: '转归',
      dataIndex: 'outcome',
      valueType: 'text',
    },
    {
      title: '并发症时间',
      dataIndex: 'compAt',
      valueType: 'date',
    },

    {
      title: '转归时间',
      dataIndex: 'outcomeAt',
      valueType: 'date',
    },

    {
      title: '处置',
      dataIndex: 'outcomeHandleText',
      valueType: 'text',
    },
    {
      title: 'comps',
      dataIndex: 'comps',
      valueType: 'checkbox',
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
        headerTitle="慢性并发症"
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
        value={dataSource}
        onChange={setDataSource}
        editable={{
          type: 'multiple',
          editableKeys,
          onSave: async (rowKey, data) => {
            const reform = data;

            delete reform.index;
            console.log(reform);
            if (props?.id) {
              await createChronicComp(props.id, reform);
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

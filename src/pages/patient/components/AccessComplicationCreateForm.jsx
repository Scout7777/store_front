import React, { useState, useEffect } from 'react';
// import { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import ProField from '@ant-design/pro-field';
// import { ProFormRadio } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { createVascularAccessComp } from '@/services/histsys/patient';
import { notification } from 'antd';
// import { ProFormSelect } from '@ant-design/pro-form';
// import { getAreas } from '@/services/histsys/bed';

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
  const [access, setAccess] = useState({});

  useEffect(() => {
    setDataSource(props.originData);
    console.log(props.vasculardata);
    const originData = props.vasculardata;
    const value = {};
    // eslint-disable-next-line no-plusplus
    if (props?.vasculardata) {
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < originData.length; i++) {
        value[`${originData[i].id}`] = { text: `${originData[i].type}${originData[i].id}` };
      }
    } else
      notification.open({
        description: '请先创建血管通路',
        message: '消息',
      });
    console.log(value);
    setAccess(value);
  }, [props.originData, props.vasculardata]);

  const columns = [
    {
      title: '并发症名称',
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
      title: '发现时间',
      dataIndex: 'recoverAt',
      valueType: 'date',
    },
    {
      title: '并发症',
      dataIndex: 'comp',
      valueType: 'text',
    },
    {
      title: '处理时间',
      dataIndex: 'processAt',
      valueType: 'date',
    },
    {
      title: '血管通路ID',
      key: 'vascularAccessId',
      dataIndex: 'vascularAccessId',
      valueType: 'select',
      valueEnum: access,
      formItemProps: {
        rules: [{ required: true, message: '此项为必填项' }],
      },
    },
    {
      title: '溶栓时间',
      dataIndex: 'thromboAt',
      valueType: 'date',
    },
    {
      title: '溶栓次数',
      dataIndex: 'thromboCount',
      valueType: 'digit',
    },
    {
      title: 'PAT时间',
      dataIndex: 'patAt',
      valueType: 'date',
    },
    {
      title: 'PAT压力',
      dataIndex: 'patPa',
      valueType: 'float',
    },
    {
      title: 'PAT次数',
      dataIndex: 'patCount',
      valueType: 'digit',
    },
    {
      title: '失功原因',
      dataIndex: 'lossReasonText',
      valueType: 'text',
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
            delete reform.id;
            console.log(reform);
            if (props?.id) {
              await createVascularAccessComp(props.id, reform);
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

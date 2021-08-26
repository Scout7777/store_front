import React, { useState, useEffect } from 'react';
// import { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import ProField from '@ant-design/pro-field';
// import { ProFormRadio } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { createVascularAccess } from '@/services/histsys/patient';
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
  // const [disable,setdisable] =useState();

  useEffect(() => {
    setDataSource(props.originData);
  }, [props.originData]);

  const columns = [
    {
      title: '通路类型',
      key: 'type',
      dataIndex: 'type',
      valueType: 'select',
      valueEnum: {
        动静脉自体内膜: {
          text: ' 动静脉自体内膜 ',
        },
        动静脉人工内膜: {
          text: '动静脉人工内膜',
        },
        中心静脉长期导管: {
          text: '中心静脉长期导管',
        },
        中心静脉临时导管: {
          text: '中心静脉临时导管',
        },
      },
    },
    {
      title: '英文简写',
      key: 'type',
      dataIndex: 'type',
      valueType: 'select',
      valueEnum: {
        动静脉自体内膜: {
          text: ' AVF ',
        },
        动静脉人工内膜: {
          text: 'AVG',
        },
        中心静脉长期导管: {
          text: 'TDC',
        },
        中心静脉临时导管: {
          text: 'CVC',
        },
      },
    },

    {
      title: '方向',
      key: 'direction',
      dataIndex: 'direction',
      valueType: 'select',
      valueEnum: {
        left: {
          text: '左',
        },
        right: {
          text: '右',
        },
      },
    },
    {
      title: '部位',
      key: 'partition',
      dataIndex: 'partition',
      valueType: 'select',
      valueEnum: {
        upperLimbs: {
          text: ' 上肢 ',
        },
        lowerLimbs: {
          text: '下肢',
        },
        neck: {
          text: '颈部',
        },
      },
    },
    {
      title: '手术吻合方式',
      key: 'surgicalAnastomosisMethod',
      dataIndex: 'surgicalAnastomosisMethod',
      valueType: 'select',
      valueEnum: {
        terminoTerminalAnastomosis: {
          text: ' 端端吻合 ',
        },
        endToSideAnastomosis: {
          text: '端侧吻合',
        },
      },
    },
    {
      title: '是否启用',
      dataIndex: 'active',
      valueType: 'switch',
    },
    {
      title: '启用时间',
      dataIndex: 'activeAt',
      valueType: 'date',
    },
    {
      title: '是否弃用',
      dataIndex: 'disable',
      valueType: 'switch',
    },
    {
      title: '弃用原因',
      valueType: 'select',
      dataIndex: 'disableReasonText',
      valueEnum: {
        narrow: {
          text: ' 狭窄 ',
        },
        thrombus: {
          text: '血栓形成',
        },
        infected: {
          text: '感染',
        },
        other: {
          text: '其他',
        },
      },
    },
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
        headerTitle="血管通路"
        // maxLength={5}
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
              await createVascularAccess(props.id, reform);
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

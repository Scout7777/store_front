import React, { useState, useEffect } from 'react';
// import { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import ProField from '@ant-design/pro-field';
// import { ProFormRadio } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { Button, notification } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { createInfectiousDisease } from '@/services/histsys/patient';

// const waitTime = (time = 100) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, time);
//   });
// };

const status = {
  positive: {
    text: ' + ',
    status: 'positive',
  },
  negative: {
    text: ' - ',
    status: 'negative',
  },
  uncheck: {
    text: ' /',
    status: 'uncheck',
  },
};

const state = {
  positive: {
    text: ' + ',
    status: 'positive',
  },
  negative: {
    text: ' - ',
    status: 'negative',
  },
};

export default (props) => {
  const [editableKeys, setEditableRowKeys] = useState([]);
  const [dataSource, setDataSource] = useState(props?.originData);
  const [position] = useState('bottom');

  // const formRef = useRef();

  useEffect(() => {
    setDataSource(props.originData);
  }, [props.originData]);

  const columns = [
    // {
    //   title: '过敏源',
    //   dataIndex: 'title',
    //   formItemProps: (form, { rowIndex }) => {
    //     return {
    //       rules: rowIndex > 2 ? [{ required: true, message: '此项为必填项' }] : [],
    //     };
    //   },
    //   // 第二行不允许编辑
    //   // editable: (text, record, index) => {
    //   //   return index !== 0;
    //   // },
    //   width: '30%',
    // },
    {
      title: '乙肝',
      dataIndex: 'hB',
      valueType: 'radio',
      valueEnum: state,
      children: [
        { title: '乙肝表面抗原', dataIndex: 'hBsAg', valueType: 'radio', valueEnum: status },
        { title: '乙肝表面抗体', dataIndex: 'hBsAb', valueType: 'radio', valueEnum: status },
        { title: '乙肝e抗原', dataIndex: 'hBeAg', valueType: 'radio', valueEnum: status },
        { title: '乙肝e抗体', dataIndex: 'hBeAb', valueType: 'radio', valueEnum: status },
        { title: '乙肝核心抗体', dataIndex: 'hBcAb', valueType: 'radio', valueEnum: status },
        { title: '乙肝DNA测量', dataIndex: 'hBDna', valueType: 'radio', valueEnum: status },
        { title: '乙肝DNA测量值', dataIndex: 'hBDnaValue', valueType: 'float' },
      ],
    },
    {
      title: '丙肝',
      dataIndex: 'hC',
      valueType: 'radio',
      valueEnum: state,
      children: [
        { title: '丙肝抗体', dataIndex: 'hCAb', valueType: 'radio', valueEnum: status },
        { title: '丙肝RNA', dataIndex: 'hCRna', valueType: 'radio', valueEnum: status },
      ],
    },
    {
      title: '梅毒',
      dataIndex: 'syphilis',
      valueType: 'radio',
      valueEnum: state,
      children: [
        { title: '梅毒TPPA', dataIndex: 'syphilisTPPA', valueType: 'radio', valueEnum: status },
        { title: '梅毒RPR', dataIndex: 'syphilisRPR', valueType: 'radio', valueEnum: status },
        { title: '梅毒Trust', dataIndex: 'syphilisTrust', valueType: 'radio', valueEnum: status },
        {
          title: '滴度',
          dataIndex: 'titer',
          valueType: 'float',
        },
      ],
    },

    {
      title: '艾滋',
      dataIndex: 'aids',
      valueType: 'radio',
      valueEnum: state,
    },
    { title: '检验日期', dataIndex: 'testAt', valueType: 'date' },
    { title: '下次检验日期', dataIndex: 'nextTestAt', valueType: 'date' },
    { title: '备注', dataIndex: 'remark' },
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
        headerTitle="传染病检查"
        // maxLength={5}
        recordCreatorProps={
          position !== 'hidden'
            ? {
                position: 'bottom',
                record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
              }
            : false
        }
        toolBarRender={() => [
          <Button type="primary" key="primary">
            <PlusOutlined />
            从HIS导入
          </Button>,
        ]}
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
            reform.hB =
              reform.hBsAg === 'positive' ||
              reform.hBsAb === 'positive' ||
              reform.hBeAg === 'positive' ||
              reform.hBeAb === 'positive' ||
              reform.hBcAb === 'positive'
                ? 'positive'
                : 'negative';

            reform.hC =
              reform.hCAb === 'positive' || reform.hCRna === 'positive' ? 'positive' : 'negative';

            reform.syphilis =
              reform.syphilisTPPA === 'positive' ||
              reform.syphilisRPR === 'positive' ||
              reform.syphilisTrust === 'positive'
                ? 'positive'
                : 'negative';

            console.log(reform);
            delete reform.id;
            delete reform.index;
            console.log(props);
            if (props?.id) {
              await createInfectiousDisease(props.id, reform);
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

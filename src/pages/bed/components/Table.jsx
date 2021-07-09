import React, { useEffect, useState } from 'react';
// import { BadgeProps } from 'antd';
import { Button, Badge } from 'antd';
// import { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import ProCard from '@ant-design/pro-card';
// @ts-ignore
import styles from './split.less';

// type TableListItem = {
//   createdAtRange?: number[];
//   createdAt: number;
//   code: string;
// };

// type DetailListProps = {
//   ip: string;
// };

const DetailList = (props) => {
  const { ip } = props;
  const [tableListDataSource, setTableListDataSource] = useState([]);

  const columns = [
    {
      title: '透析时间',
      key: 'createdAt',
      dataIndex: 'createdAt',
      valueType: 'dateTime',
    },
    {
      title: '患者摘要',
      key: 'code',
      //   width: 80,
      dataIndex: 'code',
      valueType: 'code',
    },
    {
      title: '操作',
      key: 'option',
      //   width: 80,
      valueType: 'option',
      render: () => [
        <a key="a">预警</a>,
        <a key="a">备注</a>,
        <a key="a">临时调整</a>,
        <a key="a">长期调整</a>,
      ],
    },
  ];

  useEffect(() => {
    const source = [];
    for (let i = 0; i < 20; i += 1) {
      source.push({
        createdAt: Date.now() - Math.floor(Math.random() * 10000),
        code: `const getData = async params => {
          const data = await getData(params);
          return { list: data.data, ...data };
        };`,
        key: i,
      });
    }

    setTableListDataSource(source);
  }, [ip]);

  return (
    <ProTable
      columns={columns}
      dataSource={tableListDataSource}
      pagination={{
        pageSize: 5,
        showSizeChanger: false,
      }}
      rowKey="key"
      toolBarRender={false}
      search={false}
    />
  );
};

// type statusType = BadgeProps['status'];

const valueEnum = ['success', 'error', 'processing', 'default'];

// export type IpListItem = {
//   ip?: string;
//   cpu?: number | string;
//   mem?: number | string;
//   disk?: number | string;
//   status: statusType;
// };

const ipListDataSource = [];

for (let i = 0; i < 20; i += 1) {
  ipListDataSource.push({
    ip: `${i + 1}床`,
    cpu: 10,
    mem: 20,
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    disk: 30,
  });
}

// type IPListProps = {
//   ip: string;
//   onChange: (id: string) => void;
// };

const IPList = (props) => {
  const { onChange, ip } = props;

  const columns = [
    {
      title: '床位',
      key: 'ip',
      dataIndex: 'ip',
      render: (_, item) => {
        return <Badge status={item.status} text={item.ip} />;
      },
    },
    {
      title: '预留1',
      key: 'cpu',
      dataIndex: 'cpu',
      valueType: {
        type: 'percent',
        precision: 0,
      },
    },
    {
      title: '预留2',
      key: 'mem',
      dataIndex: 'mem',
      valueType: {
        type: 'percent',
        precision: 0,
      },
    },
    {
      title: '预留3',
      key: 'disk',
      dataIndex: 'disk',
      valueType: {
        type: 'percent',
        precision: 0,
      },
    },
  ];
  return (
    <ProTable
      scroll={{ y: 750 }}
      columns={columns}
      request={(params, sorter, filter) => {
        // 表单搜索项会从 params 传入，传递给后端接口。
        console.log(params, sorter, filter);
        return Promise.resolve({
          data: ipListDataSource,
          success: true,
        });
      }}
      rowKey="ip"
      rowClassName={(record) => {
        return record.ip === ip ? styles['split-row-select-active'] : '';
      }}
      toolbar={{
        search: {
          onSearch: (value) => {
            alert(value);
          },
        },
        actions: [
          <Button key="list" type="primary">
            新建床位
          </Button>,
        ],
      }}
      options={false}
      pagination={false}
      search={false}
      onRow={(record) => {
        return {
          onClick: () => {
            if (record.ip) {
              onChange(record.ip);
            }
          },
        };
      }}
    />
  );
};

const Table = () => {
  const [ip, setIp] = useState('1床');
  return (
    <ProCard split="vertical">
      <ProCard colSpan="384px" ghost>
        <IPList onChange={(cIp) => setIp(cIp)} ip={ip} />
      </ProCard>
      <ProCard title={ip}>
        <DetailList ip={ip} />
      </ProCard>
    </ProCard>
  );
};

export default Table;

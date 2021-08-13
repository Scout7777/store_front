import React, { useEffect, useState, useRef } from 'react';
// import { BadgeProps } from 'antd';
import { Button, Space, Tag, Popover } from 'antd';
// import { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import ProCard from '@ant-design/pro-card';
import { FilterOutlined } from '@ant-design/icons';
import { LightFilter, ProFormSelect, ProFormRadio, ProFormDatePicker } from '@ant-design/pro-form';
// @ts-ignore
import styles from './split.less';
import Area from './Area';
import { getAreas, getWeek, getTemplateWeek } from '@/services/histsys/bed';

// type TableListItem = {
//   createdAtRange?: number[];
//   createdAt: number;
//   code: string;
// };

// type DetailListProps = {
//   ip: string;
// };
const PopTag = (props) => {
  const [visible, setVisible] = useState(false);

  const { lable, color } = props;

  function hide() {
    setVisible(false);
  }

  function handleVisibleChange(value) {
    setVisible({ value });
  }

  return (
    <Popover
      content={
        <Space>
          <a onClick={hide}>请假</a>
          <a onClick={hide}>移除</a>
          <a onClick={hide}>其他操作</a>
          <a onClick={hide}>取消</a>
        </Space>
      }
      title="操作"
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
      <Tag color={color}>{lable}</Tag>
    </Popover>
  );
};

const DetailList = (props) => {
  const { filter, seq } = props;
  const [tableListDataSource, setTableListDataSource] = useState([]);
  const [areaShow, setAreaShow] = useState(false);
  // const [Week, setWeek] = useState(202134);

  const columns = [
    {
      title: '区域',
      dataIndex: 'name',
    },
    {
      title: '上午班',
      dataIndex: 'Morning',
      render: (_, record) => (
        <Space wrap>
          {record.Morning?.patients?.map((patient) =>
            patient.weekSeq === seq ? <PopTag lable={patient.patient?.patientName}></PopTag> : null,
          )}
        </Space>
      ),
    },
    {
      title: '下午班',
      dataIndex: 'Afternoon',
      render: (_, record) => {
        <Space wrap>
          {record.Afternoon?.patients?.map((patient) =>
            patient.weekSeq === seq ? <PopTag lable={patient.patient?.patientName}></PopTag> : null,
          )}
        </Space>;
      },
    },
    {
      title: '晚上班',
      dataIndex: 'Evening',
      render: (_, record) => (
        <Space wrap>
          {record.Evening?.patients?.map((patient) =>
            patient.weekSeq === seq ? <PopTag lable={patient.patient?.patientName}></PopTag> : null,
          )}
        </Space>
      ),
    },
    // {
    //   title: '操作',
    //   key: 'option',
    //   //   width: 80,
    //   valueType: 'option',
    //   render: () => [
    //     <a key="a">预警</a>,
    //     <a key="a">备注</a>,
    //     <a key="a">临时调整</a>,
    //     <a key="a">长期调整</a>,
    //   ],
    // },
  ];

  useEffect(() => {
    async function Source() {
      const source = await getAreas();
      await getTemplateWeek(filter?.week ? filter.week : 202134).then((res) => {
        const raw = res.data;
        const reformData = source.data.map((item) => {
          const all = [];
          // 遍历全部选区域的
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < raw.length; i++) {
            if (raw[i].bedArea.id === item.id) {
              all.push(raw[i]);
            }
          }
          const today = [];
          const form = {};
          // 遍历区域内的筛选时间的
          // eslint-disable-next-line no-plusplus
          for (let j = 0; j < all.length; j++) {
            if (all[j].day === filter.day) {
              today.push(all[j]);
            }
          }
          // eslint-disable-next-line no-plusplus
          for (let k = 0; k < today.length; k++) {
            switch (all[k].bedTime) {
              case 'Morning':
                form['Morning'] = today[k];
                break;
              case 'Afternoon':
                form['Afternoon'] = today[k];
                break;
              case 'Evening':
                form['Evening'] = today[k];
                break;
              default:
            }
          }
          form.name = item.name;
          form.id = item.id;
          console.log(form);
          return form;
        });
        console.log(reformData);
        setTableListDataSource(reformData);
      });
    }
    Source();
    // week()
  }, [filter]);

  return (
    <div>
      <ProTable
        scroll={{ x: '100' }}
        headerTitle="执行排床"
        columns={columns}
        dataSource={tableListDataSource}
        // dataSource={MockValue}
        pagination={false}
        rowKey="key"
        search={false}
        toolbar={{
          actions: [
            <Button
              key="list"
              type="primary"
              onClick={() => {
                setAreaShow(true);
              }}
            >
              区域管理
            </Button>,
            <Button key="list" type="primary">
              导入模板
            </Button>,
            <Button key="list" type="primary">
              应用上周
            </Button>,
            <Button key="list" type="primary">
              执行排床
            </Button>,
          ],
        }}
      />
      <ProTable
        scroll={{ x: '100' }}
        headerTitle="排床模板"
        columns={columns}
        dataSource={tableListDataSource}
        pagination={false}
        rowKey="key"
        search={false}
      />
      <Area
        onFinish={() => {
          setAreaShow(false);
        }}
        visible={areaShow}
      />
    </div>
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
    ip: `患者${i + 1}`,
    cpu: '2/3',
    mem: 20,
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    disk: 30,
  });
}

// type IPListProps = {
//   ip: string;
//   onChange: (id: string) => void;
// };

const Filter = (props) => {
  const formRef = useRef();
  const { filter } = props;

  useEffect(() => {
    console.log(props);
    formRef?.current?.setFieldsValue({
      week: filter.week,
      day: filter.day,
    });
  }, [props.filter]);

  return (
    <LightFilter
      formRef={formRef}
      initialValues={props.filter}
      bordered
      collapseLabel={<FilterOutlined />}
      onFinish={props.onFilter}
    >
      <ProFormSelect
        name="week"
        // options={["202133", "202134"]}
      />
      <ProFormRadio.Group
        name="day"
        radioType="button"
        options={[
          {
            value: 'Monday',
            label: '周一',
          },
          {
            value: 'Tuesday',
            label: '周二',
          },
          {
            value: 'Wednesday',
            label: '周三',
          },
          {
            value: 'Thursday',
            label: '周四',
          },
          {
            value: 'Friday',
            label: '周五',
          },
          {
            value: 'Saturday',
            label: '周六',
          },
          {
            value: 'Sunday',
            label: '周日',
          },
        ]}
      />
      <ProFormDatePicker name="time" placeholder="指定日期" />
    </LightFilter>
  );
};

const IPList = (props) => {
  const { onChange, ip } = props;

  const columns = [
    {
      title: '姓名',
      key: 'ip',
      dataIndex: 'ip',
    },
    {
      title: '本周执行',
      key: 'cpu',
      dataIndex: 'cpu',
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
        // actions: [
        //   <Button key="list" type="primary">
        //     新建床位
        //   </Button>,
        // ],
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
  const [filter, setFilter] = useState({});
  const [seq, setSeq] = useState({});
  useEffect(() => {
    async function getNow() {
      await getWeek().then((resp) => {
        console.log(resp);
        const now = new Date();
        console.log(now);
        const weekDay = now.getDay();
        console.log(weekDay);
        let time = 'Morning';
        const hour = now.getHours();
        console.log(hour);
        let day = 'Monday';
        switch (weekDay) {
          case 0:
            day = 'Sunday';
            break;
          case 1:
            day = 'Monday';
            break;
          case 2:
            day = 'Tuesday';
            break;
          case 3:
            day = 'Wednesday';
            break;
          case 4:
            day = 'Thursday';
            break;
          case 5:
            day = 'Friday';
            break;
          case 6:
            day = 'Saturday';
            break;
          default:
        }
        if (hour > 12 && hour < 18) {
          time = 'Afternoon';
        } else if (hour > 18) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          time = 'Evening';
        }
        console.log(time);
        setFilter({
          week: resp.data + 1,
          day,
        });
        console.log((resp.data + 1) % 2 === 0 ? 'Even' : 'Odd');
        setSeq((resp.data + 1) % 2 === 0 ? 'Even' : 'Odd');
        console.log(filter);
      });
    }
    getNow();
  }, []);
  return (
    <ProCard split="vertical" scroll={{ x: '100' }}>
      <ProCard colSpan="260px" ghost>
        <IPList onChange={(cIp) => setIp(cIp)} ip={ip} />
      </ProCard>
      <ProCard>
        <Filter
          filter={filter}
          onFilter={(values) => {
            console.log(values);
            setFilter(values);
          }}
        />
        <DetailList filter={filter} seq={seq} />
      </ProCard>
    </ProCard>
  );
};

export default Table;

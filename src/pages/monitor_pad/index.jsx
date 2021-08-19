import React, { useState, useEffect, useRef } from 'react';
// import { PageContainer } from '@ant-design/pro-layout';
import { Row, Col } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
// import { PlusOutlined } from '@ant-design/icons';
import PatientCard from './components/Card';
import MonitorForm from './components/MonitorForm';
import { LightFilter, ProFormSelect, ProFormRadio, ProFormDatePicker } from '@ant-design/pro-form';
import { getAreas, getWeek, getTemplateWeek } from '@/services/histsys/bed';

// const { TabPane } = Tabs;
// import MonitorList from './components/MonitorList';
// import { orange } from '@material-ui/core/colors';

export default () => {
  const [createModalVisible, handleCreateModalVisible] = useState();
  const [currentRow, setCurrentRow] = useState();
  const [filter, setFilter] = useState({});
  const [sourceData, setSourceData] = useState([]);
  const [timeRange, setTimeRange] = useState('Evening');
  const [seq, setSeq] = useState('Evening');
  const formRef = useRef();

  useEffect(() => {
    console.log('筛选');
    console.log(filter);
    async function Source() {
      const source = await getAreas();
      await getTemplateWeek(filter?.week ? filter.week : 202134).then((res) => {
        const raw = res.data;
        const reformData = source.data.map((item) => {
          const all = [];
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < raw.length; i++) {
            if (raw[i].bedArea.id === item.id) {
              all.push(raw[i]);
            }
          }
          const form = {};
          // eslint-disable-next-line no-plusplus
          for (let j = 0; j < all.length; j++) {
            if (all[j].day === filter.day) {
              switch (all[j].bedTime) {
                case 'Morning':
                  form['Morning'] = all[j];
                  break;
                case 'Afternoon':
                  form['Afternoon'] = all[j];
                  break;
                case 'Evening':
                  form['Evening'] = all[j];
                  break;
                default:
              }
            }
          }
          form.name = item.name;
          form.id = item.id;
          return form;
        });
        console.log(reformData);
        setSourceData(reformData);
      });
    }
    Source();
  }, [filter]);

  useEffect(() => {
    async function getNow() {
      await getWeek().then((resp) => {
        console.log(resp);
        setSeq((resp.data + 1) % 2 === 0 ? 'Even' : 'Odd');
        const now = new Date();
        const weekDay = now.getDay();
        let time = 'Morning';
        const hour = now.getHours();
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
          time,
        });
        formRef?.current?.setFieldsValue({
          week: resp.data + 1,
          day,
          time,
          bedAreaId: 'all',
        });
      });
    }
    getNow();
  }, []);

  return (
    <div>
      <div>
        <Row>
          <Col>
            <LightFilter
              formRef={formRef}
              bordered
              collapseLabel={<FilterOutlined />}
              size={'large'}
              onFinish={async (values) => {
                setFilter(values);
                setTimeRange(values.time);
              }}
            >
              <ProFormSelect
                name="bedAreaId"
                initialValue={'all'}
                request={async () => {
                  const resp = await getAreas();
                  const value = resp.data.map((item) => ({
                    label: item.name,
                    value: item.id,
                  }));
                  value.push({
                    label: '全部',
                    value: 'all',
                  });
                  return value;
                }}
                placeholder="分区"
              />
              <ProFormSelect
                name="week"
                // valueEnum={{
                //   this: '本周',
                //   last: '上周',
                // }}
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
              <ProFormDatePicker name="date" placeholder="日期" />
              <ProFormRadio.Group
                name="time"
                radioType="button"
                options={[
                  {
                    value: 'Morning',
                    label: '上午',
                  },
                  {
                    value: 'Afternoon',
                    label: '下午',
                  },
                  {
                    value: 'Evening',
                    label: '晚间',
                  },
                ]}
              />
              <ProFormSelect
                name="nurse"
                valueEnum={{
                  nurse1: '护士1',
                  nurse2: '护士2',
                  nurse3: '护士3',
                }}
                placeholder="责任护士"
              />
            </LightFilter>
          </Col>
        </Row>
        {sourceData.map((item, index) => (
          // {console.log(filter.id); console.log(item); return index}
          <>
            <div style={{ marginBottom: '18px', marginTop: '18px', fontSize: '20px' }}>
              {item.name}
            </div>
            {sourceData[index][timeRange]?.patients?.map((patient, patientIndex) =>
              patient.weekSeq === seq ? (
                <PatientCard
                  name={patient?.patient?.patientName}
                  index={patientIndex}
                  values={patient}
                  open={() => {
                    setCurrentRow(patient?.patient);
                    handleCreateModalVisible(true);
                  }}
                />
              ) : null,
            )}
          </>
        ))}
      </div>
      <MonitorForm
        onCancel={() => {
          handleCreateModalVisible(false);
          setCurrentRow(undefined);
        }}
        visible={createModalVisible}
        values={currentRow || {}}
      />
    </div>
  );
};

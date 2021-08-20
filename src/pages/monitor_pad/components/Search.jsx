import React, { useEffect, useRef } from 'react';
// import { PageContainer } from '@ant-design/pro-layout';
import { Row, Col } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
// import { PlusOutlined } from '@ant-design/icons';
import { LightFilter, ProFormSelect, ProFormRadio, ProFormDatePicker } from '@ant-design/pro-form';
import { getAreas, getWeek } from '@/services/histsys/bed';

// const { TabPane } = Tabs;
// import MonitorList from './components/MonitorList';
// import { orange } from '@material-ui/core/colors';

export default (props) => {
  const formRef = useRef();

  useEffect(() => {
    async function getNow() {
      await getWeek().then((resp) => {
        console.log(resp);
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
    <div style={{ height: '20%', width: '100%', backgroundColor: 'white', padding: 24 }}>
      <LightFilter
        formRef={formRef}
        bordered
        collapseLabel={<FilterOutlined />}
        size={'large'}
        onFinish={props.onSubmit}
      >
        <Row>
          <Col span={6}>
            <ProFormSelect
              width="md"
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
          </Col>
          <Col span={6}>
            <ProFormSelect
              width="md"
              name="week"
              // valueEnum={{
              //   this: '本周',
              //   last: '上周',
              // }}
            />
          </Col>
          <Col span={6}>
            <ProFormDatePicker width="md" name="date" placeholder="日期" />
          </Col>
          <Col span={6}>
            <ProFormSelect
              name="nurse"
              width="md"
              valueEnum={{
                nurse1: '护士1',
                nurse2: '护士2',
                nurse3: '护士3',
              }}
              placeholder="责任护士"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProFormRadio.Group
              name="time"
              radioType="button"
              options={[
                {
                  value: 'Morning',
                  label: '上',
                },
                {
                  value: 'Afternoon',
                  label: '下',
                },
                {
                  value: 'Evening',
                  label: '晚',
                },
              ]}
            />
          </Col>
          <Col style={{ marginLeft: 16 }}>
            <ProFormRadio.Group
              name="day"
              radioType="button"
              options={[
                {
                  value: 'Monday',
                  label: '一',
                },
                {
                  value: 'Tuesday',
                  label: '二',
                },
                {
                  value: 'Wednesday',
                  label: '三',
                },
                {
                  value: 'Thursday',
                  label: '四',
                },
                {
                  value: 'Friday',
                  label: '五',
                },
                {
                  value: 'Saturday',
                  label: '六',
                },
              ]}
            />
          </Col>
        </Row>
      </LightFilter>
    </div>
  );
};

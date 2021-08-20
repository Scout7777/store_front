import React, { useState, useRef, useEffect } from 'react';
// import { PageContainer } from '@ant-design/pro-layout';
import { Space, Row, Col } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';
import MonitorForm from './components/MonitorForm';
import Search from './components/Search';
import PatientCard from './components/Card';
import { getAreas, getWeek, getTemplateWeek } from '@/services/histsys/bed';

// const { TabPane } = Tabs;
// import MonitorList from './components/MonitorList';
// import { orange } from '@material-ui/core/colors';

export default () => {
  const [ModalVisible, handleModalVisible] = useState();
  const [selectMode, setSelectMode] = useState(false);
  const [sourceData, setSourceData] = useState([]);
  const [timeRange, setTimeRange] = useState('Evening');
  const [currentRow, setCurrentRow] = useState();
  const [seq, setSeq] = useState('Evening');
  const formRef = useRef();

  async function Source(value) {
    console.log(value);
    if (value.time) {
      setTimeRange(value.time);
    }
    const source = await getAreas();
    await getTemplateWeek(value?.week ? value.week : 202134).then((res) => {
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
          if (all[j].day === value.day) {
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
      setSourceData(reformData);
    });
  }

  useEffect(() => {
    async function getNow() {
      await getWeek().then((resp) => {
        console.log(resp);
        setSeq((resp.data + 1) % 2 === 0 ? 'Even' : 'Odd');
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
        const value = {
          week: resp.data + 1,
          day,
          time,
          bedAreaId: 'all',
        };
        formRef?.current?.setFieldsValue({
          week: resp.data + 1,
          day,
          time,
          bedAreaId: 'all',
        });
        Source(value);
      });
    }
    getNow();
  }, []);

  return (
    <div>
      <Search
        onSubmit={(value) => {
          Source(value);
        }}
      />
      <Row style={{ padding: 12, backgroundColor: 'white', borderTop: '1px solid grey' }}>
        <Col span={16}>
          <Space>
            <Col>上午 49</Col>
            <Col>下午 51</Col>
            <Col>晚上 40</Col>
            <Col>急诊 0</Col>
          </Space>
        </Col>
        <Col span={8}>
          {!selectMode ? (
            <Space>
              <div
                style={{ color: '#406aaC', fontWeight: 'bold' }}
                onClick={() => {
                  setSelectMode(true);
                }}
              >
                我的病人
              </div>
              <div
                style={{ color: '#406aaC', fontWeight: 'bold' }}
                onClick={() => {
                  setSelectMode(true);
                }}
              >
                床位互换
              </div>
            </Space>
          ) : (
            <Space>
              <div
                style={{ color: '#406aaC', fontWeight: 'bold' }}
                onClick={() => {
                  setSelectMode(false);
                }}
              >
                保存
              </div>
              <div
                style={{ color: '#406aaC', fontWeight: 'bold' }}
                onClick={() => {
                  setSelectMode(false);
                }}
              >
                取消
              </div>
            </Space>
          )}
        </Col>
      </Row>

      <div style={{ padding: 24, backgroundColor: 'aliceblue' }}>
        {sourceData.map((item, index) => (
          // {console.log(filter.id); console.log(item); return index}
          <>
            <div style={{ marginBottom: '18px', marginTop: '18px', fontSize: '20px' }}>
              {item.name}
            </div>
            <Space size={[12, 18]} wrap>
              {sourceData[index][timeRange]?.patients?.map((patient, patientIndex) =>
                patient.weekSeq === seq ? (
                  <PatientCard
                    selectMode={selectMode}
                    name={patient?.patient?.patientName}
                    index={patientIndex}
                    values={patient}
                    open={() => {
                      setCurrentRow(patient?.patient);
                      handleModalVisible(true);
                    }}
                  />
                ) : null,
              )}
            </Space>
          </>
        ))}
      </div>
      <MonitorForm
        onCancel={() => {
          handleModalVisible(false);
          setCurrentRow(undefined);
        }}
        visible={ModalVisible}
        values={currentRow || {}}
      />
    </div>
  );
};

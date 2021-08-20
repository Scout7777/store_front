import React, { useState, useEffect, useRef } from 'react';
// import { PageContainer } from '@ant-design/pro-layout';
// import { PlusOutlined } from '@ant-design/icons';
import PatientCard from './components/Card';
import MonitorForm from './components/MonitorForm';
import Search from './components/Search';
import { getAreas, getWeek, getTemplateWeek } from '@/services/histsys/bed';

// const { TabPane } = Tabs;
// import MonitorList from './components/MonitorList';
// import { orange } from '@material-ui/core/colors';

export default () => {
  const [createModalVisible, handleCreateModalVisible] = useState();
  const [currentRow, setCurrentRow] = useState();
  const [sourceData, setSourceData] = useState([]);
  const [timeRange, setTimeRange] = useState('Evening');
  const [seq, setSeq] = useState('Evening');
  const formRef = useRef();

  async function Source(value) {
    console.log(value);
    if (value.time) {
      setTimeRange(value.time);
    }
    const source = await getAreas();
    console.log();
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
        console.log(seq);
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
      <div style={{ width: '100%', padding: 24, overflowY: 'auto', backgroundColor: 'aliceblue' }}>
        {sourceData.map((item, index) => (
          // {console.log(filter.id); console.log(item); return index}
          <>
            <div style={{ marginBottom: '18px', marginTop: '18px', fontSize: '20px' }}>
              {item.name}
            </div>
            {sourceData[index][timeRange]?.patients?.map((patient, patientIndex) => (
              <PatientCard
                name={patient?.patient?.patientName}
                index={patientIndex}
                values={patient}
                open={() => {
                  setCurrentRow(patient?.patient);
                  handleCreateModalVisible(true);
                }}
              />
            ))}
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

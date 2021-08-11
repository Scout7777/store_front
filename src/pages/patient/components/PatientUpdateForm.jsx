import React from 'react';
import { Modal, Tabs, notification } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import BasicCreateForm from './BasicCreateForm';
import DiagnosisCreateForm from './DiagnosisCreateForm';
import ImageCreateForm from './ImageCreateForm';
import AllergyCreateForm from './AllergyCreateForm';
import AccessCreateForm from './AccessCreateForm';
import ChronicCreateForm from './ChronicCreateForm';
import AccessComplicationCreateForm from './AccessComplicationCreateForm';
import LongCreateForm from './LongCreateForm';
// import ChargeCreateForm from './ChargeCreateForm';
import AssessCreateForm from './AssessCreateForm';
import MedicalCreateForm from './MedicalCreateForm';
import InfectionForm from './InfectionForm';
import BedForm from './BedForm';
import Card from './Card';
import {
  createPatient,
  getLongTermMedicalAdvice,
  updateLongTermMedicalAdvice,
  getPatient,
  updatePatientBed,
} from '@/services/histsys/patient';
import { useState } from 'react';

const { TabPane } = Tabs;

const UpdateForm = (props) => {
  console.log(props.values);
  const { id } = props.values;
  const [currentPatient, setCurrentPatient] = useState({ ...props.values });
  const [longM, setlongM] = useState({ ...props.values });

  return (
    <Modal
      title="患者信息"
      width={1350}
      visible={props.visible}
      onCancel={props.onCancel}
      destroyOnClose={true}
    >
      <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        onTabClick={async (key) => {
          let resp;
          let data;
          switch (key) {
            case '9':
              resp = await getLongTermMedicalAdvice(id);
              data = resp.data;
              if (data.hdActive) {
                data.Type = 'hd';
              }
              if (data.hfActive) {
                data.Type = 'hf';
              }
              if (data.hdfActive) {
                data.Type = 'hdf';
              }
              setlongM(data);
              break;
            default:
          }
        }}
      >
        <TabPane tab="电子病历" key="1">
          <PageContainer title="电子病历" style={{ padding: 24 }}>
            <BasicCreateForm
              onSubmit={async (value) => {
                const reform = value;
                const [a, b] = value.id;
                reform.idType = a;
                reform.idNo = b;
                delete reform.id;
                const resp = await createPatient(reform);
                if (resp) {
                  console.log('进入');
                  setCurrentPatient(resp.data);
                  console.log('新建成功');
                }
              }}
            />
          </PageContainer>
        </TabPane>
        <TabPane tab="诊断信息" key="2">
          <PageContainer title="诊断信息" style={{ padding: 24 }}>
            <DiagnosisCreateForm
              onSubmit={async () => {
                const resp = await getPatient(id);
                console.log(resp);
              }}
            />
          </PageContainer>
        </TabPane>
        <TabPane tab="患者图片管理" key="3">
          <PageContainer title="患者图片管理" style={{ padding: 24 }}>
            <ImageCreateForm />
          </PageContainer>
        </TabPane>
        <TabPane tab="患者签字文档" key="4">
          <PageContainer title="患者签字文档" style={{ padding: 24 }}>
            <ImageCreateForm />
          </PageContainer>
        </TabPane>
        <TabPane tab="过敏史" key="5">
          {/* <PageContainer title="过敏史" style={{ padding: 24 }}> */}
          <AllergyCreateForm />
          {/* </PageContainer> */}
        </TabPane>
        <TabPane tab="血管通路" key="6">
          <AccessCreateForm />
        </TabPane>
        <TabPane tab="血管通路并发症" key="7">
          <AccessComplicationCreateForm />
        </TabPane>
        <TabPane tab="慢性并发症" key="8">
          <ChronicCreateForm />
        </TabPane>
        <TabPane
          onClick={async () => {
            await getLongTermMedicalAdvice(id);
          }}
          tab="长期透析医嘱"
          key="9"
        >
          <LongCreateForm
            lastValue={longM}
            onSubmit={async (value) => {
              console.log(value);
              const reform = value;
              switch (reform.Type) {
                case 'hd':
                  reform.hdActive = true;
                  reform.hd = reform.main;
                  break;
                case 'hdf':
                  reform.hdfActive = true;
                  reform.hdf = reform.main;
                  break;
                case 'hf':
                  reform.hfActive = true;
                  reform.hf = reform.main;
                  break;
                default:
              }
              delete reform.Type;
              delete reform.main;
              console.log(reform);
              console.log(currentPatient);
              const resp = await updateLongTermMedicalAdvice(id, reform);
              notification.open({
                description: resp.status + resp.message,
                message: '调试',
              });
            }}
          />
        </TabPane>
        <TabPane tab="耗材设置" key="10">
          {/* <ChargeCreateForm /> */}
        </TabPane>
        <TabPane tab="传染病检查" key="11">
          <InfectionForm />
        </TabPane>
        <TabPane tab="排床规律" key="12">
          <BedForm
            onSubmit={async (value) => {
              let reform1 = [];
              let reform2 = [];
              console.log(value);
              if (value.Odd) {
                let list = Object.keys(value.Odd);
                list = list.map((item) => ({
                  bedTime: value.Odd[`${item}`].bedTime,
                  dialysisMethod: value.Odd[`${item}`].dialysisMethod,
                  dialysisMachine: value.Odd[`${item}`].dialysisMachine,
                  day: item,
                  weekSeq: 'Odd',
                  bedAreaId: value.bedAreaId,
                }));
                reform1 = list;
                console.log(reform1);
              }
              if (value.Even) {
                let list = Object.keys(value.Odd);
                list = list.map((item) => ({
                  bedTime: value.Odd[`${item}`].bedTime,
                  dialysisMethod: value.Odd[`${item}`].dialysisMethod,
                  dialysisMachine: value.Odd[`${item}`].dialysisMachine,
                  day: item,
                  weekSeq: 'Even',
                  bedAreaId: value.bedAreaId,
                }));
                reform2 = list;
                console.log(reform2);
              }
              const all = reform1.concat(reform2);
              console.log(all);
              const resp = await updatePatientBed(id, all);
              notification.open({
                description: resp.status + resp.message,
                message: '调试',
              });
              console.log(resp);
            }}
          />
        </TabPane>
        <TabPane tab="病症评估" key="13">
          <PageContainer title="病症评估" style={{ padding: 24 }}>
            <AssessCreateForm />
          </PageContainer>
        </TabPane>
        <TabPane tab="检验结果" key="14">
          {/* 获取HIS信息后同步开发 */}
        </TabPane>
        <TabPane tab="住院信息" key="15">
          {/* 获取HIS信息后同步开发 */}
        </TabPane>
        <TabPane tab="常规透析用药" key="16">
          {/* 移动端录入 */}
        </TabPane>
        <TabPane tab="门诊用药医嘱" key="17">
          <MedicalCreateForm />
        </TabPane>
        <TabPane tab="发卡" key="18">
          <Card />
        </TabPane>
      </Tabs>
    </Modal>
  );
};
export default UpdateForm;

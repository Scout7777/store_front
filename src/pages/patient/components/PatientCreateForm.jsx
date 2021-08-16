import React from 'react';
import { Modal, Tabs, notification, Button, Space } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import BasicCreateForm from './BasicCreateForm';
import DiagnosisCreateForm from './DiagnosisCreateForm';
import ImageCreateForm from './ImageCreateForm';
import AllergyCreateForm from './AllergyCreateForm';
import AccessCreateForm from './AccessCreateForm';
import ChronicCreateForm from './ChronicCreateForm';
import AccessComplicationCreateForm from './AccessComplicationCreateForm';
import LongCreateForm from './LongCreateForm';
import ChargeCreateForm from './ChargeCreateForm';
import AssessCreateForm from './AssessCreateForm';
import MedicalCreateForm from './MedicalCreateForm';
import DlMedicalCreateForm from './DlMedicalCreateForm';
import InfectionForm from './InfectionForm';
import BedForm from './BedForm';
import Card from './Card';
import {
  createPatient,
  updateLongTermMedicalAdvice,
  // getPatient,
  updatePatientBed,
  createDiagnosisInfo,
} from '@/services/histsys/patient';
import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const CreateForm = (props) => {
  const [currentPatient, setCurrentPatient] = useState({ id: 20 });

  return (
    <Modal
      title="患者信息"
      width={1350}
      visible={props.visible}
      onCancel={props.onCancel}
      destroyOnClose={true}
    >
      <Tabs defaultActiveKey="1" tabPosition="left">
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
                  setCurrentPatient(resp.data);
                  notification.open({
                    description: resp.message,
                    message: '消息',
                  });
                }
              }}
            />
          </PageContainer>
        </TabPane>
        <TabPane tab="诊断信息" key="2">
          <PageContainer title="诊断信息" style={{ padding: 24 }}>
            <DiagnosisCreateForm
              onSubmit={async (value) => {
                if (currentPatient?.id) {
                  const resp = await createDiagnosisInfo(currentPatient.id, value);
                  console.log(resp);
                  notification.open({
                    description: resp.message,
                    message: '消息',
                  });
                } else
                  notification.open({
                    description: '请先创建患者',
                    message: '消息',
                  });
              }}
            />
          </PageContainer>
        </TabPane>
        <TabPane tab="患者图片文档管理" key="3">
          <PageContainer title="患者图片管理" style={{ padding: 24 }}>
            <ImageCreateForm
              onSubmit={async (value) => {
                if (currentPatient?.id) {
                  console.log(value);
                } else
                  notification.open({
                    description: '请先创建患者',
                    message: '消息',
                  });
              }}
            />
          </PageContainer>
        </TabPane>
        {/* <TabPane tab="患者签字文档" key="4">
          <PageContainer title="患者签字文档" style={{ padding: 24 }}>
            <ImageCreateForm />
          </PageContainer>
        </TabPane> */}
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
        <TabPane tab="长期透析医嘱" key="9">
          <LongCreateForm
            onSubmit={async (value) => {
              console.log(value);
              const reform = value;
              console.log(reform);
              console.log(currentPatient);
              const resp = await updateLongTermMedicalAdvice(currentPatient.id, reform);
              notification.open({
                description: resp.status + resp.message,
                message: '调试',
              });
            }}
          />
        </TabPane>
        <TabPane tab="耗材设置" key="10">
          <ChargeCreateForm />
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
              const resp = await updatePatientBed(currentPatient.id, all);
              notification.open({
                description: resp.message,
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
          <Button type="primary" key="primary">
            <PlusOutlined />
            从LIS导入
          </Button>
        </TabPane>
        <TabPane tab="住院信息" key="15">
          <Button type="primary" key="primary">
            <PlusOutlined />
            从HIS导入
          </Button>
        </TabPane>
        <TabPane tab="常规透析用药" key="16">
          <DlMedicalCreateForm />
        </TabPane>
        <TabPane tab="门诊用药医嘱" key="17">
          <MedicalCreateForm />
        </TabPane>
        <TabPane tab="发卡" key="18">
          <Card />
          <Space size={[12, 18]} wrap>
            <Button type="primary" key="primary">
              打印
            </Button>
            <Button type="primary" key="primary">
              写卡
            </Button>
          </Space>
        </TabPane>
      </Tabs>
    </Modal>
  );
};
export default CreateForm;

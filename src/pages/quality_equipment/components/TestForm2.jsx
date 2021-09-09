import { Collapse } from 'antd';

import React from 'react';
import DoctorEducationBackground from '@/pages/quality_equipment/components/DoctorEducationBackground';
import NurseEducationBackground from '@/pages/quality_equipment/components/NurseEducationBackground';
import EngineerEducationBackground from '@/pages/quality_equipment/components/EngineerEducationBackground';
import DoctorProfessionalTitle from '@/pages/quality_equipment/components/DoctorProfessionalTitle';
import NurseProfessionalTitle from '@/pages/quality_equipment/components/NurseProfessionalTitle';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel
        header="血透室（中心）医生、护士以及工程技术人员学历、职称、资质、数量及其构成"
        key="1"
      >
        <p>
          <Collapse onChange={callback}>
            <Panel header="医生" key="1">
              <p>
                <div style={{ fontSize: '22px' }}>医生总人数：100</div>
                <DoctorEducationBackground />
                <DoctorProfessionalTitle />
              </p>
            </Panel>
            <Panel header="护士" key="2">
              <p>
                <div style={{ fontSize: '22px' }}>护士总人数：100</div>
                <NurseEducationBackground />
                <NurseProfessionalTitle />
              </p>
            </Panel>
            <Panel header="工程师" key="3">
              <p>
                <div style={{ fontSize: '22px' }}>工程师总人数：100</div>
                <EngineerEducationBackground />
                <NurseProfessionalTitle />
              </p>
            </Panel>
          </Collapse>
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;

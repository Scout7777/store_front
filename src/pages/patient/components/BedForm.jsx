import React, { useEffect, useRef } from 'react';
import { Row, Form } from 'antd';
import ProForm, {
  ProFormSelect,
  // ProFormText,
  ProFormRadio,
  // ProFormDatePicker,
  // ProFormTextArea,
  // ProFormFieldSet,
  // ProFormCheckbox,
} from '@ant-design/pro-form';

import { getAreas } from '@/services/histsys/bed';
import { getPatientBed } from '@/services/histsys/patient';

// import FormItemDivider from '@/components/FormItemDivider';

const DiagnosisCreateForm = (props) => {
  const formRef = useRef();
  const { id } = props.values;

  useEffect(() => {
    console.log(id);
    async function nowPatient() {
      if (id) {
        await getPatientBed(id).then((resp) => {
          const originData = resp.data;
          const value = {
            Odd: {
              Monday: {},
              Tuesday: {},
              Wednesday: {},
              Thursday: {},
              Friday: {},
              Saturday: {},
              Sunday: {},
            },
            Even: {
              Monday: {},
              Tuesday: {},
              Wednesday: {},
              Thursday: {},
              Friday: {},
              Saturday: {},
              Sunday: {},
            },
          };
          let day = 'Monday';
          value.bedAreaId = originData[0]?.bedArea?.id;
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < originData.length; i++) {
            if (originData[i].weekSeq === 'Odd') {
              console.log(originData[i]);
              day = originData[i].day;
              value.Odd[day].bedTime = originData[i]?.bedTime;
              console.log(value);
              formRef?.current?.setFieldsValue(value);
            } else {
              console.log(originData[i]);
              day = originData[i].day;
              value.Even[`${originData[i].day}`].bedTime = originData[i]?.bedTime;
              console.log(value);
              formRef?.current?.setFieldsValue(value);
            }
          }
        });
      }
    }

    nowPatient();
  }, [id]);

  return (
    <ProForm onFinish={props.onSubmit} formRef={formRef}>
      <ProFormSelect
        width={'md'}
        name="bedAreaId"
        request={async () => {
          const resp = await getAreas();
          const value = resp.data.map((item) => ({
            label: item.name,
            value: item.id,
          }));
          return value;
        }}
        placeholder="选择透析分区"
      />
      {/* <ProFormRadio.Group
        name="week"
        options={[
          {
            label: '单周',
            value: 'Odd',
          },
          {
            label: '双周',
            value: 'Even',
          },
        ]}
      /> */}
      <ProForm.Item label="单周">
        <Row>
          <Form.Item> 周一 </Form.Item>
          <ProFormRadio.Group
            name={['Odd', 'Monday', 'bedTime']}
            options={[
              {
                label: '上午班',
                value: 'Morning',
              },
              {
                label: '下午班',
                value: 'Afternoon',
              },
              {
                label: '晚上班',
                value: 'Evening',
              },
            ]}
          />
          <ProFormSelect
            name={['Odd', 'Monday', 'dialysisMethod']}
            valueEnum={{
              HD: 'HD',
              HDF: 'HDF',
            }}
            placeholder="选择透析方式"
          />
          <ProFormSelect
            name={['Odd', 'Monday', 'dialysisMachine']}
            valueEnum={{
              HD: '设备1',
              HDF: '设备2',
            }}
            placeholder="指定透析器"
          />
        </Row>
        <Row>
          <Form.Item> 周二 </Form.Item>
          <ProFormRadio.Group
            name={['Odd', 'Tuesday', 'bedTime']}
            options={[
              {
                label: '上午班',
                value: 'Morning',
              },
              {
                label: '下午班',
                value: 'Afternoon',
              },
              {
                label: '晚上班',
                value: 'Evening',
              },
            ]}
          />
          <ProFormSelect
            name={['Odd', 'Tuesday', 'dialysisMethod']}
            valueEnum={{
              HD: 'HD',
              HDF: 'HDF',
            }}
            placeholder="选择透析方式"
          />
          <ProFormSelect
            name={['Odd', 'Tuesday', 'dialysisMachine']}
            valueEnum={{
              HD: '设备1',
              HDF: '设备2',
            }}
            placeholder="指定透析器"
          />
        </Row>
        <Row>
          <Form.Item> 周三 </Form.Item>
          <ProFormRadio.Group
            name={['Odd', 'Wednesday', 'bedTime']}
            options={[
              {
                label: '上午班',
                value: 'Morning',
              },
              {
                label: '下午班',
                value: 'Afternoon',
              },
              {
                label: '晚上班',
                value: 'Evening',
              },
            ]}
          />
          <ProFormSelect
            name={['Odd', 'Wednesday', 'dialysisMethod']}
            valueEnum={{
              HD: 'HD',
              HDF: 'HDF',
            }}
            placeholder="选择透析方式"
          />
          <ProFormSelect
            name={['Odd', 'Wednesday', 'dialysisMachine']}
            valueEnum={{
              HD: '设备1',
              HDF: '设备2',
            }}
            placeholder="指定透析器"
          />
        </Row>
        <Row>
          <Form.Item> 周四 </Form.Item>
          <ProFormRadio.Group
            name={['Odd', 'Thursday', 'bedTime']}
            options={[
              {
                label: '上午班',
                value: 'Morning',
              },
              {
                label: '下午班',
                value: 'Afternoon',
              },
              {
                label: '晚上班',
                value: 'Evening',
              },
            ]}
          />
          <ProFormSelect
            name={['Odd', 'Thursday', 'dialysisMethod']}
            valueEnum={{
              HD: 'HD',
              HDF: 'HDF',
            }}
            placeholder="选择透析方式"
          />
          <ProFormSelect
            name={['Odd', 'Thursday', 'dialysisMachine']}
            valueEnum={{
              HD: '设备1',
              HDF: '设备2',
            }}
            placeholder="指定透析器"
          />
        </Row>
        <Row>
          <Form.Item> 周五 </Form.Item>
          <ProFormRadio.Group
            name={['Odd', 'Friday', 'bedTime']}
            options={[
              {
                label: '上午班',
                value: 'Morning',
              },
              {
                label: '下午班',
                value: 'Afternoon',
              },
              {
                label: '晚上班',
                value: 'Evening',
              },
            ]}
          />
          <ProFormSelect
            name={['Odd', 'Friday', 'dialysisMethod']}
            valueEnum={{
              HD: 'HD',
              HDF: 'HDF',
            }}
            placeholder="选择透析方式"
          />
          <ProFormSelect
            name={['Odd', 'Friday', 'dialysisMachine']}
            valueEnum={{
              HD: '设备1',
              HDF: '设备2',
            }}
            placeholder="指定透析器"
          />
        </Row>
        <Row>
          <Form.Item> 周六 </Form.Item>
          <ProFormRadio.Group
            name={['Odd', 'Saturday', 'bedTime']}
            options={[
              {
                label: '上午班',
                value: 'Morning',
              },
              {
                label: '下午班',
                value: 'Afternoon',
              },
              {
                label: '晚上班',
                value: 'Evening',
              },
            ]}
          />
          <ProFormSelect
            name={['Odd', 'Saturday', 'dialysisMethod']}
            valueEnum={{
              HD: 'HD',
              HDF: 'HDF',
            }}
            placeholder="选择透析方式"
          />
          <ProFormSelect
            name={['Odd', 'Saturday', 'dialysisMachine']}
            valueEnum={{
              HD: '设备1',
              HDF: '设备2',
            }}
            placeholder="指定透析器"
          />
        </Row>
      </ProForm.Item>
      <ProForm.Item label="双周">
        <Row>
          <Form.Item> 周一 </Form.Item>
          <ProFormRadio.Group
            name={['Even', 'Monday', 'bedTime']}
            options={[
              {
                label: '上午班',
                value: 'Morning',
              },
              {
                label: '下午班',
                value: 'Afternoon',
              },
              {
                label: '晚上班',
                value: 'Evening',
              },
            ]}
          />
          <ProFormSelect
            name={['Even', 'Monday', 'dialysisMethod']}
            valueEnum={{
              HD: 'HD',
              HDF: 'HDF',
            }}
            placeholder="选择透析方式"
          />
          <ProFormSelect
            name={['Even', 'Monday', 'dialysisMachine']}
            valueEnum={{
              HD: '设备1',
              HDF: '设备2',
            }}
            placeholder="指定透析器"
          />
        </Row>
        <Row>
          <Form.Item> 周二 </Form.Item>
          <ProFormRadio.Group
            name={['Even', 'Tuesday', 'bedTime']}
            options={[
              {
                label: '上午班',
                value: 'Morning',
              },
              {
                label: '下午班',
                value: 'Afternoon',
              },
              {
                label: '晚上班',
                value: 'Evening',
              },
            ]}
          />
          <ProFormSelect
            name={['Even', 'Tuesday', 'dialysisMethod']}
            valueEnum={{
              HD: 'HD',
              HDF: 'HDF',
            }}
            placeholder="选择透析方式"
          />
          <ProFormSelect
            name={['Even', 'Tuesday', 'dialysisMachine']}
            valueEnum={{
              HD: '设备1',
              HDF: '设备2',
            }}
            placeholder="指定透析器"
          />
        </Row>
        <Row>
          <Form.Item> 周三 </Form.Item>
          <ProFormRadio.Group
            name={['Even', 'Wednesday', 'bedTime']}
            options={[
              {
                label: '上午班',
                value: 'Morning',
              },
              {
                label: '下午班',
                value: 'Afternoon',
              },
              {
                label: '晚上班',
                value: 'Evening',
              },
            ]}
          />
          <ProFormSelect
            name={['Even', 'Wednesday', 'dialysisMethod']}
            valueEnum={{
              HD: 'HD',
              HDF: 'HDF',
            }}
            placeholder="选择透析方式"
          />
          <ProFormSelect
            name={['Even', 'Wednesday', 'dialysisMachine']}
            valueEnum={{
              HD: '设备1',
              HDF: '设备2',
            }}
            placeholder="指定透析器"
          />
        </Row>
        <Row>
          <Form.Item> 周四 </Form.Item>
          <ProFormRadio.Group
            name={['Even', 'Thursday', 'bedTime']}
            options={[
              {
                label: '上午班',
                value: 'Morning',
              },
              {
                label: '下午班',
                value: 'Afternoon',
              },
              {
                label: '晚上班',
                value: 'Evening',
              },
            ]}
          />
          <ProFormSelect
            name={['Even', 'Thursday', 'dialysisMethod']}
            valueEnum={{
              HD: 'HD',
              HDF: 'HDF',
            }}
            placeholder="选择透析方式"
          />
          <ProFormSelect
            name={['Even', 'Thursday', 'dialysisMachine']}
            valueEnum={{
              HD: '设备1',
              HDF: '设备2',
            }}
            placeholder="指定透析器"
          />
        </Row>
        <Row>
          <Form.Item> 周五 </Form.Item>
          <ProFormRadio.Group
            name={['Even', 'Friday', 'bedTime']}
            options={[
              {
                label: '上午班',
                value: 'Morning',
              },
              {
                label: '下午班',
                value: 'Afternoon',
              },
              {
                label: '晚上班',
                value: 'Evening',
              },
            ]}
          />
          <ProFormSelect
            name={['Even', 'Friday', 'dialysisMethod']}
            valueEnum={{
              HD: 'HD',
              HDF: 'HDF',
            }}
            placeholder="选择透析方式"
          />
          <ProFormSelect
            name={['Even', 'Friday', 'dialysisMachine']}
            valueEnum={{
              HD: '设备1',
              HDF: '设备2',
            }}
            placeholder="指定透析器"
          />
        </Row>
        <Row>
          <Form.Item> 周六 </Form.Item>
          <ProFormRadio.Group
            name={['Even', 'Saturday', 'bedTime']}
            options={[
              {
                label: '上午班',
                value: 'Morning',
              },
              {
                label: '下午班',
                value: 'Afternoon',
              },
              {
                label: '晚上班',
                value: 'Evening',
              },
            ]}
          />
          <ProFormSelect
            name={['Even', 'Saturday', 'dialysisMethod']}
            valueEnum={{
              HD: 'HD',
              HDF: 'HDF',
            }}
            placeholder="选择透析方式"
          />
          <ProFormSelect
            name={['Even', 'Saturday', 'dialysisMachine']}
            valueEnum={{
              HD: '设备1',
              HDF: '设备2',
            }}
            placeholder="指定透析器"
          />
        </Row>
      </ProForm.Item>
    </ProForm>
  );
};
export default DiagnosisCreateForm;

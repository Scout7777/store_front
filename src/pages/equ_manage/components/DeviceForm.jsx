import React from 'react';
import { Row, Form } from 'antd';
import {
  ProForm,
  ProFormText,
  ProFormSelect, ModalForm,
  ProFormDatePicker,
  ProFormDateTimePicker,
  ProFormDigit,
  ProFormSwitch,
  ProFormTextArea,
  ProFormGroup,
} from '@ant-design/pro-form';
import FormItemDivider from '@/components/FormItemDivider';

// 仅创建/编辑
const XForm = (props) => {
  const edit = props.mode === 'edit'
  return (
    <ModalForm
      visible={props.visible}
      modalProps={{
        onCancel: props.onCancel,
        destroyOnClose: true,
        bodyStyle: { padding: '32px 0 36px 48px' },
      }}
      title={props.title}
      initialValues={props.values || {}}
      onFinish={props.onSubmit}
    >
      <ProFormGroup>
        <ProFormText width={'md'} name="name" label="设备名称" rules={[{ required: true }]}/>
        <ProFormSelect
          width={'md'}
          valueEnum={{
            血液透析机: "血液透析机",
            血液透析滤过机: "血液透析滤过机",
            连续肾脏替代治疗机: "连续肾脏替代治疗机",
            床纯水设备: "床纯水设备",
            中央供液设备: "中央供液设备",
            除颤仪名称: "除颤仪名称",
            负压吸引器名称: "负压吸引器名称",
            简易呼吸器名称: "简易呼吸器名称",
            其它: "其它",
          }}
          name="type"
          label="设备类型"
          rules={[{ required: true }]}
          
        />
        <ProFormText width={'md'} name="seqNo" label="编号" placeholder="设备编号（如果不填会自动生成）"/>
        <ProFormSelect
          width={'md'}
          valueEnum={{
            空闲: "空闲",
            工作: "工作",
            维修: "维修",
            消毒: "消毒",
            报废: "报废",
          }}
          name="status"
          label="设备状态"
          rules={[{ required: true }]}
          
        />
        <ProFormText width={'md'} name="factory" label="厂商" rules={[{ required: true }]}/>
        <ProFormText width={'md'} name="brand" label="品牌" rules={[{ required: true }]}/>
        <ProFormText width={'md'} name="model" label="型号" rules={[{ required: true }]}/>
        <ProFormDatePicker width={'md'} name="productTime" label="生产时间" rules={[{ required: true }]}/>
      </ProFormGroup>
      <FormItemDivider>设备细目</FormItemDivider>
      <ProFormGroup>
        <ProFormDateTimePicker width={'md'} name="enableTime" label="启用时间"/>
        <ProFormDateTimePicker width={'md'} name="discardtTime" label="报废时间"/>
        <ProFormDigit width={'md'} name="temperature" label="工作温度(°C)" type="number" min={-273} max={100000}/>
        <ProFormDigit width={'md'} name="humidity" label="工作湿度(%RH)" type="number"/>
        <ProFormDigit width={'md'} name="pressure" label="工作水压" type="number"/>
        <ProFormText width={'md'} name="pressureUnit" label="水压单位"/>
        <ProFormDigit width={'md'} name="workingVoltage" label="工作电压(V)" type="number"/>
        <ProFormSwitch width={'md'} name="bbp" label="是否床边血液净化设备" />
      </ProFormGroup>
      <Form.Item noStyle shouldUpdate>
      {
        (form) =>
        <div>
          <div hidden={form.getFieldValue('type')!=='血液透析机'} title="血液透析机细目" >
            <FormItemDivider>血液透析机细目</FormItemDivider>
            <ProFormGroup>
              <ProFormSelect  width={'md'} name="use" label="用途" valueEnum={["普通机", "急诊机"]}/>
              <ProFormSelect  width={'md'} name="position" label="部位" valueEnum={["左手", "右手"]}/>
              <ProFormSelect  width={'md'} name="bedId" label="绑定床位" valueEnum={["A床", "B床"]}/>
              <ProFormText width={'md'} name="dehydrationWarning" label="脱水预警"/>
              <ProFormText width={'md'} name="deviceIP" label="设备IP地址"/>
              <ProFormText width={'md'} name="deviceMac" label="设备MAC地址"/>
            </ProFormGroup>
          </div>
          <div hidden={form.getFieldValue('type')!=='床纯水设备'} title="床纯水设备细目" >
            <FormItemDivider>床纯水设备细目</FormItemDivider>
            <ProFormGroup>
              <ProFormText width={'md'} name="qualityStandard" label="质量标准"/>
            </ProFormGroup>
          </div>
        </div>
      }
      </Form.Item>
      <ProFormGroup>
        <ProFormTextArea width={'xl'} name="remark" label="备注" />
      </ProFormGroup>
      <div hidden={!edit}>
        <ProFormGroup>
          <ProFormDatePicker width={'md'} name="updatedAt" label="上次更新时间" disabled/>
          <ProFormDatePicker width={'md'} name="createdAt" label="设备添加时间" disabled/>
        </ProFormGroup>
      </div>
    </ModalForm>
  );
};
export default XForm;

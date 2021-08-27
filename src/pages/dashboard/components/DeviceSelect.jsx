import React, { useState, useRef } from 'react';
import { Select } from 'antd';
import { ProFormGroup, ProFormText, ProFormSelect, ModalForm } from '@ant-design/pro-form';
// import { PageContainer } from '@ant-design/pro-layout';
// import FormItemDivider from '@/components/FormItemDivider';
import { PlusOutlined } from '@ant-design/icons';
import { EditableProTable } from '@ant-design/pro-table';

const DeviceSelect = (props) => {
  console.log('device-select', props)
  return <Select>
    <Select.Option value="jack">测试设备1</Select.Option>
    <Select.Option value="lucy">测试设备2</Select.Option>
    <Select.Option value="tom">测试设备3</Select.Option>
  </Select>
}

export default DeviceSelect

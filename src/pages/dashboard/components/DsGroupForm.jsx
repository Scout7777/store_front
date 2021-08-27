import React, { useState, useRef } from 'react';
import { Row, Button } from 'antd';
import { ProFormGroup, ProFormText, ProFormSelect, ModalForm } from '@ant-design/pro-form';
// import { PageContainer } from '@ant-design/pro-layout';
// import FormItemDivider from '@/components/FormItemDivider';
import { PlusOutlined } from '@ant-design/icons';
import { EditableProTable } from '@ant-design/pro-table';
import DeviceSelect from './DeviceSelect';

const DS_ITEM_FieldColumn = {
  "inspectionValue": {
    title: '检测值',
    key: 'inspectionValue',
    dataIndex: 'inspectionValue',
  },
  "inspectionAt": {
    title: '检测时间',
    key: 'inspectionAt',
    dataIndex: 'inspectionAt',
    valueType: 'dateTime',
  },
  "isQualified": {
    title: '是否合格',
    key: 'isQualified',
    dataIndex: 'isQualified',
    valueEnum: {
      true: { text: '合格', status: 'Success' },
      false: { text: '不合格', status: 'Error' }
    }
  },
  "caseOrder": {
    title: '检测顺序号',
    key: 'caseOrder',
    dataIndex: 'caseOrder',
    editable: false,
  },
  "vesselType": {
    title: '器具类型',
    key: 'vesselType',
    dataIndex: 'vesselType',
    valueEnum: ["配制桶", "容器", "滤芯"]
  },
  "maintainType": {
    title: '维护类型',
    key: 'maintainType',
    dataIndex: 'maintainType',
    valueEnum: ["消毒", "清洗", "更换"]
  },
  "sanitiser": {
    title: '消毒剂类型',
    key: 'sanitiser',
    dataIndex: 'sanitiser',
    valueEnum: ["热消毒", "柠檬酸", "含氯消毒剂", "过氧乙酸", "其它"]
  },
  "waterType": {
    title: '水类型',
    key: 'waterType',
    dataIndex: 'waterType',
    valueEnum: ["纯水", "浓缩液", "透析液"]
  },
  "fileInfo": {
    title: '上传图片/PDF',
    key: 'fileInfo',
    dataIndex: 'fileInfo',
  },
  "inspectionValueFile": {
    title: '检测结果',
    key: 'inspectionValue',
    dataIndex: 'inspectionValue',
  },
  "device": {
    title: '设备',
    key: 'device',
    dataIndex: 'device',
    render: val => {
      var value = `${val.type}(${val.name})`
      if (val.bed) {
        return value + `${val.bed.name}`
      }
      return value
    },
    renderFormItem: val => {
      return <DeviceSelect props={val}/>
    }
    //
  },
}

const DS_ITEM = ["透析室空气消毒",
  "配置透析液细菌培养检测", "配置透析液成分检测", "配置透析液内毒素检测",
  "浓缩液配制桶及容器清洁与消毒",
  "物表消毒",
  "透析用水细菌培养检测", "透析用水电解质检测", "透析用水内毒素检测", "透析用水游离氯检测", "透析用水有毒化学物检测",
  "透析用水PH值检测", "透析用水微量元素检测", "透析用水水硬度检测",
  "透析机透析液细菌培养检测", "透析机透析液内毒素检测",
  "透析机消毒检测",
  "水处理机消毒检测"]

const DsGroupForm = (props) => {
  const type = props.type

  const renderItem = (itemType) => {
    let columns = []
    switch(itemType) {
      case "配置透析液成分检测":
        columns.push(DS_ITEM_FieldColumn["caseOrder"])
        columns.push(DS_ITEM_FieldColumn["isQualified"])
        columns.push(DS_ITEM_FieldColumn["inspectionValueFile"])
        columns.push(DS_ITEM_FieldColumn["inspectionAt"])
        columns.push(DS_ITEM_FieldColumn["fileInfo"])
        break;
      case "浓缩液配制桶及容器清洁与消毒":
        columns.push(DS_ITEM_FieldColumn["caseOrder"])
        columns.push(DS_ITEM_FieldColumn["isQualified"])
        columns.push({ title: '消毒残留物测试检测值(ppm)', key: 'inspectionValue', dataIndex: 'inspectionValue' })
        // columns.push(DS_ITEM_FieldColumn["inspectionValue"])
        columns.push(DS_ITEM_FieldColumn["vesselType"])
        columns.push(DS_ITEM_FieldColumn["maintainType"])
        columns.push(DS_ITEM_FieldColumn["sanitiser"])
        columns.push(DS_ITEM_FieldColumn["inspectionAt"])
        columns.push(DS_ITEM_FieldColumn["fileInfo"])
        break;
      case "透析机消毒检测":
      case "水处理机消毒检测":
        columns.push(DS_ITEM_FieldColumn["caseOrder"])
        columns.push(DS_ITEM_FieldColumn["device"])
        columns.push(DS_ITEM_FieldColumn["isQualified"])
        // columns.push(DS_ITEM_FieldColumn["inspectionValue"])
        columns.push(DS_ITEM_FieldColumn["inspectionAt"])
        columns.push(DS_ITEM_FieldColumn["fileInfo"])
        break;
      case "透析机透析液细菌培养检测":
      case "透析机透析液内毒素检测":
        columns.push(DS_ITEM_FieldColumn["caseOrder"])
        columns.push(DS_ITEM_FieldColumn["device"])
        columns.push(DS_ITEM_FieldColumn["isQualified"])
        columns.push(DS_ITEM_FieldColumn["inspectionValue"])
        columns.push(DS_ITEM_FieldColumn["inspectionAt"])
        columns.push(DS_ITEM_FieldColumn["fileInfo"])
        break;
      case "透析用水细菌培养检测":
      case "透析用水内毒素检测":
      case "透析用水游离氯检测":
      case "透析用水PH值检测":
      case "透析用水水硬度检测":
        columns.push(DS_ITEM_FieldColumn["caseOrder"])
        columns.push(DS_ITEM_FieldColumn["device"])
        columns.push(DS_ITEM_FieldColumn["waterType"])
        columns.push(DS_ITEM_FieldColumn["isQualified"])
        columns.push(DS_ITEM_FieldColumn["inspectionValue"])
        columns.push(DS_ITEM_FieldColumn["inspectionAt"])
        columns.push(DS_ITEM_FieldColumn["fileInfo"])
        break;
      case "透析用水电解质检测":
      case "透析用水有毒化学物检测":
      case "透析用水微量元素检测":
        columns.push(DS_ITEM_FieldColumn["caseOrder"])
        columns.push(DS_ITEM_FieldColumn["isQualified"])
        columns.push(DS_ITEM_FieldColumn["inspectionValueFile"])
        columns.push(DS_ITEM_FieldColumn["inspectionAt"])
        columns.push(DS_ITEM_FieldColumn["fileInfo"])
        break;
      case "物表消毒":
      case "透析室空气消毒":
      case "配置透析液细菌培养检测":
      case "配置透析液内毒素检测":
        columns.push(DS_ITEM_FieldColumn["caseOrder"])
        columns.push(DS_ITEM_FieldColumn["isQualified"])
        columns.push(DS_ITEM_FieldColumn["inspectionValue"])
        columns.push(DS_ITEM_FieldColumn["inspectionAt"])
        columns.push(DS_ITEM_FieldColumn["fileInfo"])
        break;
      default:
        columns.push(DS_ITEM_FieldColumn["caseOrder"])
        columns.push(DS_ITEM_FieldColumn["isQualified"])
        columns.push(DS_ITEM_FieldColumn["inspectionValue"])
        columns.push(DS_ITEM_FieldColumn["inspectionAt"])
        columns.push(DS_ITEM_FieldColumn["fileInfo"])
        break;
    }

    const newCaseOrder = 1 // cal

    return <div>
      <EditableProTable
        rowKey="id"
        headerTitle={itemType}
        actionRef={actionRef[itemType]}
        // maxLength={5}
        // 关闭默认的新建按钮
        recordCreatorProps={{creatorButtonText: "新建记录", onlyAddOneLineAlertMessage: "请先提交未保存的数据", record: {caseOrder: newCaseOrder}}}
        columns={columns}
        // request={}
        value={dataSource[itemType]}
        onChange={(keys, rows) => handleOnTableChange(itemType, keys, rows)}
        editable={{
          // form,
          // editableKeys,
          onSave: async () => {
            await waitTime(2000);
          },
          // onChange: setEditableRowKeys,
          actionRender: (row, config, dom) => [dom.save, dom.cancel],
        }}
      />
    </div>
  }

  const panel = (groupType) => {
    switch(groupType) {
      case '透析室空气消毒':
        return <div> {renderItem('透析室空气消毒')} </div>
      case '配置透析液检测':
        return <div> {renderItem('配置透析液细菌培养检测')} {renderItem('配置透析液成分检测')} {renderItem('配置透析液内毒素检测')} </div>
      case '浓缩液配制桶及容器清洁与消毒':
        return <div> {renderItem('浓缩液配制桶及容器清洁与消毒')} </div>
      case '物表消毒':
        return <div> {renderItem('物表消毒')} </div>
      case '透析用水检测':
        return <div>
          {renderItem('透析用水细菌培养检测')}
          {renderItem('透析用水电解质检测')}
          {renderItem('透析用水内毒素检测')}
          {renderItem('透析用水游离氯检测')}
          {renderItem('透析用水有毒化学物检测')}
          {renderItem('透析用水PH值检测')}
          {renderItem('透析用水微量元素检测')}
          {renderItem('透析用水水硬度检测')}
        </div>
      case '透析机透析液检测':
        return <div> {renderItem('透析机透析液细菌培养检测')} {renderItem('透析机透析液内毒素检测')} </div>
      case '透析机消毒检测':
        return <div> {renderItem('透析机消毒检测')} </div>
      case '水处理机消毒检测':
        return <div> {renderItem('水处理机消毒检测')} </div>
      default: return <div></div>
    }
  }

  const [dataSource, setDataSource] = useState({})
  const actionRef = {
    "透析室空气消毒": useRef(),
    "配置透析液细菌培养检测": useRef(), "配置透析液成分检测": useRef(), "配置透析液内毒素检测": useRef(),
    "浓缩液配制桶及容器清洁与消毒": useRef(),
    "物表消毒": useRef(),
    "透析用水细菌培养检测": useRef(), "透析用水电解质检测": useRef(), "透析用水内毒素检测": useRef(), "透析用水游离氯检测": useRef(), "透析用水有毒化学物检测": useRef(),
    "透析用水PH值检测": useRef(), "透析用水微量元素检测": useRef(), "透析用水水硬度检测": useRef(),
    "透析机透析液细菌培养检测": useRef(), "透析机透析液内毒素检测": useRef(),
    "透析机消毒检测": useRef(),
    "水处理机消毒检测": useRef(),
  }

  const handleOnTableChange = (itemType, editableKeys, editableRows) => {
    var map = {}
    map[itemType] = {
      editableKeys, editableRows
    }
    setDataSource({...dataSource, ...map})
  }


  return (
    <ModalForm
      title={props.title}
      visible={props.visible}
      modalProps={{
        onCancel: props.onCancel,
        destroyOnClose: true,
        bodyStyle: { padding: '0px 0 36px 0px' },
      }}
      initialValues={props.values || {}}
      onFinish={props.onSubmit}
    >
      {
        panel(type)
      }
    </ModalForm>
  );
};
export default DsGroupForm;

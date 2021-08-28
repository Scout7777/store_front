import React, { useState, useRef } from 'react';
import { Modal } from 'antd';
import { createDsItem, updateDsItem, createDsGroup } from '@/services/histsys/disinfection';
import { EditableProTable } from '@ant-design/pro-table';
import DeviceSelect from './DeviceSelect';
import moment from 'moment';
import FileUpload from './FileUpload';

const DS_ITEM_FieldColumn = {
  "inspectionValue": {
    title: '检测值',
    width: 100,
    key: 'inspectionValue',
    dataIndex: 'inspectionValue',
  },
  "inspectionAt": {
    title: '检测时间',
    width: 180,
    key: 'inspectionAt',
    dataIndex: 'inspectionAt',
    valueType: 'dateTime',
  },
  "isQualified": {
    title: '是否合格',
    key: 'isQualified',
    width: 120,
    dataIndex: 'isQualified',
    valueEnum: {
      true: { text: '合格', status: 'Success' },
      false: { text: '不合格', status: 'Error' }
    }
  },
  "caseOrder": {
    title: '序号',
    width: 50,
    key: 'caseOrder',
    dataIndex: 'caseOrder',
    editable: false,
  },
  "vesselType": {
    title: '器具类型',
    width: 100,
    key: 'vesselType',
    dataIndex: 'vesselType',
    valueEnum: {配制桶: "配制桶", 容器: "容器", 滤芯: "滤芯"}
  },
  "maintainType": {
    title: '维护类型',
    width: 80,
    key: 'maintainType',
    dataIndex: 'maintainType',
    valueEnum: {消毒: "消毒", 清洗: "清洗", 更换: "更换"}
  },
  "sanitiser": {
    title: '消毒剂类型',
    width: 80,
    key: 'sanitiser',
    dataIndex: 'sanitiser',
    valueEnum: {热消毒: "热消毒", 柠檬酸: "柠檬酸", 含氯消毒剂: "含氯消毒剂", 过氧乙酸: "过氧乙酸", 其它: "其它"}
  },
  "waterType": {
    title: '水类型',
    width: 100,
    key: 'waterType',
    dataIndex: 'waterType',
    valueEnum: {纯水: "纯水", 浓缩液: "浓缩液", 透析液: "透析液"}
  },
  "fileInfo": {
    title: '上传图片/PDF',
    width: 140,
    key: 'fileInfo',
    dataIndex: 'fileInfo',
    render: file => {
      if (file != null && file.url) {
        return <a href={`${file.url}`} target="_blank">{file.fileName}</a>
      }
      return <div style={{color: '#999', fontSize: '12px'}}>{'<暂无文件>'}</div>
    },
    renderFormItem: (_, { record={} }) => {
      // console.log(record)
      return <FileUpload file={record.fileInfo}/>
    }
  },
  "inspectionValueFile": {
    title: '检测结果(图片/PDF)',
    width: 140,
    key: 'inspectionValue',
    dataIndex: 'inspectionValue',
    render: file => {
      if (file != null && file.url) {
        return <a href={`${file.url}`} target="_blank">{file.fileName}</a>
      }
      return <div style={{color: '#999', fontSize: '12px'}}>{'<暂无文件>'}</div>
    },
    renderFormItem: (_, { record={} }) => {
      // console.log(record)
      return <FileUpload file={record.fileInfo}/>
    }
  },
  "device": {
    title: '设备',
    key: 'device',
    width: 200,
    dataIndex: 'device',
    render: val => {
      const value = `${val.name}(${val.type})`
      if (val.bed && val.bed.name) {
        return value + `${val.bed.name}`
      }
      return value
    },
    renderFormItem: val => {
      return <DeviceSelect record={val}/>
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
const DS_ITEM_Field = {
  "透析室空气消毒": 'dialAirRecords',
  "配置透析液细菌培养检测": 'dialCfgBCRecords',
  "配置透析液成分检测": 'dialCfgCORecords',
  "配置透析液内毒素检测": 'dialCfgENRecords',
  "浓缩液配制桶及容器清洁与消毒": 'dialContainerDisinfectionRecords',
  "物表消毒": 'dialSurfaceRecords',
  "透析用水细菌培养检测": 'dialWaterBCRecords',
  "透析用水电解质检测": 'dialWaterELRecords',
  "透析用水内毒素检测": 'dialWaterENRecords',
  "透析用水游离氯检测": 'dialWaterFCRecords',
  "透析用水有毒化学物检测": 'dialWaterNCRecords',
  "透析用水PH值检测": 'dialWaterPHRecords',
  "透析用水微量元素检测": 'dialWaterTERecords',
  "透析用水水硬度检测": 'dialWaterWHRecords',
  "透析机透析液细菌培养检测": 'dialysateBCTestRecords',
  "透析机透析液内毒素检测": 'dialysateEndotoxinTestRecords',
  "透析机消毒检测": 'dialDeviceDialRecords',
  "水处理机消毒检测": 'dialDeviceWaterRecords',
}

const DsGroupForm = (props) => {
  const type = props.type
  // console.log('props.values', props.values)
  const [dataSource, setDataSource] = useState(props.values || {})
  // console.log('dataSource', dataSource)
  const [editableKeys, setEditableRowKeys] = useState({});
  const [currentGroupId, setCurrentGroupId] = useState(undefined);
  const actionRef = {
    "透析室空气消毒": useRef(), "配置透析液细菌培养检测": useRef(), "配置透析液成分检测": useRef(), "配置透析液内毒素检测": useRef(),
    "浓缩液配制桶及容器清洁与消毒": useRef(), "物表消毒": useRef(), "透析用水细菌培养检测": useRef(), "透析用水电解质检测": useRef(), "透析用水内毒素检测": useRef(), "透析用水游离氯检测": useRef(), "透析用水有毒化学物检测": useRef(),
    "透析用水PH值检测": useRef(), "透析用水微量元素检测": useRef(), "透析用水水硬度检测": useRef(), "透析机透析液细菌培养检测": useRef(), "透析机透析液内毒素检测": useRef(), "透析机消毒检测": useRef(), "水处理机消毒检测": useRef(),
  }

  const handleOnEditableRowKeys = (itemType, keys, editableRows) => {
    // console.log(itemType, keys)
    const map = {}
    map[itemType] = keys // {editableKeys, editableRows}
    setEditableRowKeys({...editableKeys, ...map})
  }

  const updateRow = (itemType, rowId, realId, values) => {
    // console.log('updateRow#currentTableSource:1', (dataSource || {})[DS_ITEM_Field[itemType]])
    let dataSource2 = dataSource;
    let exist = ((dataSource || {})[DS_ITEM_Field[itemType]] || []).filter(row => row.id === rowId).length > 0;
    let rowList = []
    if (exist) { // update rows
      rowList = ((dataSource || {})[DS_ITEM_Field[itemType]] || []).map(row => {
        if (row.id === rowId) { return {...values, id: realId, isCreate: false } }
        return row
      })
    } else { // add new row
      rowList = ((dataSource || {})[DS_ITEM_Field[itemType]] || []).filter(row => row.id !== rowId)
      rowList.push({...values, id: realId, isCreate: false})
    }
    dataSource2[DS_ITEM_Field[itemType]] = rowList
    // console.log('updateRow#currentTableSource:2', dataSource2[DS_ITEM_Field[itemType]])
    setDataSource({...dataSource2})
  }

  const fetchGroupId = async () => {
    const groupId = (props.values || {}).id || undefined
    if (groupId) return groupId
    if (currentGroupId) return currentGroupId
    // create new group
    const resp = await createDsGroup(type, {})
    if (resp.status === 201) {
      setCurrentGroupId(resp.data.id)
      return resp.data.id
    }
    return undefined
  }

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
        columns.push({ title: '消毒残留物测试检测值(ppm)', width: 180, key: 'inspectionValue', dataIndex: 'inspectionValue' })
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
        columns.push(DS_ITEM_FieldColumn["device"])
        columns.push(DS_ITEM_FieldColumn["waterType"])
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

    columns.push({
      title: '操作',
      width: 100,
      valueType: 'option',
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>
      ]
    })

    // current data
    const currentTableSource = (dataSource || {})[DS_ITEM_Field[itemType]] || []
    // console.log('currentTableSource', currentTableSource)

    // caseOrder
    let newCaseOrder = 0 // cal
    for (let i = 0; i < currentTableSource.length; i += 1) { // 寻找最大值
      let item = currentTableSource[i]
      newCaseOrder = newCaseOrder >= item.caseOrder ? newCaseOrder : item.caseOrder
    }
    newCaseOrder += 1 // 在最大的值上+1


    return <div>
      <EditableProTable
        rowKey="id"
        headerTitle={itemType}
        actionRef={actionRef[itemType]}
        // maxLength={5}
        // 关闭默认的新建按钮
        recordCreatorProps={{creatorButtonText: "新建记录", onlyAddOneLineAlertMessage: "请先提交未保存的数据", record: {isCreate: true, caseOrder: newCaseOrder, id: -1*(new Date().getTime())}}}
        columns={columns}
        // request={}
        value={currentTableSource}
        onChange={(keys, rows) => handleOnTableChange(itemType, keys, rows)}
        editable={{
          // form,
          editableKeys: editableKeys[itemType],
          onSave: async (key, row, originRow, newLine) => {
            console.log(itemType+'onSave', key, row) // , originRow, newLine)
            let payload = JSON.parse(JSON.stringify(row || {}))
            delete payload.recordUser
            // delete payload.type
            delete payload.createdAt
            delete payload.updatedAt
            delete payload.recordId
            delete payload.index
            payload.inspectionAt = moment(payload.inspectionAt)//.format('')
            if (payload.device) {
              payload.device = {id: payload.device.id}
            }
            const groupId = await fetchGroupId()
            let resp = null
            if (!payload.isCreate) { // 原有记录，更新即可
              resp = await updateDsItem(itemType, groupId, payload.id, payload);
            } else {  // 新建一行记录，创建
              resp = await createDsItem(itemType, groupId, payload);
            }
            if (resp && (resp.status === 200 || resp.status === 201)) {
              props.onDataSavedDone && props.onDataSavedDone(resp.data.id)
              updateRow(itemType, row.id, resp.data.id, row)
            }
          },
          onChange: (keys, rows) => handleOnEditableRowKeys(itemType, keys, rows),
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

  const handleOnTableChange = (itemType, editableKeys, editableRows) => {
    var map = {}
    map[itemType] = {
      editableKeys, editableRows
    }
    setDataSource({...dataSource, ...map})
  }


  return (
    <Modal
      title={props.title}
      visible={props.visible}
      // width={1100}
      style={{minWidth: 1100}}
      initialValues={props.values || {}}
      onFinish={props.onClose}
      onCancel={props.onClose}
      destroyOnClose={true}
      bodyStyle={{ padding: '0px 0 36px 0px' }}
      footer={null}
    >
      {
        panel(type)
      }
    </Modal>
  );
};
export default DsGroupForm;

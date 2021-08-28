import React, { useState } from 'react';
import { Select } from 'antd';
import { searchDevice } from '@/services/histsys/device';

const DeviceSelect = ({ value, onChange, ...props }) => {
  const defaultDevice = value || {}

  const [list, setList] = useState([])
  const [firstLoad, setFirstLoad] = useState(true)
  const [searchText, setSearchText] = useState()

  // console.log({ value, onChange, props })
  // console.log('device-select', props)
  const handleOnSearch = async (text) => {
    setSearchText(text)
    const resp = await searchDevice({name: `%${text || ''}%`})
    if (resp.success) {
      setList(resp.data)
    }
  }

  const handleOnSelectChange = (id) => {
    // console.log(id)
    const devices = list.filter(device => device.id === id)
    if (devices.length > 0) {
      onChange(devices[0])
    }
  }

  if (firstLoad) {
    setSearchText(defaultDevice.name || '')
    handleOnSearch(defaultDevice.name || '')
    setFirstLoad(false)
  }
  // console.log(list)
  const options = list.map(device => <Select.Option key={`${device.id}`} value={device.id}>{`${device.name || ''}(${device.type})`}</Select.Option>)
  
  return <Select
    showSearch
    onSearch={handleOnSearch}
    filterOption={() => true}
    onChange={handleOnSelectChange}
    defaultValue={defaultDevice.id}
    inputValue={searchText}
    >
    { options }
    {/* {
      // 默认的值需要一直存在
      defaultDevice.id &&
      <Select.Option value={`${defaultDevice.id}`}>{`${defaultDevice.name || ''}(${defaultDevice.type || ''})`}</Select.Option>
    } */}
  </Select>
}

export default DeviceSelect

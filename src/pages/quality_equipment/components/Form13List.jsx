import { Table } from 'antd';

const { Column, ColumnGroup } = Table;

const data = [
  {
    普通: '0.5',
    隔离: '0.5',
    治疗准备室: '0.5',
    水处理间: '0.5',
    清洁库房: '0.5',
    污物处理室: '0.5',
    洁具间: '0.5',
    接诊室: '0.5',
    医护人员办公室: '0.5',
    生活区: '0.5',
    洁净度治疗准备室: '0.5',
    洁净度水处理间: '0.5',
    洁净度清洁库房: '0.5',
    配液间: '0.5',
    复用后透析器储存间: '0.5',
    洁净度医护人员办公室: '0.5',
    洁净度生活区: '0.5',
    透析治疗室: '0.5',
    专用手术室: '0.5',
    潜在感染风险区接诊室: '0.5',
    透析器复用间: '0.5',
    污染区域污物处理室: '0.5',
    污染区域洁具间: '0.5',
  },
];
export default () => {
  return (
    <Table dataSource={data} bordered>
      <ColumnGroup title="设定值（得分）">
        <ColumnGroup title="功能分区">
          <ColumnGroup title="功能区">
            <ColumnGroup title="透析治疗室">
              <Column title="普通" dataIndex="普通" />
              <Column title="隔离" dataIndex="隔离" />
            </ColumnGroup>
            <Column title="治疗准备室" dataIndex="治疗准备室" />
          </ColumnGroup>
          <ColumnGroup title="辅助功能区">
            <Column title="水处理间" dataIndex="水处理间" />
            <Column title="清洁库房" dataIndex="清洁库房" />
            <Column title="污物处理室" dataIndex="污物处理室" />
            <Column title="洁具间" dataIndex="洁具间" />
            <Column title="接诊室/区" dataIndex="接诊室" />
          </ColumnGroup>
          <ColumnGroup title="医护人员办公室">
            <Column title="医护人员办公室" dataIndex="医护人员办公室" />
          </ColumnGroup>
          <ColumnGroup title="生活区">
            <Column title="生活区" dataIndex="生活区" />
          </ColumnGroup>
        </ColumnGroup>
        <ColumnGroup title="洁净度">
          <ColumnGroup title="清洁区域">
            <Column title="治疗准备室" dataIndex="洁净度治疗准备室" />
            <Column title="水处理间" dataIndex="水处理间" />
            <Column title="清洁库房" dataIndex="清洁库房" />
            <Column title="配液间" dataIndex="配液间" />
            <Column title="复用后透析器储存间" dataIndex="复用后透析器储存间" />
            <Column title="医护人员办公室" dataIndex="洁净度医护人员办公室" />
            <Column title="生活区" dataIndex="洁净度生活区" />
          </ColumnGroup>
          <ColumnGroup title="潜在感染风险区">
            <Column title="透析治疗室" dataIndex="透析治疗室" />
            <Column title="专用手术室/操作室" dataIndex="专用手术室" />
            <Column title="接诊室/区及患者更衣室" dataIndex="潜在感染风险区接诊室" />
          </ColumnGroup>
          <ColumnGroup title="污染区域">
            <Column title="透析器复用间" dataIndex="透析器复用间" />
            <Column title="污物处理室" dataIndex="污染区域污物处理室" />
            <Column title="洁具间" dataIndex="污染区域洁具间" />
          </ColumnGroup>
        </ColumnGroup>
      </ColumnGroup>
    </Table>
  );
};

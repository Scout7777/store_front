// Prevalence
import { Facet } from '@ant-design/charts';

const Form11 = () => {
  const dv = new DataSet.DataView();
  const data = [
    {
      gender: '男',
      count: 40,
      class: '一班',
      grade: '一年级',
    },
    {
      gender: '女',
      count: 30,
      class: '一班',
      grade: '一年级',
    },
    {
      gender: '男',
      count: 35,
      class: '二班',
      grade: '一年级',
    },
    {
      gender: '女',
      count: 45,
      class: '二班',
      grade: '一年级',
    },
    {
      gender: '男',
      count: 20,
      class: '三班',
      grade: '一年级',
    },
    {
      gender: '女',
      count: 35,
      class: '三班',
      grade: '一年级',
    },
    {
      gender: '男',
      count: 30,
      class: '一班',
      grade: '二年级',
    },
    {
      gender: '女',
      count: 40,
      class: '一班',
      grade: '二年级',
    },
    {
      gender: '男',
      count: 25,
      class: '二班',
      grade: '二年级',
    },
    {
      gender: '女',
      count: 32,
      class: '二班',
      grade: '二年级',
    },
    {
      gender: '男',
      count: 28,
      class: '三班',
      grade: '二年级',
    },
    {
      gender: '女',
      count: 36,
      class: '三班',
      grade: '二年级',
    },
  ];
  const config = {
    appendPadding: [0, 16, 16, 16],
    data,
    type: 'tree',
    fields: ['grade', 'class'],
    meta: {
      percent: {
        formatter: function formatter(val) {
          return `${(val * 100).toFixed(2)}%`;
        },
      },
    },
    line: {
      style: { stroke: '#dedede' },
      smooth: true,
    },
    tooltip: { showMarkers: false },
    eachView: function eachView(view, facet) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      config;
      dv.source(facet.data).transform({
        type: 'percent',
        field: 'count',
        dimension: 'gender',
        as: 'percent',
      });
      return {
        type: 'pie',
        options: {
          data: dv.rows,
          angleField: 'percent',
          colorField: 'gender',
          pieStyle: { opacity: 0.85 },
          animation: {},
          interactions: [{ type: 'element-active' }],
        },
      };
    },
  };
  return <Facet {...config} />;
};

export default Form11;

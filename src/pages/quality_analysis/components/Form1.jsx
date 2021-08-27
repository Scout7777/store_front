import React from 'react';
import { FlowAnalysisGraph } from '@ant-design/charts';

const Form1 = () => {
  const data = {
    nodes: [
      {
        id: '0',
        value: {
          title: '患者信息',
          items: [
            {
              text: '患者信息',
            },
          ],
        },
      },
      {
        id: '3',
        value: {
          title: '入室方式',
          items: [
            {
              text: '入室方式',
            },
          ],
        },
      },
      {
        id: '4',
        value: {
          title: '神志',
          items: [
            {
              text: '神志',
            },
          ],
        },
      },
      {
        id: '5',
        value: {
          title: '食欲',
          items: [
            {
              text: '食欲',
            },
          ],
        },
      },
      {
        id: '1',
        value: {
          title: '状态',
          items: [
            {
              text: '状态',
            },
          ],
        },
      },
      {
        id: '2',
        value: {
          title: '体重',
          items: [
            {
              text: '体重',
            },
          ],
        },
      },
      {
        id: '6',
        value: {
          title: '干体重',
          items: [
            {
              text: '干体重',
            },
          ],
        },
      },
      {
        id: '7',
        value: {
          title: '透前体重',
          items: [
            {
              text: '透前体重',
            },
          ],
        },
      },
      {
        id: '8',
        value: {
          title: '透后体重',
          items: [
            {
              text: '透后体重',
            },
          ],
        },
      },
    ],
    edges: [
      {
        source: '0',
        target: '1',
        value: '来源A',
      },
      {
        source: '0',
        target: '2',
        value: '来源B',
      },
      {
        source: '1',
        target: '3',
        value: '来源A',
      },
      {
        source: '1',
        target: '4',
        value: '来源B',
      },
      {
        source: '1',
        target: '5',
        value: '来源B',
      },
      {
        source: '2',
        target: '6',
        value: '来源A',
      },
      {
        source: '2',
        target: '7',
        value: '来源B',
      },
      {
        source: '2',
        target: '8',
        value: '来源B',
      },
    ],
  };
  const config = {
    data,
    nodeCfg: {
      size: [140, 25],
      items: {
        padding: 6,
        containerStyle: {
          fill: '#fff',
        },
        style: (cfg, group, type) => {
          const styles = {
            icon: {
              width: 12,
              height: 12,
            },
            value: {
              fill: '#f00',
            },
            text: {
              fill: '#aaa',
            },
          };
          return styles[type];
        },
      },
      nodeStateStyles: {
        hover: {
          stroke: '#1890ff',
          lineWidth: 2,
        },
      },
      title: {
        containerStyle: {
          fill: 'transparent',
        },
        style: {
          fill: '#000',
          fontSize: 12,
        },
      },
      style: {
        fill: '#E6EAF1',
        stroke: '#B2BED5',
        radius: [2, 2, 2, 2],
      },
    },
    edgeCfg: {
      label: {
        style: {
          fill: '#aaa',
          fontSize: 12,
          fillOpacity: 1,
        },
      },
      style: (edge) => {
        const stroke = edge.target === '0' ? '#c86bdd' : '#5ae859';
        return {
          stroke,
          lineWidth: 1,
          strokeOpacity: 0.5,
        };
      },
      edgeStateStyles: {
        hover: {
          lineWidth: 2,
          strokeOpacity: 1,
        },
      },
    },
    markerCfg: (cfg) => {
      const { edges } = data;
      return {
        position: 'right',
        show: edges.find((item) => item.source === cfg.id),
        collapsed: !edges.find((item) => item.source === cfg.id),
      };
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <FlowAnalysisGraph {...config} />;
};

export default Form1;

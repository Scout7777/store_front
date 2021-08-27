import React, { useState } from 'react';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';

const { Divider } = StatisticCard;

const Form13List = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <ProCard>
      <RcResizeObserver
        key="resize-observer"
        onResize={(offset) => {
          setResponsive(offset.width < 596);
        }}
      >
        <StatisticCard.Group
          title="血液透析患者肾脏病原发病诊断构成比"
          direction={responsive ? 'column' : 'row'}
        >
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: '原发病A',
              value: 112893,
              suffix: '人',
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: '原发病B',
              value: 112893,
              suffix: '人',
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: '原发病C',
              value: 112893,
              suffix: '人',
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: '原发病D',
              value: 112893,
              suffix: '人',
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: '原发病E',
              value: 112893,
              suffix: '人',
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: '同期慢性肾衰竭血液透析患者的总人数',
              value: 799999,
              suffix: '人',
            }}
          />
        </StatisticCard.Group>
      </RcResizeObserver>
    </ProCard>
  );
};

export default Form13List;

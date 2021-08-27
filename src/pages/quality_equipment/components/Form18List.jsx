import React, { useState } from 'react';
import ProCard, { StatisticCard } from '@ant-design/pro-card';
import RcResizeObserver from 'rc-resize-observer';

const { Divider } = StatisticCard;

const Form18List = () => {
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
              title: 'HD',
              value: 112893,
              suffix: '人',
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: 'HDF',
              value: 1123,
              suffix: '人',
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: 'HFD',
              value: 1193,
              suffix: '人',
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: 'HP',
              value: 2893,
              suffix: '人',
            }}
          />
          <Divider type={responsive ? 'horizontal' : 'vertical'} />
          <StatisticCard
            statistic={{
              title: '血液透析模式总例次',
              value: 756469,
              suffix: '人',
            }}
          />
        </StatisticCard.Group>
      </RcResizeObserver>
    </ProCard>
  );
};

export default Form18List;

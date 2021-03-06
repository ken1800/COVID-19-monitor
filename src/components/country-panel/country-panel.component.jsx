import React from 'react';

import { Panel, Icon, Whisper, Tooltip } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { Key, ContainerP, CountryHeader } from './country-panel.styles';

import { getKey } from '../../utils/get-key.utils';


const CountryPanel = ({ country, cases, deaths, recovered, active, todayCases, todayDeaths }) => {
  const toolTip = content => (
    <Tooltip>
      <i>{ content } today</i>
    </Tooltip>
  );
  return (
  <Panel style={{ marginBottom: '10px' }} key={getKey(country)} bordered>
    <CountryHeader>{country}</CountryHeader>
    <ContainerP>
      <Key>Cases</Key>: {cases} { todayCases > 0 ? 
      <Whisper placement='right' trigger='hover' speaker={toolTip(todayCases)}>
        <Icon icon='angle-double-up' style={{color:'green', cursor:'pointer'}} />
      </Whisper>  : null }
    </ContainerP>
    <ContainerP>
      <Key>Deaths</Key>: {deaths} { todayDeaths > 0 ?  
      <Whisper placement='right' trigger='hover' speaker={toolTip(todayDeaths)}>
        <Icon icon='angle-double-up' style={{color:'green', cursor:'pointer'}} /> 
      </Whisper> : null }
    </ContainerP>
    <ContainerP>
      <Key>Recovered</Key>: {recovered}
    </ContainerP>
    <ContainerP>
      <Key>Active</Key>: {active}
    </ContainerP>
  </Panel>
)};

export default CountryPanel;
import React from 'react';
import '../style/InfoBox.css';
import { InfoTown } from './InfoTown';
import { InfoWeek } from './InfoWeek';

export const InfoBox = ({ data }) => (
  <div className="infoBox">
    <InfoTown data={data} />
    <InfoWeek week={data.week} />
  </div>
);

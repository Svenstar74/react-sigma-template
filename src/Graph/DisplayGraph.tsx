import '@react-sigma/core/lib/react-sigma.min.css';
import { SigmaContainer } from '@react-sigma/core';

import LoadGraph from './LoadGraph';

import PreventDoubleClickStage from './features/PreventDoubleClickStage/GraphEvents';
import DragAndDrop from './features/DragAndDrop/GraphEvents';
import CenterNode from './features/CenterNode/GraphEvents';

function DisplayGraph() {
  return (
    <SigmaContainer
      style={{ width: '100vw', height: '100vh' }}
    >
      <LoadGraph />

      <PreventDoubleClickStage />
      <DragAndDrop />
      <CenterNode />
    </SigmaContainer>
  );
}

export default DisplayGraph;

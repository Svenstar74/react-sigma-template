import '@react-sigma/core/lib/react-sigma.min.css';
import { SigmaContainer } from '@react-sigma/core';

import LoadGraph from './LoadGraph';

import PreventDoubleClickStage from './Features/PreventDoubleClickStage/GraphEvents';
import DragAndDrop from './Features/DragAndDrop/GraphEvents';

function DisplayGraph() {
  return (
    <SigmaContainer
      style={{ width: '100vw', height: '100vh' }}
    >
      <LoadGraph />

      <PreventDoubleClickStage />
      <DragAndDrop />
    </SigmaContainer>
  );
}

export default DisplayGraph;

import '@react-sigma/core/lib/react-sigma.min.css';
import { SigmaContainer } from '@react-sigma/core';

import LoadGraph from './LoadGraph';

function DisplayGraph() {
  return (
    <SigmaContainer
      style={{ width: '100vw', height: '100vh' }}
    >
      <LoadGraph />
    </SigmaContainer>
  );
}

export default DisplayGraph;

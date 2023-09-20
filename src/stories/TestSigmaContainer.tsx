import '@react-sigma/core/lib/react-sigma.min.css';
import { SigmaContainer } from '@react-sigma/core';
import LoadGraph from '../Graph/LoadGraph';

interface Props {
  children: React.ReactNode;
  loadGraph?: 'example4nodes'
}

function TestSigmaContainer({ children, loadGraph }: Props) {
  return (
  <SigmaContainer style={{ width: '100vw', height: '100vh' }}>
    {loadGraph && <LoadGraph />}
    {children}
  </SigmaContainer>
  );
}
 
export default TestSigmaContainer;

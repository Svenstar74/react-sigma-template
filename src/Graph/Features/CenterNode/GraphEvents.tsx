import { useEffect } from 'react';
import { useCamera, useRegisterEvents, useSigma } from '@react-sigma/core';

function GraphEvents() {
  const sigma = useSigma();
  const { goto } = useCamera();

  const registerEvents = useRegisterEvents();

  useEffect(() => {
    registerEvents({
      downNode(e) {
        sigma.getGraph().setNodeAttribute(e.node, 'highlighted', true);

        const nodeDisplayData = sigma.getNodeDisplayData(e.node);
        goto({ ...nodeDisplayData, ratio: 0.5 }, { duration: 1000 });
      },
    });
  }, [sigma, registerEvents]);

  return null;
}

export default GraphEvents;

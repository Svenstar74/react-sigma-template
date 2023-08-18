import { useEffect } from "react";
import { useLoadGraph } from "@react-sigma/core";
import Graph from "graphology";

function LoadGraph() {
  const loadGraph = useLoadGraph();

  useEffect(() => {
    const graph = new Graph();
    graph.addNode("first", { x: 0, y: 0, size: 15, label: "My first node", color: "#FA4F40" });

    loadGraph(graph);
  }, [loadGraph]);

  return null;
};

export default LoadGraph;

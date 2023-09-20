import { useEffect } from "react";
import { useLoadGraph } from "@react-sigma/core";
import Graph from "graphology";

function LoadGraph() {
  const loadGraph = useLoadGraph();

  useEffect(() => {
    const graph = new Graph();
    graph.addNode("first", { x: 0, y: 1, size: 10, label: "first node", color: "#555" });
    graph.addNode("second", { x: 1, y: 1, size: 10, label: "second node", color: "#555" });
    graph.addNode("third", { x: 1, y: 0, size: 10, label: "third node", color: "#555" });
    graph.addNode("fourth", { x: 0, y: 0, size: 10, label: "fourth node", color: "#555" });

    loadGraph(graph);
  }, [loadGraph]);

  return null;
};

export default LoadGraph;

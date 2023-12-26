import React, { useState, useEffect } from "react";
import Controls from "../components/Controls/Controls";
import Visualizer from "../components/Visualizer/Visualizer";
import BinaryTree from "./../lib/tree";
import animateNodeInTree from "./../lib/animateNodeInTree";
import { Container } from "@mui/material";

const TreesPage = () => {
  const [traversedList, setTraversedList] = useState([]);
  const [delayedList, setDelayedList] = useState([]);
  const [data, setData] = useState({
    name: "34",
    children: [
      { name: "92" },
      {
        name: "23",
        children: [
          {
            name: "04",
            children: [
              { name: "09" },
              { name: "16" }
            ]
          },
          { name: "12" }
        ]
      }
    ]
  });
  const [selectedTraversal, setSelectedTraversal] = useState("");
  const tree = new BinaryTree("34");

  useEffect(() => {
    tree.insert("23", "left");
    tree.insert("92", "right");
    tree.insertAt("23", "12", "left");
    tree.insertAt("23", "04", "right");
    tree.insertAt("04", "16", "left");
    tree.insertAt("04", "09", "right");
  }, []);

  const delayList = () => {
    traversedList.forEach((listItem, index) => {
      setTimeout(() => {
        setDelayedList((prevList) => [...prevList, listItem]);
        updateTree(listItem);
      }, 1500 * index);
    });
  };

  const updateTree = (node) => {
    if (data.name === String(node)) {
      setData((prevData) => ({ ...prevData, circleProps: { fill: "red" } }));
    } else {
      const updatedTreeData = animateNodeInTree(data, String(node));
      setData(updatedTreeData);
    }
  };

  const handleChange = (newSelectedTraversal) => {
    setSelectedTraversal(newSelectedTraversal);
    setDelayedList([]);
    setTraversedList([]);
    resetTreeDiagram();
  };

  const animate = () => {
    if (selectedTraversal.value === "inorder") {
      tree.inorder();
    } else if (selectedTraversal.value === "preorder") {
      tree.preorder();
    } else if (selectedTraversal.value === "postorder") {
      tree.postorder();
    } else {
      tree.levelordertraverse();
    }
    const newTraversedList = tree.getTraversed();
    setTraversedList(newTraversedList);
    delayList();
  };

  const resetTreeDiagram = () => {
    const newData = {
      name: "34",
      children: [
        { name: "92" },
        {
          name: "23",
          children: [
            {
              name: "04",
              children: [
                { name: "09" },
                { name: "16" }
              ]
            },
            { name: "12" }
          ]
        }
      ]
    };
    setData(newData);
    animate();
  };

  return (
    <Container>
      <Visualizer data={data} delayedList={delayedList} />
      <Controls selectedTraversal={selectedTraversal} handleChange={handleChange} />
    </Container>
  );
};

export default TreesPage;

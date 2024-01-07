import React, { useEffect, useState, useContext } from 'react';
import { Tree } from 'react-tree-graph';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { Container } from '@mui/material';

const BinaryTree = observer(() => {
  const [translate, setTranslate] = useState({ x: 50, y: 50 });
  const { rodSettings } = useContext(Context);
  console.log(rodSettings._decisionTree);
  useEffect(() => {
    const dimensions = document.getElementById('tree-container').getBoundingClientRect();
    setTranslate({ x: dimensions.width / 2, y: dimensions.height / 2 });
  }, []);

  return (
    <Container id="tree-container" style={{ width: '100%', height: '400px' }}>
      {rodSettings._decisionTree ? (
        <Tree
          data={rodSettings._decisionTree}
          height={400}
          width={400}
          translate={translate}
          orientation="vertical"
        />
      ) : "No tree"}
    </Container>
  );
});

export default BinaryTree;

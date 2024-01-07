import React, { useContext, useState } from 'react';
import { TextField, Typography,Fab , Box , Button, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { observer } from 'mobx-react-lite';
import { Context } from "../index";
import cut from '../services/wireCuttingFunc';

const RodComponent = observer(() => {
  const {rodSettings} = useContext(Context)
  console.log(rodSettings._decisionTree);
  const handleLengthChange = (event) => {
    const newLength = parseFloat(event.target.value);
      if(newLength >= 200){
        rodSettings.setRodLength(0)
      }else{
        rodSettings.setRodLength(newLength)
      }
  };

  const [lengths, setLengths] = useState([{ length: 1, price: 0 }]);

  const addLength = () => {
    setLengths([...lengths, { length: lengths.length + 1, price: 0 }]);
  };

  const handlePriceChange = (index, event) => {
    const newPrice = parseFloat(event.target.value);
    rodSettings.setRodPrice(lengths[index].length, newPrice);
    const newLengths = [...lengths];
    newLengths[index].price = event.target.value;
    setLengths(newLengths);
  };
  const [result, setResult] = useState()
  const handleCutting = () => {
    const prices = Object.values(rodSettings._rodPrice);
    const result = cut(rodSettings._rodLength, prices);
    
    console.log(`Maximum profit for rod of length ${rodSettings._rodLength}: ${result.maxProfit}`);
    console.log(`The rod was cut into lengths of: ${result.lengths.join(", ")}`);
    console.log(`Decision tree: `, result.decisionTree); 
    console.log(`Execution time: ${result.executionTime} milliseconds`);
    setResult(prevResult => ({...prevResult, ...result}))
    rodSettings.setDecisionTree(result.decisionTree); // сохранение дерева решений в стейт
  };  
  

  const theme = useTheme();

  return (
    <Box style={{marginTop: '15px'}}>
      <Typography variant="h6">Rod length: {isNaN(rodSettings._rodLength) ? 0 : rodSettings._rodLength} m</Typography>
      <TextField
        label="Input new length"
        type="number"
        style={{marginTop: '10px'}}
        value={rodSettings._rodLength}
        onChange={handleLengthChange}
      />
      <Box style={{ display: 'flex', marginTop: '16px', flexWrap: 'wrap' }}>
        {Array.from({ length: Math.floor(Number(rodSettings._rodLength)) }, (_, index) => (
          <Box
            key={index}
            style={{
              height: '20px',
              width: '100px', 
              backgroundColor: theme.palette.primary.main,
              marginTop: '7px',
              marginLeft: '1px'
            }}
          />
          ))}
      </Box>
      
      <Box>
      <Box display={'flex'} gap={'20px'} marginTop={'15px'}>
        <Typography variant='h6'>Add price for each length</Typography>
        <Fab size="small" color="secondary" aria-label="add" onClick={addLength}>
          <AddIcon/>
        </Fab>
      </Box>
      {lengths.map((item, index) => (
        <Box key={index} > 
          <Box
            style={{
              height: '20px',
              width: `${100 * item.length}px`, 
              backgroundColor: theme.palette.primary.main, 
              margin: '10px 5px',
            }}
          />   
          <TextField
            label={`Input price for length ${index+1}`}
            type="number"
            style={{marginTop: '10px'}}
            value={item.price}
            onChange={(event) => handlePriceChange(index, event)}
          />
        </Box>
        ))}
      </Box>
      <Button variant="contained" style={{marginTop: "20px"}} onClick={handleCutting}>Count optimal cutting</Button>
      {result && (
      <Box style={{ marginTop: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Typography variant="h6">Cutting Results:</Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src="https://cdn-icons-png.flaticon.com/512/3720/3720367.png" alt="Image2" style={{ marginRight: '10px', width: '20px', height: '20px' }} />
          <Typography>{`Maximum profit for rod of length ${rodSettings._rodLength}: ${result.maxProfit}`}</Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src="https://www.svgrepo.com/show/403742/kitchen-knife.svg" alt="Image3" style={{ marginRight: '10px', width: '20px', height: '20px' }} />
          <Typography>{`The rod was cut into lengths of: ${result.lengths.join(", ")}`}</Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://cdn-icons-png.flaticon.com/512/2/2306.png" alt="Image4" style={{ marginRight: '10px', width: '20px', height: '20px' }} />
          <Typography>{`Execution time: ${result.executionTime} milliseconds`}</Typography>
        </div>
      </Box>
    )}
    </Box>
  );
});


export default RodComponent;

import React, { useContext, useState } from 'react';
import { TextField, Typography,Fab , Box , Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { observer } from 'mobx-react-lite';
import { Context } from "../index";
import cut from '../services/wireCuttingFunc';

const RodComponent = observer(() => {
  const {rodSettings} = useContext(Context)
  console.log(rodSettings);
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

  const handleCutting = () => {
    const prices = Object.values(rodSettings._rodPrice);
    const result = cut(rodSettings._rodLength, prices);
    console.log(`Maximum profit for rod of length ${rodSettings._rodLength}: ${result.maxProfit}`);
    console.log(`The rod was cut into lengths of: ${result.lengths.join(", ")}`);
  };


  return (
    <Box>
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
              backgroundColor: 'blue', 
              margin: '2px 5px',
            }}
          />
          ))}
      </Box>
      
      <Box>
      <Box display={'flex'} gap={'20px'}>
        <Typography variant='h6'>Add price for each length</Typography>
        <Fab size="small" color="secondary" aria-label="add" onClick={addLength}>
          <AddIcon/>
        </Fab>
      </Box>
      {lengths.map((item, index) => (
        <Box key={index}>
          <Box
            style={{
              height: '20px',
              width: `${100 * item.length}px`, 
              backgroundColor: 'blue', 
              margin: '2px 5px',
            }}
          />   
          <TextField
            label="Input new length"
            type="number"
            style={{marginTop: '10px'}}
            value={item.price}
            onChange={(event) => handlePriceChange(index, event)}
          />
        </Box>
        ))}
      </Box>
      <Button variant="contained" style={{marginTop: "20px"}} onClick={handleCutting}>Count optimal cutting</Button>
    </Box>
  );
});

export default RodComponent;

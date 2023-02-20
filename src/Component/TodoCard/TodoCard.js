import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './TodoCard.css'
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';


const TodoCard = (props) => {
  return (
    <div className='card-wrapper'>
      <Card sx={{ maxWidth: 345 , 'background-color': '#8ac1f7'}} className="css-1ri6ub7-MuiPaper-root-MuiCard-root first123">
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {props.title}
      </Typography>
      <Typography gutterBottom variant="p" component="div">
      {props.details}
      </Typography>
      </CardContent>
      
      <CardActions>    
      { props.ABC ? <div></div> :
      <Button variant="contained" endIcon={<SendIcon />} onClick={() => props.complete(props.id)}>
      Completed
    </Button>
        /* <Button size="small" onClick={() => props.complete(props.id)}>Complete</Button>
      <Button size="small" onClick={() => props.delete(props.id)}>Delete</Button> */}
        <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton aria-label="delete" size="large" onClick={() => props.delete(props.id)}>
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Stack>
      </CardActions>
      </Card>
      </div>
      )
}

export default TodoCard


// const colors = {
  //   Sea: '#a2ccb6',
  //   Sand: '#fceeb5',
  //   Peach: '#ee786e',
          // }
      
          // const [color, setColor] = useState(colors.Sea)
          // useEffect(
            //   () => {
              //     document.body.style.background = color
              //   },
          //   [color]
          // )
          
          
          // <Fragment>
          //       <select value={color} onChange={e => setColor(e.target.value)}>
          //         {Object.entries(colors).map(([name, value]) => (
            //           <option key={`color--${name}`} value={value}>
            //             {name}
            //           </option>
            //         ))}
            //       </select>
            //       <h1>{color}</h1>
            //     </Fragment>
            // <button onClick={()=> {clickme("yellow")}}
            // const [color,setColor]= useState("blue")
            // const clickme = color =>{
            //   setColor(color)
            
            // }
            // useEffect(
            //   ()=>{
            //     document.body.style.background = color
            //   },[color]
            // )
// className="clorbtn">color</button>
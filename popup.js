import { Grid } from '@material-ui/core'
import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import InstagramIcon  from '@material-ui/icons/Instagram';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import "./popup.css"

function Popuppage() {
    return (<Grid container justifyContent="center"  alignItems="center" style={{height:"100vh"}}  >
               <Grid item md={3} spacing={5} style={{background:"white",height:"500px",borderRadius:"10px"}} justifyContent="center"  alignItems="center"  >
                  <Grid item md={12} container justifyContent="flex-end" alignItems="center" style={{height:"10%",color:"green"}}  ><Grid style={{margin:"0px 20px 0px 0px"}}><HighlightOffIcon/></Grid></Grid>
                  <Grid item container md={12} style={{height:"90%",overflow:"scroll",overflowX:"hidden"}}>

                  <Grid item md={12} container style={{height:"30%"}} >
                   <Grid item md={12} container  justifyContent="center" alignItems="center" >
                     <Grid><InstagramIcon/></Grid>
                   </Grid>
                   <Grid item md={12} container justifyContent="center">
                   <Grid>Connect wallet</Grid>
                   </Grid>
                   <Grid item md={12} container justifyContent="center" >
                   <Grid>to start using Algodesk</Grid>

                   </Grid>


                  </Grid>
                  <Grid item md={12} container  style={{height:"70%"}}>
                      <Grid item md={12}container className="buttons"  alignItems='center'    >
                          <Grid item md={3}  container justifyContent="center"  ><Grid><InstagramIcon/></Grid></Grid>
                          <Grid item md={6} ><Grid>title</Grid></Grid>
                          <Grid item md={3} container justifyContent="flex-start" ><Grid><ArrowForwardIosIcon/></Grid></Grid>

                      </Grid>
                      <Grid item md={12}container className="buttons"  alignItems='center' >
                          <Grid item md={3}  container justifyContent="center"  ><Grid><InstagramIcon/></Grid></Grid>
                          <Grid item md={6} ><Grid>title</Grid></Grid>
                          <Grid item md={3} container justifyContent="flex-start" ><Grid><ArrowForwardIosIcon/></Grid></Grid>

                      </Grid>
                      <Grid item md={12}container className="buttons"  alignItems='center' >
                          <Grid item md={3}  container justifyContent="center"  ><Grid><InstagramIcon/></Grid></Grid>
                          <Grid item md={6} ><Grid>title</Grid></Grid>
                          <Grid item md={3} container justifyContent="flex-start" ><Grid><ArrowForwardIosIcon/></Grid></Grid>

                      </Grid>
                      <Grid item md={12}container className="buttons"  alignItems='center' >
                          <Grid item md={3}  container justifyContent="center"  ><Grid><InstagramIcon/></Grid></Grid>
                          <Grid item md={6} ><Grid>title</Grid></Grid>
                          <Grid item md={3} container justifyContent="flex-start" ><Grid><ArrowForwardIosIcon/></Grid></Grid>

                      </Grid>


                  </Grid>
                  </Grid>

               </Grid>

           </Grid>
            
        
    )
}

export default Popuppage

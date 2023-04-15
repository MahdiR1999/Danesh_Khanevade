import { Grid } from "@mui/material";
import dindari from './Dindari.png';




export default function Dindari(){

    return (
        <Grid container spacing={1}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <h1 style={{'color':'darkblue'}}><img src={dindari} />دین داری</h1>
            <h2 style={{'color':'darkgreen'}}>&nbsp;&nbsp;← از جمله عوامل موثر در تحکیم خانواده، اعتقادات دینی و رفتارهای منطبق بر شاخص های دینی است. پژوهش های بسیاری، &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;تاثیر دین داری را بر سلامت روابط اعضای خانواده و استحکام آن اثبات کرده اند.</h2>
            </Grid>
        </Grid>
    )
}
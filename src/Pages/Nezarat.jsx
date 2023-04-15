import { Grid } from "@mui/material";
import nezarat from './Nezarat.png';




export default function Nezarat(){

    return (
        <Grid container spacing={1}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <h1 style={{'color':'darkblue'}}><img src={nezarat} />اعتقاد به نظارت الهی در روابط با خانواده</h1>
            <h2 style={{'color':'darkgreen'}}>← پرهیز از ظلم به همسر</h2>
            <h2 style={{'color':'darkgreen'}}>← بالا بردن آستانه تحمل فرد در رویارویی با مشکلات خانوادگی</h2>
            </Grid>
        </Grid>
    )
}
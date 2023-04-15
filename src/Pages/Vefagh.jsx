import { Grid } from "@mui/material";
import vefagh from './Vefagh.png';




export default function Vefagh(){

    return (
        <Grid container spacing={1}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <h1 style={{'color':'darkblue'}}><img src={vefagh} />ایجاد وفاق در تعیین بایسته های زندگی خانوادگی</h1>
            <h2 style={{'color':'darkgreen'}}>← از عوامل موثر در ایجاد اختلاف و کشمکش های خانوادگی {`=>`} اعتقادات متفاوت اعضای خانواده</h2>
            <h2 style={{'color':'darkgreen'}}>← رهنمودهای الهی(معیارهای واحد) {`=>`} تعیین کننده نوع رفتار اعضای خانواده پس اگر با ایمان باشند، در مشکلات به سرعت به &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;توافق می رسند و با دل سپردن به رهنمودهای اسلامی، رفتار خویش را سامان می بخشند.</h2>
            </Grid>
        </Grid>
    )
}
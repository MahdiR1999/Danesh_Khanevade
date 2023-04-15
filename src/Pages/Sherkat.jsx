import { Grid } from "@mui/material";
import sherkat from './Sherkat.jpg';




export default function Sherkat(){

    return (
        <Grid container spacing={1}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <h1 style={{'color':'darkblue'}}><img src={sherkat} />تاثیر شرکت در مراسم دینی</h1>
            <h2 style={{'color':'darkgreen'}}>← شرکت در آیین و مراسم های دینی {`=>`} تقویت روابط عاطفی در بین شرکت کنندگان در این مراسم</h2>
            <h2 style={{'color':'darkgreen'}}>← شرکت خانواده ها در این مراسم ها {`=>`} تقویت معنویت، یکپارچگی اعضای خانواده، تقویت صمیمیت بین آنها، تقویت &nbsp;&nbsp;&nbsp;&nbsp;خوش‌بینی و اعتماد به سایران و افزایش رضایت فرد از زندگی</h2>
            </Grid>
        </Grid>
    )
}
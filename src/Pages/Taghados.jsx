import { Grid } from "@mui/material";
import taghados from './Taghados.png';




export default function Taghados(){

    return (
        <Grid container spacing={1}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <h1 style={{'color':'darkblue'}}><img src={taghados} />اعتقاد به تقدس پیوند زناشویی</h1>
            <h2 style={{'color':'darkgreen'}}>&nbsp;&nbsp;← یکی از عواملی که باعث سوق یافتن به ازدواج و پیشگیری از آسیب های احتمالی پیوند زناشویی می شود، مقدس دانستن آن &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;است.</h2>
            <h2 style={{'color':'darkgreen'}}>&nbsp;&nbsp;← اگر به هر چیز مقدسی بی حرمتی کنیم، تقدس خود را از دست می دهد.</h2>
            <h2 style={{'color':'darkgreen'}}>&nbsp;&nbsp;← به همین دلیل است که در غرب، ازدواج صرفا یک قرارداد قانونی است و خانواده جایگاه خود را از دست داده است.</h2>
            <h2 style={{'color':'darkgreen'}}>&nbsp;&nbsp;← برخی روایات ↓</h2>
            <h3 style={{'color':'darkgreen'}}>&nbsp;&nbsp;&nbsp;&nbsp;← ازدواج سبب کامل شدن دین فرد می شود.</h3>
            <h3 style={{'color':'darkgreen'}}>&nbsp;&nbsp;&nbsp;&nbsp;← کسی که ازدواج می کند، خدا را پاک ملاقات می کند.</h3>
            <h3 style={{'color':'darkgreen'}}>&nbsp;&nbsp;&nbsp;&nbsp;← خداوند از طلاق نفرت دارد.</h3>
            </Grid>
        </Grid>
    )
}
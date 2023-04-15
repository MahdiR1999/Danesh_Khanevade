import { Grid } from "@mui/material";
import eteghadi from './Eteghadi.jpg';




export default function Eteghadi(){

    return (
        <Grid container spacing={1}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <h1 style={{'color':'darkblue'}}><img src={eteghadi} />عوامل اعتقادی</h1>
            <h2 style={{'color':'darkgreen'}}>&nbsp;&nbsp;← دو دسته روانشناس داریم ↓</h2>
            <h3 style={{'color':'darkgreen'}}>&nbsp;&nbsp;&nbsp;&nbsp;← دسته ای که می گویند با دور کردن افکار منفی می شود درمان کرد.</h3>
            <h3 style={{'color':'darkgreen'}}>&nbsp;&nbsp;&nbsp;&nbsp;← دسته ای که می گویند بینش و باور باید اصلاح شود.
با ایجاد شناخت، بینش و باورهای درست، قادر خواهیم بود که به طور غیر مستقیم اعضای خانواده را به &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;موفقیت برسانیم زیرا رفتار صحیح به دنبال نگرش صحیح تولید می شو.</h3>
            </Grid>
        </Grid>
    )
}
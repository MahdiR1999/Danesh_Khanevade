import { Grid } from "@mui/material";
import tasir from './Tasir.png';




export default function Tasir(){

    return (
        <Grid container spacing={1}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <h1 style={{'color':'darkblue'}}><img src={tasir} />تاثیر رعایت حلال و حرام الهی</h1>
            <h2 style={{'color':'darkgreen'}}>← غیبت حرام است {`=>`} نگه داشتن حرمت همدیگر در صورت نبود هم</h2>
            <h2 style={{'color':'darkgreen'}}>← تهمت حرام است {`=>`} اخترام از بین نمی رود و نفرت شکل نمی گیرد</h2>
            <h2 style={{'color':'darkgreen'}}>← سخن چینی حرام است {`=>`} اختلاف خانوادگی تشدید نمی شود</h2>
            <h2 style={{'color':'darkgreen'}}>← نسبت ناروا به زن پاکدامن حرام است {`=>`} روابط عاطفی همسران خصمانه نمی شود</h2>
            <h2 style={{'color':'darkgreen'}}>← شراب خواری حرام است {`=>`} همسر و فرزندان از بدرفتاری و خشونت در امان می مانند</h2>
            <h2 style={{'color':'darkgreen'}}>← دروغ گویی حرام است {`=>`} اعضای خانواده به یکدیگر اعتماد دارند</h2>
            </Grid>
        </Grid>
    )
}
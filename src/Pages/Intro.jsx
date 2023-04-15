import { Grid,Box,Card,CardActions,CardContent,Button,Typography, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import intro from './Intro.png';



export default function Intro(){
    const navigate = useNavigate();
    return (
        <Grid container spacing={0}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Card sx={{ minWidth: 275,'marginLeft':15 }} variant="outlined">
                    <CardContent>
                        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                        مقدمه
                        </Typography>
                        <CardMedia
                            component={"img"}
                            height={"300"}
                            alt="img"
                            image={intro}
                        >

                        </CardMedia>
                        <Typography variant="body1" sx={{'fontSize':20,'fontWeight':'bolder','color':'darkgreen'}}>
                        ازدواج دختر و پسر, سرآغاز دل‌دادگی و مهرورزی بین آنهاست و معمولا شیرین ترین روزهای
زندگی, پس از عقد آغاز می‌شود. برخی گمان می‌کنند اگر انتخاب همسر با دقت و وسواس زیاد صورت پذیرد یا زندگی مشترک با عشق عمیق آغازگردد، خانواده‌ای سعادتمند خواهند داشت؛ حال آنکه تفاوت‌های فردی و فراز و فرود ایام، زندگی را با چالش‌ها و مسائل
مختلف روبه رو خواهد کرد و اگر همسران از دانش لازم برای مدیریت روابط بین خود و نیز
مدیریت مسائل زندگی برخوردار نباشند در گذر زمان روابط عاطفی‌شان سست خواهد شد.

                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
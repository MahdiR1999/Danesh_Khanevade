import { Button, ButtonGroup, Divider, Grid, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Intro from "./Pages/Intro";
import Avamel from "./Pages/Avamel";
import Eteghadi from "./Pages/Eteghadi";
import Taghados from "./Pages/Taghados";
import Dindari from "./Pages/Dindari";
import Vefagh from "./Pages/Vefagh";
import Tasir from "./Pages/Tasir";
import Nezarat from "./Pages/Nezarat";
import Sherkat from "./Pages/Sherkat";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const headlines = [
  {name:'مقدمه',href:'',component:<Intro/>,index:true},
  {name:'عوامل تحکیم خانواده',href:'avamel',component:<Avamel/>,index:false},
  {name:'عوامل اعتقادی',href:'eteghadi',component:<Eteghadi/>,index:false},
  {name:'اعتقاد به تقدس پیوند زناشویی',href:'taghados',component:<Taghados/>,index:false},
  {name:'دین داری',href:'dindari',component:<Dindari/>,index:false},
  {name:'ایجاد وفاق در تعیین بایسته های زندگی خانوادگی',href:'vefagh',component:<Vefagh/>,index:false},
  {name:'تاثیر رعایت حلال و حرام الهی',href:'tasir',component:<Tasir/>,index:false},
  {name:'اعتقاد به نظارت الهی در روابط با خانواده',href:'nezarat',component:<Nezarat/>,index:false},
  {name:'تاثیر شرکت در مراسم دینی',href:'sherkat',component:<Sherkat/>,index:false}
]

function App() {
  const navigate = useNavigate();
  const goTo = param => e =>{
    navigate(param);
  }
  return (
    <Grid container sx={{'direction':'rtl','height':'100%'}}>
      <Grid sx={{'width':'100%','textAlign':'center'}} item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography variant="h5" sx={{'fontWeight':'bolder','color':'darkslategrey'}}>
          تحکیم خانواده
        </Typography>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Divider sx={{'mt':2}}/>
      </Grid>
      <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
        <Grid sx={{'mt':2,'textAlign':'center'}} item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography sx={{'color':'darkgoldenrod'}} variant="h5"><ViewHeadlineIcon/> سرفصل ها</Typography>
        </Grid>
        <Grid sx={{'mt':2,'textAlign':'center'}} item xl={12} lg={12} md={12} sm={12} xs={12}>
          <List sx={{'maxHeight':430,'overflowY':'auto'}}>
            {headlines.map((val,index)=>{
              return <ListItem key={index} sx={{'textAlign':'center','justifyContent':'center','mx':'auto'}}>
                <ListItemButton onClick={goTo(val.href)} sx={{'textAlign':'center','justifyContent':'center','mx':'auto'}}>
                  <Typography sx={{'color':'darkolivegreen'}} variant="h6"><ViewInArIcon/> {val.name}</Typography>
                </ListItemButton>
              </ListItem>
            })}
          </List>
        </Grid>
        <Divider sx={{'fontWeight':'bolder','color':'darkcyan','mt':3}} textAlign="left">ارائه دهنده</Divider>
        <Typography sx={{'textAlign':'center','mt':3,'color':'darkcyan'}} variant="h6">مهدی رائف</Typography>
        <Grid item sx={{'mx':'auto','justifyContent':'center','textAlign':'center'}}>
          <Button onClick={()=>{
            window.close();
          }} color="primary" sx={{'textAlign':'center','fontWeight':'bold','justifyContent':'center','mt':3}}>
            <PowerSettingsNewIcon/>
          </Button>
        </Grid>
      </Grid>
      <Grid sx={{'mt':2}} item xl={1} lg={1} md={1} sm={1} xs={1}>
        <Divider orientation="vertical"/>
      </Grid>
      <Grid sx={{'mt':2,'justifyContent':'center','mx':'auto'}} item xl={9} lg={9} md={9} sm={9} xs={9}>
        <Routes>
          {headlines.map((route,key)=>{
            return <Route index={route.index} path={route.href} element={route.component} key={key}></Route>
          })}
        </Routes>
        <Outlet/>
      </Grid>
    </Grid>
  )
}

export default App

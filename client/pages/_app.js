import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import Topnav from "../components/Topnav"
import './styles.css';


function MyApp({Component,pageProps}){
    return (
        <>
            <Topnav/>
            <Component {...pageProps}/>
        </>
    ) 
}

export default MyApp;
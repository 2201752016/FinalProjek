// import Footer from "./Footer";
import Navbar from '@/components/Navbar';
 
export default function Layout ({children}){
    return (
        <div>
            <Navbar/>
            {children}
            {/* <Footer/> */}
        </div>
    )
}
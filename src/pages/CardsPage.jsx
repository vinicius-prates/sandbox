import '../App.css';
import { Link } from 'react-router-dom'
import { BlackNavBar } from '../components/BlackNavBar';
import { Footer } from '../components/Footer';
import  GoldCard  from '../assets/card.png';
import ExclusiveCard from '../assets/card2.png';
import PlatinumCard from '../assets/card3.png';
export const CardsPage = () => {

    function show_details_gold () {

        var click = document.getElementById('dropDown');
        if(click.style.display === "none"){
            click.style.display = "block";
        }
        else{
            click.style.display = "none";
        }
    }
      
    function show_details_exclusive () {
        var click = document.getElementById('dropDown2');
        if(click.style.display === "none"){
            click.style.display = "block";
        }
        else{
            click.style.display = "none";
        }
    }

    function show_details_platinum () {
        var click = document.getElementById('dropDown3');
        if(click.style.display === "none"){
            click.style.display = "block";
        }
        else{
            click.style.display = "none";
        }
    }
    return(
        <>
        <BlackNavBar/>
        <h1 className="text-white bg-[#252525] text-center py-2 text-4xl justify-center ">3 Types of Cards!</h1>

        <div className="bg-[#252525] grid flex-col text-center py-12 gap-12 lg:grid-flow-col lg:grid-rows-2 lg:px-96">

            <div className="flex flex-col lg:w-[30rem]">
                <img src={GoldCard} className="bg-[#252525]  "></img>
                <button className="button text-white text-sm text-left mx-5 border-b-2 w-[16.4%] " onClick={show_details_gold}>More Info</button>
                <div id="dropDown" className="hidden">
                    <p className=" text-white text-xs text-left m-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in bibendum sapien. Quisque et enim vel dolor vulputate pharetra in varius mauris. Integer a leo id elit rutrum finibus ac id purus. Praesent eu nunc faucibus, iaculis erat eu, fermentum eros. Aliquam eleifend scelerisque ante quis gravida. Suspendisse pharetra tortor eu rhoncus tempus. Nam sagittis mas</p>
                </div>
                
            </div>

            <div className="flex flex-col lg:w-[30rem]">
                <img src={ExclusiveCard} className=" bg-[#252525] "></img>
                <button className="text-white text-sm text-left mx-5 border-b-2 w-[16.4%]" onClick={show_details_exclusive}>More Info</button>
                <div id="dropDown2" className="hidden">
                    <p className=" text-white text-xs text-left m-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in bibendum sapien. Quisque et enim vel dolor vulputate pharetra in varius mauris. Integer a leo id elit rutrum finibus ac id purus. Praesent eu nunc faucibus, iaculis erat eu, fermentum eros. Aliquam eleifend scelerisque ante quis gravida. Suspendisse pharetra tortor eu rhoncus tempus. Nam sagittis mas</p>
                </div>
            </div>
            <div className="flex flex-col lg:w-[30rem]">
                <img src={PlatinumCard} className="bg-[#252525]  "></img>
                <button className="text-white text-sm text-left mx-5 border-b-2 w-[16.4%]" onClick={show_details_platinum}>More info</button>
                <div id="dropDown3" className="hidden ">
                    <p className=" text-white text-xs text-left m-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in bibendum sapien. Quisque et enim vel dolor vulputate pharetra in varius mauris. Integer a leo id elit rutrum finibus ac id purus. Praesent eu nunc faucibus, iaculis erat eu, fermentum eros. Aliquam eleifend scelerisque ante quis gravida. Suspendisse pharetra tortor eu rhoncus tempus. Nam sagittis mas</p></div>
            </div>
            <div className="flex flex-col mx-6 my-4 text-left gap-2     lg:w-[25rem]">
                <h1 className="text-white text-3xl">What do you think?</h1>
                <p className="text-white text-lg text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at turpis eleifend,
                     dignissim ipsum eu, rutrum neque. In vehicula rhoncus interdum. </p>
                <a className="text-white text-lg font-bold py-6 px-2 bg-blue-700  rounded-2xl transition duration-200 text-center hover:bg-white hover:text-blue-600" href=""> Register!</a>
            </div>
        </div>
        <Footer/>
        </>
    )
}
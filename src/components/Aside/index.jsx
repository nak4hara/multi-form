import { useLocation } from "react-router-dom";
import Step from "../core-components/Step";

export default function Aside(){
    
    const location = useLocation();
    
    return(
        <div className="flex sm:flex-col pt-7 justify-center sm:pt-16 sm:pl-20 md:pl-4 gap-4 w-fit h-fit">
            <Step
                numberStep='1'
                titleStep='YOUR INFO'
                colorNumber={location.pathname === '/' ? 'text-primary-marine-blue bg-primary-pastel-blue border-primary-pastel-blue' : ''}/>
            <Step
                numberStep='2'
                titleStep='SELECT PLAN'
                colorNumber={location.pathname === '/select-plan' ? 'text-primary-marine-blue bg-primary-pastel-blue border-primary-pastel-blue' : ''}/>
            <Step
                numberStep='3'
                titleStep='ADD-ONS'
                colorNumber={location.pathname === '/add-ons' ? 'text-primary-marine-blue bg-primary-pastel-blue border-primary-pastel-blue' : ''}/>
            <Step
                numberStep='4'
                titleStep='SUMMARY'
                colorNumber={location.pathname === '/summary' ? 'text-primary-marine-blue bg-primary-pastel-blue border-primary-pastel-blue' : ''}/>
        </div>
    )
}
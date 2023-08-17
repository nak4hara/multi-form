import Step from "../core-components/Step";

export default function Aside(){
    return(
        <div className="flex pt-7 -z-10 justify-center gap-4 h-52 w-screen bg-cover bg-bottom bg-no-repeat bg-sidebar-desktop ">
            <Step numberStep='1' titleStep='YOUR INFO'/>
            <Step numberStep='2' titleStep='SELECT PLAN'/>
            <Step numberStep='3' titleStep='ADD-ONS'/>
            <Step numberStep='4' titleStep='SUMMARY'/>
        </div>
    )
}
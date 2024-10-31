import Header from "@/components/header";
import LeftIcons from "@/components/icons/LeftIcons";
import RightIcons from "@/components/icons/RightIcons";
import HomeComponent from "@/components/home";
import AboutComponent from "@/components/about";
import WorkComponent from "@/components/work";


export default function Home() {
  
  return (
    <div className="w-screen h-screen bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat dark:bg-darkBlue dark:text-white bg-contain bg-bottom">
      <Header/>
      <LeftIcons/>
      <RightIcons/>
      <WorkComponent/>
    </div>
  );
}

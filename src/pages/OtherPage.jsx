import { Outlet, useParams } from "react-router";  //Outlet not really used; replaces by names and useParam() (no clue how to utilize useParams...)
import SomeComponent from "../components/someComponent";

const OtherPage = () => {
  const { name } = useParams(); //gets the dynamic segment string name and puts it into const name
  return (
    <div>
      <h1>Hello from other page!</h1>
      <p>So, how are you?</p>
      {name === "SomeComponentA" ? (
        <SomeComponent header={"A"} formSchema={[]} onSubmit={()=>{}} onUnsubmit={()=>{}} id={1}/>
      ) : name === "SomeComponentB" ? (
        <SomeComponent header={"B"} formSchema={[]} onSubmit={()=>{}} onUnsubmit={()=>{}} id={2}/>
      ) : (
        <SomeComponent header={"Default"} formSchema={[]} onSubmit={()=>{}} onUnsubmit={()=>{}} id={3}/>
      )}    
    </div>
  );
};

export default OtherPage;
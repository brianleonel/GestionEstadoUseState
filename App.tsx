/*import Card from "./components/Card";
se importa Card 
function App(){
  return <Card/>;
}
export default App
import Card from "./components/Card"; 
function App(){
  return(<Card/>);
}
export default App
import Card from "./components/Card";
function App(){
    return(<Card text="mensaje..."/>);
}
export default App


import CompSec,{UsVerf,UsNoVerf} from "./components/Card"
import User from "./components/List"
function CompP(){
  let verf=true,vec=["brian","leonel"];
  if(verf==true){  
    return(<>
        <CompSec>
          <UsVerf text="Usuario verificado..."/>
        </CompSec>
        <User data={vec}/>
        </>
      );
  }
  else{  
    return(
        <CompSec>
          <UsNoVerf text="Usuario no verificado..."/>
        </CompSec>
      );
  }
}
export default CompP*/


import List from "./components/List"
function CompP(){
    let vec=["leonel","brian"]
    return(<List data={vec}/>);
}
export default CompP
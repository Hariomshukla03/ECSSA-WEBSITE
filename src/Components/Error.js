import { useRouteError } from "react-router-dom";

const Error=()=>{
    const error = useRouteError();
    return(
        <div className="font-semibold text-center h-[39.5rem] pt-[10rem]">
            <h1 className="text-[8rem]">404</h1>
            
            <h1 className="text-lg">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>Page Not Found</p>
      
        </div>
    )
}
export default Error;
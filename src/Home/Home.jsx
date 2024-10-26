

let Base = ({children}) =>{
    return (
        <div className="home-div w-full min-h-screen">
            <div className="sub-child">
                    {/* <NavBar/> */}
            </div>
            <div className="childrens">
                <div>{children}</div>
            </div>
        </div>
    )
}
export default Base;
import { Button, Image, Nav } from "react-bootstrap";
import {Cart, BoxArrowInLeft} from "react-bootstrap-icons";

const loggedIn = true;
const username = "Tester";

function NotLoggedIn() {
    return (
    <>
        <Button variant="light" size="sm">Log in</Button>
    </>
    );
}

function LoggedIn() {
    return (
    <>
        <a href="#" className="my-1 mx-2 link-light">{`Hello, ${username}`}</a>
        <Button variant="outline-light" size="sm" className="mx-2" style={{minWidth: "50px"}}><Cart/></Button>
        <Button variant="light" size="sm" className="mx-2" style={{minWidth: "50px"}}><span>Log out <BoxArrowInLeft/> </span></Button>
    </>
    );
}

function QuickStatus() {
    return (
    <>
        {loggedIn ? <LoggedIn/> : <NotLoggedIn/>}
    </>
    );
}

export default QuickStatus;
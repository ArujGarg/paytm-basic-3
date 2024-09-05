import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"


export const Dashboard = () => {
    return <div>
        <Appbar />
        <div>
            <Balance label={"10,000"} />
            <Users />
        </div>
    </div>
}
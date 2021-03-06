import React from 'react'
import {RouteComponentProps} from 'react-router'
import AuthContainer from "../../container/auth/AuthContainer";

const StartPage = ({history}: RouteComponentProps) => {
    return(
        <div>
            <AuthContainer
                history={history}
            />
        </div>
    )
};

export default StartPage;
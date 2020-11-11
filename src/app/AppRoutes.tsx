import React, {FC} from "react";
import {Route, Switch} from "react-router-dom";

import {routeConfigs} from "./routeConfigs";

export const AppRoutes: FC = () => (
    <Switch>
        {
            routeConfigs.map((config, index) => <Route key={index} {...config}/>)
        }
        <Route component={() => <h1>404</h1>} />
    </Switch>
)

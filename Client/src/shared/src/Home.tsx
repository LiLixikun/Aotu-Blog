import React from "react";

import loadable from '@loadable/component';

const Loading = <h3>Loading...</h3>;
// const AsyncComponent = lazy(() => import(/*aliasName: "AsyncComponent"*/'./AsyncComponent'));
const AsyncComponent = loadable(
    () => import(/*aliasName: "AsyncComponent"*/'./AsyncComponent'),
    { fallback: Loading }
)
// 预加载
// const OtherComponent = loadable(() =>
//   import(/* webpackPrefetch: true */ './OtherComponent'),
// )

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <AsyncComponent />
        </div>
    );
}

export default Home;

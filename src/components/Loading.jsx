import React from 'react'
import ReactLoading from "react-loading";

export default function Loading() {
    return (
        <div style={{margin:'50vh auto', width:'fit-content'}}>
            <ReactLoading  type={"bars"} color={"#70B0B5"} />
        </div>
    )
}

import React from 'react'
import { useLocation } from "react-router"
import RelationshipsTable from './RelationshipsTable'
import AttributesTable from './AttributeTable'
import './index.scss'

const Server = () => {

    let location = useLocation()
    const { state: { serverInfo } } = location
    console.log("serverInfo", serverInfo)

    return (
        <>
            <AttributesTable serverInfo={serverInfo} />
            <RelationshipsTable serverInfo={serverInfo} />
        </ >
    )
}
export default Server
import React from 'react'
import AndhraBank from './AndhraBank'
import CorporationBank from './CorporationBank'

export default function UnionBank() {
    return (
        <div>
            <h1>Union bank</h1>
            <AndhraBank location="Srikakulam"/>
            <CorporationBank location="Chittoor"/>
        </div>
    )
}

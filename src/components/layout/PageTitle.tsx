import React from 'react'

//styles
import './PageTitle.scss'

const PageTitle = (props: any) => (
    <div className={`PageTitle ${props.error ? "error" : ""}`}>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>
)

export default PageTitle
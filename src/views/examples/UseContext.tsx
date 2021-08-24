import React from 'react'

// components
import PageTitle from '../../components/layout/PageTitle'

export const UseContext = (props:any) => {
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
        </div>
    )
}


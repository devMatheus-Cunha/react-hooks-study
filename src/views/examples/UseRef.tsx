import React from 'react'
import PageTitle from '../../components/layout/PageTitle'

export const UseRef = (props:any) => {
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
        </div>
    )
}

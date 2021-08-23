import React from 'react'

// component
import SectionTitle from '../../components/layout/SectionTitle'
import PageTitle from '../../components/layout/PageTitle'

export const UseMemo = (props:any) => {
    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <SectionTitle title="Exercicio #01" />
        </div>
    )
}

import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'
import AsmSchemePayout from './AsmSchemePayout'
import TsmSchemePayout from './TsmSchemePayout'
import OfficeRetailerPayout from './officeteam/OfficeRetailerPayout'

export default function SchemePayout() {
    const { user } = useContext(UserContext)
    return (
        <div>
            {!!user && user?.subdesignation == 'asm' && (
                <AsmSchemePayout />
            )}

            {!!user && user?.subdesignation == 'tsm' && (
                <TsmSchemePayout />
            )}
            {!!user && user?.subdesignation == 'office' && (
                <OfficeRetailerPayout />
            )}
        </div>
    )
}

import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'
import ShopcodeSaleQuery from './shocodeQuery/ShopcodeSaleQuery'
import OfficeSaleQuery from './officeSaleQuery/OfficeSaleQuery';
import SaleTeamSaleQuery from './saleteamSaleQuery/SaleTeamSaleQuery';
import VBASaleQuery from './VBASaleQuery/VBASaleQuery';

export default function SaleQuery() {
    const {user} = useContext(UserContext)
    
  return (
    <>
    <div>
      {!user && (
        <ShopcodeSaleQuery/>
      )}
    </div>

    <div>
        {user?.designation == 'office' && (
            <OfficeSaleQuery />
        )}
    </div>
    <div>
        {user?.designation == 'saleteam' && (
            <SaleTeamSaleQuery />
        )}
    </div>
    <div>
        {user?.designation == 'vba' && (
            <VBASaleQuery />
        )}
    </div>
    <div>
        {user?.designation == 'retailer' && (
            <VBASaleQuery />
        )}
    </div>
    </>
  )
}

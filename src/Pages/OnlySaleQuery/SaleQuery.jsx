import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'
import ShopcodeSaleQuery from './shocodeQuery/ShopcodeSaleQuery'
import OfficeSaleQuery from './officeSaleQuery/OfficeSaleQuery';
import SaleTeamSaleQuery from './saleteamSaleQuery/SaleTeamSaleQuery';
import VBASaleQuery from './VBASaleQuery/VBASaleQuery';
import { Link } from 'react-router-dom';

export default function SaleQuery() {

    const { user, ready } = useContext(UserContext)
    
    return (
        <>
        {!user && (
            <div className='m-auto md:w-[70%] bg-blue-500 mt-5 text-white px-4 py-2 rounded max-w-lg'>
                If you are not Logged in then you will need your shop code to know your sales. You can optain it from youre area's Vivo Reprentative or You can 
                <span> <Link to={'/contact'} className='underline text-blue-950'>Contact Us</Link></span> .
            </div>
        )}
        <div>
            <div>
                {!user && (
                    <ShopcodeSaleQuery />
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
        </div>
        </>
    )
}

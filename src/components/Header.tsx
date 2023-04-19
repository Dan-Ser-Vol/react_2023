import React, {FC} from 'react';
import {PageEnum} from "../constants/page.enum";
import {IUseState} from "../types/useState.type";

interface IProps {
    setChoice: IUseState<PageEnum>
}

const Header:FC<IProps> = ({setChoice}) => {
    return (
        <div className={'header'}>
            <button onClick={()=>setChoice(PageEnum.USERS)} >Users</button>
            <button onClick={()=>setChoice(PageEnum.COMMENTS)}>Comments</button>
            <button onClick={()=>setChoice(PageEnum.CARS)}>Cars</button>
        </div>
    );
};

export default Header;
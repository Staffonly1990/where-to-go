import React, { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { increment } from '../../store/counter-slice';


export const BigBtn: FC = () => {
    const dispatch = useAppDispatch();
    const { count } = useAppSelector((store) => store.counter);

    return (
        <div>
            <div>
                <button onClick={() => dispatch(increment(0))} >Куда пойти</button>
                <div style={{ background: 'white' }} >{count}</div>
            </div>
        </div>
    )
}
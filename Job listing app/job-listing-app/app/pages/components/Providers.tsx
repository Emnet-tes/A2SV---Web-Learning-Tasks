"use client";

import {SessionProvider} from "next-auth/react"
import { ReactNode } from "react";

interface Props{
    children:ReactNode;

}

const Providers=({children}:Props)=>{
    return <SessionProvider>
        {children}
        </SessionProvider>
}

export default Providers;


//sign in don't have account
//log in have account
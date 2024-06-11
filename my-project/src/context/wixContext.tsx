"use client"

import { createClient, OAuthStrategy } from "@wix/sdk";
import {products, collections} from "@wix/stores"
import Cookies from "js-cookie";
import { ReactNode } from "react";
import { createContext } from "vm";

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}")

const WixClient = createClient({
    modules: {
      products,
      //currentCart
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: {
       refreshToken,
       accessToken:{value:"", expiresAt:0},
      }
    })
  })

export type WixClient = typeof WixClient

  export const WixClientContext = createContext<WixClient>(WixClient)

  export const WixClientContextProvider = ({children}:{children:ReactNode}) => 
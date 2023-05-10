'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const colors = {
    brand: {
        400: '#a332ef',
        300: '#b55df2',
        200: '#cb8df5',
        100: '#e0bbf8',
        50: '#f3e4fc',
    },
}

export const theme = extendTheme({ colors })

export function Providers({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}
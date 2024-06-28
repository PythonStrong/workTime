import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FooterCard, FooterCard1 } from '../assets'

export default function Footer() {
  return (
    <Box mt={{  md: '130px', base: '100px' }}>
        <Text fontSize='50px' fontWeight='600'>Membership</Text>
        <hr />

        <Box display='flex' alignItems='center' justifyContent={{xl:'space-between', md:'center', base:'center'}} gap='30px' pt='60px' flexWrap='wrap'>
            <Image width={{md:'500px', base:'90%'}} src={FooterCard1}/>
            <Image width={{md:'500px', base:'90%'}} src={FooterCard}/>
            <Image width={{md:'500px', base:'90%'}} src={FooterCard1}/>
        </Box>
    </Box>
  )
}

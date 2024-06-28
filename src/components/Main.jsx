import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { card, card1, card2, card3, main, main1 } from '../assets'

export default function Main() {
    return (
        <Box>
            {/* 1 */}
            <Box display='flex' alignItems='center' justifyContent='space-between' className='mainCard' mt={{ md: '300px', md: '180px', base: '100px' }}>
                <Box display='flex' flexDirection='column' gap='20px' alignItems='start'>
                    <Text fontSize='40px' fontWeight='600'>Work out at home for free.</Text>
                    <Text textColor='gray' fontSize='20px' width={{ xl: '70%', md: '70%', base: '100%' }}>We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!</Text>
                    <Button width='170px' height='60px' color='#0070C9' _hover='none' border='1px solid #0070C9' _active='none' variant='outline'>See More</Button>
                </Box>
                <Image src={main} />
            </Box>


            <Box mt={{ md: '300px', md: '180px', base: '100px' }}>
                <Text fontSize='40px' fontWeight='600'>Not sure where to start?</Text>
                <Text fontSize='20px' color='gray'>Programs offer day-to-day guidance on an interactive calendar to keep you on track.</Text>

                <Box display='flex' alignItems='center' justifyContent='center' gap='45px' mt='40px' flexWrap='wrap'>
                    <Image width='400px' src={card} />
                    <Image width='400px' src={card1} />
                    <Image width='400px' src={card2} />
                    <Image width='400px' src={card3} />
                </Box>
            </Box>


            {/* 2 */}
            <Box display='flex' alignItems='center' justifyContent='space-between' className='mainCard' mt={{ md: '300px', md: '180px', base: '100px' }}>
                <Box display='flex' flexDirection='column' gap='20px' alignItems='start' wid>
                    <Text fontSize='40px' fontWeight='600' width={{ xl: '50%', md: '100%', base: '100%' }}>Get more with low-cost training programs and advanced features.</Text>
                    <Text textColor='gray' fontSize='20px' width={{ xl: '70%', md: '100%', base: '100%' }}>We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!</Text>
                    <Button width='170px' height='60px' color='#0070C9' _hover='none' border='1px solid #0070C9' _active='none' variant='outline'>See More</Button>
                </Box>
                <Image src={main1} />
            </Box>
        </Box>
    )
}

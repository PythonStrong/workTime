import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Image, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { hero, logos } from '../assets'

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <Box>
            {/* navbar  */}
            <Box display='flex' className='nav' alignItems='center' justifyContent='space-between' pt='30px'>
                <Heading cursor='pointer'>WORKOUT</Heading>

                <Box display='flex' alignItems='center' gap='30px'>
                    <Text cursor='pointer' _hover={{ color: '#0070C9' }} transition='all ease .3s'>WORKOUTS</Text>
                    <Text cursor='pointer' _hover={{ color: '#0070C9' }} transition='all ease .3s'>PROGRAMS</Text>
                    <Text cursor='pointer' _hover={{ color: '#0070C9' }} transition='all ease .3s'>HEALTHY LIVING</Text>
                    <Text cursor='pointer' _hover={{ color: '#0070C9' }} transition='all ease .3s'>COMMUNITY</Text>
                    <Text cursor='pointer' _hover={{ color: '#0070C9' }} transition='all ease .3s'>ABOUT</Text>
                    <Text cursor='pointer' _hover={{ color: '#0070C9' }} transition='all ease .3s'>STORE</Text>
                </Box>
            </Box>

            {/* mobile nav */}

            <Box display='none' className='falseNav' alignItems='center' justifyContent='space-between' pt='30px'>
                <Heading cursor='pointer'>WORKOUT</Heading>

                <Button ref={btnRef} fontSize='30px' bg='none' color='white' _hover='none' onClick={onOpen}>
                    ☰
                </Button>
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton bg='red'/>
                    <DrawerHeader color='black' fontSize='30px'>Workout With Me</DrawerHeader>

                    <DrawerBody>
                    <Box display='flex' flexDirection='column' gap='30px'>
                    <Text color='black' fontSize='18px' fontWeight='500' cursor='pointer' _hover={{ color: '#0070C9' }} transition='all ease .3s'>WORKOUTS</Text>
                    <Text color='black' fontSize='18px' fontWeight='500' cursor='pointer' _hover={{ color: '#0070C9' }} transition='all ease .3s'>PROGRAMS</Text>
                    <Text color='black' fontSize='18px' fontWeight='500' cursor='pointer' _hover={{ color: '#0070C9' }} transition='all ease .3s'>HEALTHY LIVING</Text>
                    <Text color='black' fontSize='18px' fontWeight='500' cursor='pointer' _hover={{ color: '#0070C9' }} transition='all ease .3s'>COMMUNITY</Text>
                    <Text color='black' fontSize='18px' fontWeight='500' cursor='pointer' _hover={{ color: '#0070C9' }} transition='all ease .3s'>ABOUT</Text>
                    <Text color='black' fontSize='18px' fontWeight='500' cursor='pointer' _hover={{ color: '#0070C9' }} transition='all ease .3s'>STORE</Text>
                </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            {/* hero */}
            <Box mt='130px' display='flex' alignItems='center'>
                <Box display='flex' flexDirection='column' alignItems='start' gap='20px' width={{ xl: '60%', md: '100%', base: '100%' }} pos='relative' zIndex='90'>
                    <Text fontSize={{ xl: '160px', md: '100px', base: '50px' }} textTransform='capitalize' fontWeight='800' lineHeight={{ xl: '180px', md: '120px', base: '' }}>workout with me</Text>
                    <Text fontSize='20px' color='gray' fontWeight='400' width={{ xl: '40%', md: '80%', base: '100%' }}>A huge selection of health and fitness content, healthy recipes and transformation stories to help you get fit and stay fit!</Text>
                    <Button background='#E6533C' color='white' padding='24px 25px 24px 25px' _hover='none' width='200px' height='70px' fontSize='20px'>Join Club Now!</Button>
                    <Image pt='70px' src={logos} />
                </Box>
                <Image src={hero} zIndex='89' className='heroImage' right={{ md: '40', base: '0' }} pos='absolute' />
            </Box>
        </Box>
    )
}

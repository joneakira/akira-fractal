import React from 'react'
import {
  Flex,
  Button,
  useColorModeValue,
  useColorMode,
  Text } from 'native-base'

export default function Home() {
  const {
    toggleColorMode
    } = useColorMode();
  return(
    <Flex
    bg={useColorModeValue('#ffffe9', '#110030')}
    paddingY={'30px'}
    justifyContent={'flex-start'}
    alignItems={'center'}
    width={'100%'}
    height={'100%'}>
      <Button
      backgroundColor={useColorModeValue('#ffffa9' ,'#330030')}
      bg={useColorModeValue('#110030', '#ffffe9')}
      onPress={toggleColorMode}>
        <Text color={useColorModeValue('#ffffe9', '#110030')}>
          Toogle color mode
        </Text>
      </Button>
    </Flex>
  )
}
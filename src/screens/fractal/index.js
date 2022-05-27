import React, { useEffect, useState } from 'react'
import {
  Flex,
  useColorModeValue,
  Spinner, 
  Button, 
  ScrollView,
  Text } from 'native-base'
  import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring
   } from 'react-native-reanimated';
import FractalCanvas from '../../components/canvas'
import { Dimensions } from 'react-native-web';

export default function Fractal() {
  const [loading, setLoading] = useState(false);
  const [fColor, setFColor] = useState('#400093');
  const panX = useSharedValue(1);
  const panY = useSharedValue(1);
  const scale = useSharedValue(3);
  const maxIterations = useSharedValue(10);
  const magnificationFactor = useSharedValue(500);


  useEffect(() => {
    setLoading(true)
  }, [])

  useEffect(() => {

  }, [scale.value, fColor])
  return (
    <Flex
    bg={useColorModeValue('#ffffe9', '#110030')}
    width={'100%'}
    height={'100%'}>
      <Animated.View
      width={'100%'}
      height={'100%'}>
        <FractalCanvas
        panX={panX.value}
        panY={panY.value}
        maxIterations={maxIterations.value}
        magnificationFactor={magnificationFactor.value}
        setLoading={setLoading}
        scale={scale.value}
        fColor={fColor} />
      </Animated.View> 
      
      <Flex
      width={'100%'}
      bottom={30}
      position={'absolute'}  >
        <ScrollView 
        
        horizontal>
          <Flex
          height={'60px'}
          alignItems={'center'}
          direction='row'>
            <Flex alignItems={'center'}>
              <Text>
                Scale
              </Text>
              <Flex
              alignItems={'center'}
              justifyContent={'space-around'}
              direction='row'>
              <Button
              backgroundColor={useColorModeValue('#110030', '#ffffe9')}
              width={'40px'}
              height={'40px'}
              borderRadius={45}
              fontSize={22}
              marginX={'10px'}
              onPress={() => {
                setLoading(true);
                scale.value > 0 ? scale.value = scale.value - 0.5 : null}}>
                <Text
                fontWeight={'bold'}
                color={useColorModeValue('#ffffe9', '#110030')}>
                  -
                </Text>
              </Button>
              {
              loading === true ?
              <Spinner color={'#801074'} alignSelf={'center'} /> :
              <Text
              fontSize={20}
              marginX={'10px'}>
                {scale.value}
              </Text>
            }
              
              <Button
              backgroundColor={useColorModeValue('#110030', '#ffffe9')}
              width={'40px'}
              height={'40px'}
              borderRadius={45}
              fontSize={22}
              marginX={'10px'}
              onPress={() => {
                setLoading(true);
                scale.value = scale.value + 0.5}}>
                <Text
                fontWeight={'bold'}
                color={useColorModeValue('#ffffe9', '#110030')}>
                  +
                </Text>
              </Button>
            </Flex>
            </Flex>
            <Flex alignItems={'center'}>
              <Text>
                Scale
              </Text>
              <Flex
              alignItems={'center'}
              justifyContent={'space-around'}
              direction='row'>
                <Button
                backgroundColor={useColorModeValue('#110030', '#ffffe9')}
                width={'40px'}
                height={'40px'}
                borderRadius={45}
                fontSize={22}
                marginX={'10px'}
                onPress={() => {
                  setLoading(true);
                  setFColor('#f02060')}}>
                  <Text
                  fontWeight={'bold'}
                  color={'#f02060'}>
                    R
                  </Text>
                </Button>
                <Button
                backgroundColor={useColorModeValue('#110030', '#ffffe9')}
                width={'40px'}
                height={'40px'}
                borderRadius={45}
                fontSize={22}
                marginX={'10px'}
                onPress={() => {
                  setLoading(true);
                  setFColor('#a1ff09')}}>
                  <Text
                  fontWeight={'bold'}
                  color={'#a1ff09'}>
                    G
                  </Text>
                </Button>
                <Button
                backgroundColor={useColorModeValue('#110030', '#ffffe9')}
                width={'40px'}
                height={'40px'}
                borderRadius={45}
                fontSize={22}
                marginX={'10px'}
                onPress={() => {
                  setLoading(true);
                  setFColor('#1000f9')}}>
                  <Text
                  fontWeight={'bold'}
                  color={'#1000f9'}>
                    B
                  </Text>
                </Button>
                <Flex
                backgroundColor={fColor}
                width={'40px'}
                height={'40px'}
                borderRadius={45}
                marginX={'10px'} >

                </Flex>
              </Flex>
            </Flex>
            <Flex alignItems={'center'}>
              <Text>
                PanX: {panX.value}
              </Text>
              <Flex direction='row'>
                <Button
                backgroundColor={useColorModeValue('#110030', '#ffffe9')}
                width={'40px'}
                height={'40px'}
                borderRadius={45}
                fontSize={22}
                marginX={'10px'}
                onPress={() => {
                  setLoading(true);
                  if(panX.value == 0) {
                    null
                  } else {
                    panX.value = panX.value - 0.5
                  }}}>
                  <Text
                  fontWeight={'bold'}
                  color={useColorModeValue('#ffffe9', '#110030')}>
                    -
                  </Text>
                </Button>
                <Button
                backgroundColor={useColorModeValue('#110030', '#ffffe9')}
                width={'40px'}
                height={'40px'}
                borderRadius={45}
                fontSize={22}
                marginX={'10px'}
                onPress={() => {
                  setLoading(true);
                    panX.value = panX.value + 0.5
                  }}>
                  <Text
                  fontWeight={'bold'}
                  color={useColorModeValue('#ffffe9', '#110030')}>
                    +
                  </Text>
                </Button>
              </Flex>
            </Flex>
            <Flex alignItems={'center'}>
              <Text>
                PanY: {panY.value}
              </Text>
              <Flex direction='row'>
              <Button
                backgroundColor={useColorModeValue('#110030', '#ffffe9')}
                width={'40px'}
                height={'40px'}
                borderRadius={45}
                fontSize={22}
                marginX={'10px'}
                onPress={() => {
                  setLoading(true);
                  if(panY.value == 0) {
                    null
                  } else {
                    panY.value = panY.value - 0.5
                  }}}>
                  <Text
                  fontWeight={'bold'}
                  color={useColorModeValue('#ffffe9', '#110030')}>
                    -
                  </Text>
                </Button>
                <Button
                backgroundColor={useColorModeValue('#110030', '#ffffe9')}
                width={'40px'}
                height={'40px'}
                borderRadius={45}
                fontSize={22}
                marginX={'10px'}
                onPress={() => {
                  setLoading(true);
                  panY.value = panY.value + 0.5}}>
                  <Text
                  fontWeight={'bold'}
                  color={useColorModeValue('#ffffe9', '#110030')}>
                    +
                  </Text>
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex alignItems={'center'}>
              <Text>
                M-Factor: {magnificationFactor.value}
              </Text>
              <Flex direction='row'>
              <Button
                backgroundColor={useColorModeValue('#110030', '#ffffe9')}
                width={'40px'}
                height={'40px'}
                borderRadius={45}
                fontSize={22}
                marginX={'10px'}
                onPress={() => {
                  setLoading(true);
                  if(magnificationFactor.value == 0) {
                    null
                  } else {
                    magnificationFactor.value = magnificationFactor.value - 100
                  }}}>
                  <Text
                  fontWeight={'bold'}
                  color={useColorModeValue('#ffffe9', '#110030')}>
                    -
                  </Text>
                </Button>
                <Button
                backgroundColor={useColorModeValue('#110030', '#ffffe9')}
                width={'40px'}
                height={'40px'}
                borderRadius={45}
                fontSize={22}
                marginX={'10px'}
                onPress={() => {
                  setLoading(true);
                  magnificationFactor.value = magnificationFactor.value + 100}}>
                  <Text
                  fontWeight={'bold'}
                  color={useColorModeValue('#ffffe9', '#110030')}>
                    +
                  </Text>
                </Button>
              </Flex>
            </Flex>
            <Flex alignItems={'center'}>
              <Text>
                max-I: {maxIterations.value}
              </Text>
              <Flex direction='row'>
              <Button
                backgroundColor={useColorModeValue('#110030', '#ffffe9')}
                width={'40px'}
                height={'40px'}
                borderRadius={45}
                fontSize={22}
                marginX={'10px'}
                onPress={() => {
                  setLoading(true);
                  if(maxIterations.value == 0) {
                    null
                  } else {
                    maxIterations.value = maxIterations.value - 5
                  }}}>
                  <Text
                  fontWeight={'bold'}
                  color={useColorModeValue('#ffffe9', '#110030')}>
                    -
                  </Text>
                </Button>
                <Button
                backgroundColor={useColorModeValue('#110030', '#ffffe9')}
                width={'40px'}
                height={'40px'}
                borderRadius={45}
                fontSize={22}
                marginX={'10px'}
                onPress={() => {
                  setLoading(true);
                  maxIterations.value = maxIterations.value + 10}}>
                  <Text
                  fontWeight={'bold'}
                  color={useColorModeValue('#ffffe9', '#110030')}>
                    +
                  </Text>
                </Button>
              </Flex>
            </Flex>
        </ScrollView>
        
        
      </Flex>

    </Flex>
  )
}
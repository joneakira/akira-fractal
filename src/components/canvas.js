import React, {useEffect, useState} from 'react'
import { Dimensions } from 'react-native';
import { GLView } from "expo-gl"
import Expo2DContext from "expo-2d-context"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
 

export default function FractalCanvas({setLoading, scale, fColor, panX, panY, magnificationFactor, maxIterations}) {
  function checkIfBelogngstoMandelbrotSet(x, y) {
    var realComponentOfResult = x;
    var imaginaryComponentOfResult = y;

    for(var i = 0; i < maxIterations; i++) {
      var tempRealComponent = realComponentOfResult * realComponentOfResult - imaginaryComponentOfResult * imaginaryComponentOfResult + x
    
      var tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult + y;

      realComponentOfResult = tempRealComponent;
      imaginaryComponentOfResult = tempImaginaryComponent;

      if(realComponentOfResult * imaginaryComponentOfResult > 5) {
        return (i/maxIterations * 70);
      }
    }
    return 0
  }

  function fractalCreation(ctx) {
     for(var x = 0; x < windowWidth; x++) {
      for(var y = 0; y < windowHeight; y++) {
        let a = x/magnificationFactor - panX;
        let b = y/magnificationFactor - panY;
        let belongToSet = checkIfBelogngstoMandelbrotSet(a, b);
        if(belongToSet === 0) {
          ctx.fillStyle = fColor
          ctx.fillRect(x, y, 1, 1);
        } else {
          ctx.fillStyle = 'hsl(0, 100%, ' + belongToSet + '%)';
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
  }

  const _onGLContextCreate = (gl) => {
    var s = scale
    var ctx = new Expo2DContext(gl);
    ctx.width = windowWidth;
    ctx.height = windowHeight;
    ctx.scale(s, s);
    fractalCreation(ctx);
    ctx.stroke();
    ctx.flush();
    setLoading(false)
  };

  const Fractal = () => {
    return(
      <GLView style={{ flex: 1 }} onContextCreate={_onGLContextCreate} />
    )
  }

  useEffect(() => {
    console.log(scale)
  }, [scale])

  return (
    <Fractal />
  )
}
import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { WP, HP } from '../../../../src/util';

const ProgressButtons = props =>{ 
  return(
    
    <SafeAreaView style={{ flexDirection: 'row', width: WP(90), alignSelf: 'center', marginTop: 20 }}>
      {props.previousButton ? 
       <><View style={{ flexGrow: 1, alignItems: 'flex-start' }}>{props.renderPreviousButton()}</View>
        <View style={{ flexGrow: 1, alignItems: 'flex-end' }}>{props.renderNextButton()}</View></>
        :  <View style={{ flexGrow: 1 }}>{props.renderNextButton()}</View>}  
      </SafeAreaView> 

  )};
  
export default ProgressButtons;

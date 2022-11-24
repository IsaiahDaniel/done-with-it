import React from 'react';
import { View, Text } from 'react-native';

export default function ErrorMessage({ error }) {

    if(!error) return null;

   return(
       <Text style={{ color: "red", marginBottom: 3 }}>{ error }</Text>
   ) 
}
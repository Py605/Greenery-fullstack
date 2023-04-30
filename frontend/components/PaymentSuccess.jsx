import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { useState } from 'react';

const PaymentSuccess = (props) => {
 
    const seachQuery = useSearchParams();

        var referenceNum = seachQuery.get("reference")
 

    
    //clear localstorage

    useEffect(()=>{
        
        const gmail = localStorage.getItem('gmail')
        
            async function fetchdata(){
                const {data} = await axios.post('http://www.localhost:4000/api/sendgmail',{
                    gmail,
                    referenceNum,
               })
               if(data.data == 'ok'){
                await localStorage.clear()
               }
             
            }
            fetchdata()
       
       
        
        console.log(gmail);
       

    },[])
    return (
        <Box>
            <VStack h="100vh" justifyContent={"center"}>

                <Heading textTransform={"uppercase"}> Order Successfull</Heading>

                <Text>
                Reference-{referenceNum}
                </Text>

            </VStack>
        </Box>
    )
}

export default PaymentSuccess
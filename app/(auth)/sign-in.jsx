import { useState } from "react";
import { Link, router } from "expo-router";
import {  View, Text, ScrollView, Dimensions, Alert, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import CustomButton from '../../components/CustomButton'
import FormField from '../../components/FormField'
import { signIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";


const SignIn
 = () => {
    const { setUser, setIsLogged } = useGlobalContext();
 const [isSubmitting, setSubmitting] = useState(false);
  const [form, setform] = useState({
    email:'',
    password:'',
  })

   const submit = async()=>{
    if(form.email === "" || form.password === ""){
      Alert.alert("Error" , "Please fill in all fields");
    } 

    setSubmitting(true);
    try{
      const result = await  signIn(form.email , form.password);
      setUser(result)
      setIsLogged(true)
      Alert.alert("Success" , "User signed in successfully")
      router.replace('/home')
    }catch(error){
      Alert.alert('Error' , error.message)
    }
    finally{
      setSubmitting(false);
    }
  };
  return (
    <SafeAreaView className ="bg-primary h-full">
      <ScrollView>
      <View className="w-full justify-center min-h-[85vh] px-4 my-6">

      <Image source={images.logo}
      resizeMode='contain'
      className="w-[115px] h-[35px]"/>
      <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
        Log in to Aora
      </Text>
      <FormField 
        title="Email"
        value={form.email}
        placeholder="Enter your Email"
        handleChangeText={(e) => setform({ ...form,email: e})}
        otherStyles="mt-7"
        keyboardType="email-address"
       />

        <FormField
            title="Password"
            value={form.password}
            placeholder="Enter your Password"
            handleChangeText={(e) => setform({ ...form, password: e })}
            otherStyles="mt-7"
          />

        <CustomButton
        title="Sign In"
        handlePress={submit}
        containerStyles="mt-7"
        isLoading={isSubmitting}
        />

        <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Sign up
            </Link>

        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

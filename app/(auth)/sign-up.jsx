import { useState } from "react";
import { Link, router } from "expo-router";
import { View, Text, ScrollView , Image, Alert} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import CustomButton from '../../components/CustomButton'
import FormField from '../../components/FormField'

import { createUser } from "../../lib/appwrite";

const SignUp
 = () => {
 const [isSubmitting, setSubmitting] = useState(false);
  const [form, setform] = useState({
    username:'',
    email:'',
    password:'',
  })

  const submit = async()=>{
    // if(form.email === "" || form.password === ""){
    //   Alert.alert("Error" , "Please fill in all fields");
    // } 
    createUser();

    // setSubmitting(true);
  }
  return (
    <SafeAreaView className ="bg-primary h-full">
      <ScrollView>
      <View className="w-full justify-center min-h-[85vh] px-4 my-6">

      <Image source={images.logo}
      resizeMode='contain'
      className="w-[115px] h-[35px]"/>
      <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
        Sign Up to Aora
      </Text>

      <FormField 
        title="Username"
        value={form.username}
        placeholder="Enter your Username"
        handleChangeText={(e) => setform({ ...form,email: e})}
        otherStyles="mt-10"
        
       />

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
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Sign in
            </Link>

        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

// import { ActivityIndicator, Text, TouchableOpacity, View ,StyleSheet } from "react-native";

// import React from "react";

// const CustomButton = ({
//   title,
//   handlePress,
//   isLoading,
// }) => {
//   return (
//     <TouchableOpacity 

//     onPress={handlePress}
//     activeOpacity={0.7}
//     style={[styles.button , styles.container ,`${
//         isLoading ? "opacity-50" : ""
//       }`]} 
//       disabled={isLoading}
    
    
//     >
//         <Text style ={styles.text}>{title}
//         </Text>


        
//         {isLoading && (
//         <ActivityIndicator
//           animating={isLoading}
//           color="#fff"
//           size="small"
//           className="ml-2"
//         />
//       )}
//       </TouchableOpacity>
    
//   );
// };

// const styles = StyleSheet.create({
//     container:{
//     backgroundColor:'#FF9C01',
//         width:'100%',
//         flexDirection:"row",
//         marginTop: 28,
//         marginBottom: 28,
//         borderRadius:12,
//         justifyContent:  'center', alignItems:  'center',
//         minHeight:45,
//         borderRadius: 12,
//         padding: 10,
        
//     },

//     text:{
//         color:'#161622',
//         fontWeight:'bold',
//         fontSize:18
//     }
// })

// export default CustomButton;
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

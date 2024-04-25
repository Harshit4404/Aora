import { View, Text } from 'react-native'
import React from 'react'

const Trending = () => {
  return (
    <FlatList
        data={posts}
        horizontal
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
            <TrendingItem activeItem={activeItem} item={item} />
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={{
            itemVisiblePercentThreshold: 70,
        }}
        contentOffset={{ x: 170 }}
    />
  )
}

export default Trending
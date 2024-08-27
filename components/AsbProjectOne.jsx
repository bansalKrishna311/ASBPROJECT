import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
export default function AsbProjectOne() {
    const screenWidth = Dimensions.get('window').width;
  return (
    <ScrollView style={styles.container}>
    <View style={styles.imageContainer}>
      <ImageBackground
        style={styles.productImage}
        source={{
          uri: 'https://assets.gqindia.com/photos/6669934812bbaf3fdc912b44/16:9/w_1920,c_limit/How%20to%20identify%20original%20Nike%20sneakers%20from%20the%20fakes.jpg',
        }}
      >
        <View style={styles.overlay} /> 
      </ImageBackground>
    </View>
    <View style={[styles.detailsContainer, { width: screenWidth * 0.9 }]}>
      <Text style={styles.productTitle}>Nike Sportswear Windrunner</Text>
      <View style={styles.sellerContainer}>
        <ImageBackground
          style={styles.sellerImage}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiYJBlAHjAG4rx7YtXuktGdK7mRQPcCmpNBA&s',
          }}
        />
        <View>
          <Text style={styles.sellerName}>Rachel Brown</Text>
          <Text style={styles.sellerLabel}>Pro Seller</Text>
        </View>
      </View>
      <Text style={styles.price}>$735</Text>
      <Text style={styles.sizeTitle}>Size</Text>
      <View style={styles.sizeGrid}>
        {['XS', 'S', 'M', 'L', 'XL', '2XL'].map((size, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.sizeBox,
              size === '2XL' ? styles.selectedSize : null,
              size === 'XS' ? styles.disabledSize : null,
            ]}
            disabled={size === 'XS'}
          >
            <Text
              style={[
                styles.sizeText,
                size === '2XL' ? styles.selectedSizeText : null,
                size === 'XS' ? styles.disabledSizeText : null,
              ]}
            >
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>ADD TO CART</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.floatingButton}>
        <Svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M12 22C10.8954 22 10 21.1046 10 20H4C2.89543 20 2 19.1046 2 18V4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V18C22 19.1046 21.1046 20 20 20H14L12 22Z"
            fill="white"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    imageContainer: {
      width: '100%',
      height: 400,
    },
    productImage: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    },
    detailsContainer: {
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      padding: 20,
      marginTop: -50,
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -5 },
      shadowOpacity: 0.1,
      shadowRadius: 15,
    },
    productTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: '#333',
      marginBottom: 10,
    },
    sellerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    sellerImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    sellerName: {
      fontSize: 14,
      fontWeight: '600',
      color: '#555',
    },
    sellerLabel: {
      fontSize: 12,
      color: '#999',
    },
    price: {
      fontSize: 24,
      fontWeight: '700',
      color: '#000',
      marginBottom: 25,
    },
    sizeTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#333',
      marginBottom: 10,
    },
    sizeGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    sizeBox: {
      width: '30%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 10,
      marginBottom: 15,
    },
    selectedSize: {
      backgroundColor: '#d8b9f5',
      borderColor: '#a680ff',
    },
    disabledSize: {
      backgroundColor: '#f0f0f0',
      borderColor: '#e0e0e0',
    },
    sizeText: {
      fontSize: 16,
      color: '#333',
    },
    selectedSizeText: {
      color: '#4b0082',
      fontWeight: '700',
    },
    disabledSizeText: {
      color: '#aaa',
    },
    addButton: {
      backgroundColor: '#4b0082',
      borderRadius: 30,
      paddingVertical: 15,
      alignItems: 'center',
      marginTop: 20,
    },
    addButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '700',
      letterSpacing: 1,
    },
    floatingButton: {
      position: 'absolute',
      right: 20,
      top: -30,
      backgroundColor: '#aa4aff',
      width: 50,
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
    },
  });
  
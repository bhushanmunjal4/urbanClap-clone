import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";

const Banner = () => {
  const screenWidth = Dimensions.get("window").width;

  const images = [
    {
      id: "01",
      image: require("../../assets/images/cleaning.png"),
    },
    {
      id: "02",
      image: require("../../assets/images/plumbing.png"),
    },
    {
      id: "03",
      image: require("../../assets/images/driver.png"),
    },
  ];

  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [forwardDirection, setForwardDirection] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        let nextIndex;

        if (forwardDirection) {
          nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        } else {
          nextIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        }

        flatListRef.current.scrollToIndex({
          index: nextIndex,
          animated: true,
        });

        setCurrentIndex(nextIndex);

        if (nextIndex === images.length - 1) {
          // If nextIndex is the last image, change direction to reverse
          setForwardDirection(false);
        } else if (nextIndex === 0) {
          // If nextIndex is the first image, change direction to forward
          setForwardDirection(true);
        }
      }
    }, 4000); // Scroll every 4 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex, forwardDirection]);

  const renderItem = ({ item, index }) => {
    return (
      <View style={{ width: screenWidth }}>
        <Image
          source={item.image}
          style={{
            height: 200,
            width: screenWidth - 40,
            borderRadius: 20,
            marginRight: 20,
            marginTop: 20,
          }}
        />
      </View>
    );
  };
  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        snapToInterval={screenWidth} // Set snap interval to screen width
        decelerationRate="fast" // Adjust scroll speed
      />
    </View>
  );
};

export default Banner;

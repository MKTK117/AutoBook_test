import { StyleSheet, Text, View ,SafeAreaView,Pressable} from 'react-native'
import React ,{useLayoutEffect} from 'react'
// import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

const BookingScreen = () => {
  const bookings = useSelector((state) => state.booking.booking);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Bookings",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  return (
    <SafeAreaView>
          {bookings.length > 0 && bookings.map((item) => (
        <Pressable
          style={styles.cardPressable}
        >
          <View>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <View
              style={styles.viewItemHeader}
            >
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={styles.itemRatingText}>
                {item.rating}
              </Text>
              <Text style={{ marginLeft: 3 }}>•</Text>
              <View
                style={styles.itemViewContent}
              >
                <Text
                  style={styles.itemText}
                >
                  Genius Level
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
      ))}
    </SafeAreaView>
  )
}

export default BookingScreen

const styles = StyleSheet.create({
  cardPressable: {
    backgroundColor: "white",
    marginVertical:10,
    marginHorizontal:20,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    padding: 14,
    borderRadius: 6,
  },
  viewItemHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },
  itemViewContent: {
    padding: 6,
    borderRadius: 4,
    width: 100,
    backgroundColor: "#0039a6",
    marginLeft: 4,
    borderRadius: 5,
  },
  itemText: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 13,
    fontWeight: "400",
  },
  itemRatingText: {
    marginLeft: 3, 
    fontSize: 15, 
    fontWeight: "400" 
  }
})
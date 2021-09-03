import { StyleSheet } from "react-native";

export default StyleSheet.create({
  itemContainer: {
    borderRadius: 10,
    marginVertical: 10,
    display: "flex",
    flexDirection: "column",
    minWidth: 300
  },
  textContainer: {
    padding:10
  },
  textBox: {
    padding:10,
    fontSize:16,
    color: "white"
  },
  activateTrue: {
    backgroundColor: "#009688",
  },
  activateFalse: {
    backgroundColor: "#B53737",
  },
  submitButton: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    padding:10,
    marginVertical:20,
    marginHorizontal:10
  },
  submitButtonText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  userImg: {
    width:50,
    height:50,
    borderRadius: 10,
    alignSelf:"center"
  }
})

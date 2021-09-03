import React, { Component } from "react";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
} from "react-native";
import { RootStackParamList } from "../navigation/Stack";
import { connect } from "react-redux";
import { changeActivateUser, deleteUsers, pageIncrement, fetchUsers } from "../state/user/actions";
import { RootState } from "../state";
import { User, userState } from "../state/user/types";
import styles from "../styles/userListStyle"
import UserContainer from "../components/userContainer/userContainer";


type UserListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'UserList'
  >;

type Props = {
  navigation: UserListScreenNavigationProp;
  fetchUsers: any
  deleteUsers: any
  changeUser: any
  pageIncrement: any
  data: userState;
};

type State = {
  page : number
}

class UserListScreen extends Component<Props,State>{

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.fetchUser(this.props.data.page)
  }

  fetchUser = async (page: number) => {
    await this.props.fetchUsers(page)
  }

  deleteUser = async () => {
    await this.props.deleteUsers()
  }

  changeActivate = async (user: ListRenderItemInfo<User>)=> {
    await this.props.changeUser(user.item)
  }

  pageIncrement = async() => {
    await this.props.pageIncrement()
  }

  render(){

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.props.data.users}
          renderItem={(user: ListRenderItemInfo<User>)=>(
            <UserContainer
              user={user}
              changeActivate={this.changeActivate}
            />
          )}
          keyExtractor={user=> user.id}
          refreshing={false}
          onRefresh={()=>{
            this.deleteUser().then(()=> {
              this.fetchUser(this.props.data.page)
            })
          }}
          onEndReached={()=> {
            this.pageIncrement().then(()=> {
              console.log("endReached ", this.props.data.page)
              this.fetchUser(this.props.data.page)
            })
          }}
          onEndReachedThreshold={0.5}
        />
      </SafeAreaView>
    );
  }

}

const mapDispatchToProps = {
  fetchUsers: fetchUsers,
  deleteUsers: deleteUsers,
  changeUser: changeActivateUser,
  pageIncrement: pageIncrement
}

const mapStateToProps = (state : RootState) => {
  return {
    data: state.userReducer
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserListScreen);

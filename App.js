import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

var itemArray = new Array(25).fill("empty");
var count = 0;

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      randomNumber: ""
    }
  }

  componentDidMount(){
    this.setState({randomNumber: this.randomNumberGenerator()});
  }

  randomNumberGenerator = () => {
    let randomNumber = Math.floor(Math.random() * 25);
    this.setState({randomNumber, isScratched: true});
    return randomNumber;
  }

  setItem = Number => {
    count = count+1;
    if(count <= 5){
      if(Number === this.state.randomNumber){
        itemArray[Number] = "lucky";
        count = 6;
      }else{
        itemArray[Number] = "unlucky";
      }
    }
    this.forceUpdate();
  }

  setItemIcon = Number => {
    if(itemArray[Number] === "lucky"){
      return "dollar";
    }else if(itemArray[Number] === "unlucky"){
      return "frown-o";
    }
    return "circle";
  }

  setItemColor = Number => {
    if(itemArray[Number] === "lucky"){
      return "green";
    }else if(itemArray[Number] === "unlucky"){
      return "red";
    }
    return "blue";
  }

  showAll = () => {
    itemArray.fill("unlucky");
    itemArray[this.state.randomNumber] = "lucky";

    this.forceUpdate();
  }

  resetGame = () => {
    count = 0;
    this.setState({randomNumber: this.randomNumberGenerator()}, () => {
      itemArray.fill("empty");
      this.forceUpdate();
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.grid}>
          <View style={styles.row}>
            {[0,1,2,3,4].map(Number => {
              return(
                <TouchableOpacity key={Number} style={styles.item} onPress={() => this.setItem(Number)}>
                  <FontAwesome 
                    name={this.setItemIcon(Number)}
                    size={50}
                    color={this.setItemColor(Number)}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.row}>
            {[5,6,7,8,9].map(Number => {
              return(
                <TouchableOpacity key={Number} style={styles.item} onPress={() => this.setItem(Number)}>
                  <FontAwesome 
                    name={this.setItemIcon(Number)}
                    size={50}
                    color={this.setItemColor(Number)}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.row}>
            {[10,11,12,13,14].map(Number => {
              return(
                <TouchableOpacity key={Number} style={styles.item} onPress={() => this.setItem(Number)}>
                  <FontAwesome 
                    name={this.setItemIcon(Number)}
                    size={50}
                    color={this.setItemColor(Number)}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.row}>
            {[15,16,17,18,19].map(Number => {
              return(
                <TouchableOpacity key={Number} style={styles.item} onPress={() => this.setItem(Number)}>
                  <FontAwesome 
                    name={this.setItemIcon(Number)}
                    size={50}
                    color={this.setItemColor(Number)}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.row}>
            {[20,21,22,23,24].map(Number => {
              return(
                <TouchableOpacity key={Number} style={styles.item} onPress={() => this.setItem(Number)}>
                  <FontAwesome 
                    name={this.setItemIcon(Number)}
                    size={50}
                    color={this.setItemColor(Number)}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity style={styles.button} onPress={() => this.showAll()}>
            <Text style={styles.btnText}>Show All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => this.resetGame()}>
            <Text style={styles.btnText}>Reset Game</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {},
  row: {
    flexDirection: "row"
  },
  item: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#000",
    minWidth: 70,
    alignItems: "center"
  },
  button: {
    backgroundColor: "#1B9CFC",
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10
  },
  btnText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFF',
    paddingVertical: 10
  }
});

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Kategorien} from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';

export default class TicTacToe extends Component {
  constructor() {
    super();
    this.state = {
      gameState: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      currentplayer: 1,
      winner: 0,
      message: "",
      counter: 1,
    };
  }
  renderIcon = (row, column) => {
    const value = this.state.gameState[row][column];

    switch (value) {
      case 1:
        return <Icon name="close" style={styles.tileX} />;

      case -1:
        return <Icon name="circle-outline" style={styles.tileO} />;
      default:
        return <View />;
    }
  };
  onTilePress = (row, column) => {
  
    const value = this.state.gameState[row][column];
    if ((value !== 0) || (this.state.message !== "")) return;
   
    const { currentplayer } = this.state;
    const arr = [...this.state.gameState];
    arr[row][column] = currentplayer;
    this.setState({
      gameState: arr,
    })
    
    const newPlayer = this.state.currentplayer === 1 ? -1 : 1;
    this.setState({
      currentplayer: newPlayer,
    })
    
 if (this.state.counter === 9){
      this.setState({
        winner: 2,
        message: "No Winner!!! it's a tie.",
    })
  }  
if ((arr[0][0] === 1) && (arr[0][1] === 1) && (arr[0][2] === 1)){//row 1
 this.setState({winner: 1, message: <Icon name="close" style={styles.tileX} />,});}
else if ((arr[0][0] === 1) && (arr[1][0] === 1) && (arr[2][0] === 1)){//Column 1
         this.setState({winner: 1, message: <Icon name="close" style={styles.tileX} />,})}
else if ((arr[1][0] === 1) && (arr[1][1] === 1) && (arr[1][2] === 1)){//row 2
         this.setState({winner: 1, message: <Icon name="close" style={styles.tileX} />,})}
else if ((arr[0][1] === 1) && (arr[1][1] === 1) && (arr[2][1] === 1)){//Column 2
         this.setState({winner: 1, message: <Icon name="close" style={styles.tileX} />,})}
else if ((arr[2][0] === 1) && (arr[2][1] === 1) && (arr[2][2] === 1)){//row 3
         this.setState({winner: 1, message: <Icon name="close" style={styles.tileX} />,})}
else if ((arr[0][2] === 1) && (arr[1][2] === 1) && (arr[2][2] === 1)){//Column 3
         this.setState({winner: 1, message: <Icon name="close" style={styles.tileX} />,})}
else if ((arr[0][0] === 1) && (arr[1][1] === 1) && (arr[2][2] === 1)){//diagonal
         this.setState({winner: 1, message: <Icon name="close" style={styles.tileX} />,})}
else if ((arr[0][2] === 1) && (arr[1][1] === 1) && (arr[2][0] === 1)){//diagonal-reverse
         this.setState({winner: -1, message: <Icon name="close" style={styles.tileX} />,})}
else if ((arr[0][0] === -1) && (arr[0][1] === -1) && (arr[0][2] === -1)){//row 1
         this.setState({winner: -1, message: <Icon name="circle-outline" style={styles.tileO} />,})}
else if ((arr[0][0] === -1) && (arr[1][0] === -1) && (arr[2][0] === -1)){//Column 1
         this.setState({winner: -1, message: <Icon name="circle-outline" style={styles.tileO} />,})}
else if ((arr[1][0] === -1) && (arr[1][1] === -1) && (arr[1][2] === -1)){//row 2
         this.setState({winner: -1, message: <Icon name="circle-outline" style={styles.tileO} />,})}
else if ((arr[0][1] === -1) && (arr[1][1] === -1) && (arr[2][1] === -1)){//Column 2
         this.setState({winner: -1, message: <Icon name="circle-outline" style={styles.tileO} />,})}
else if ((arr[2][0] === -1) && (arr[2][1] === -1) && (arr[2][2] === -1)){//row 3
         this.setState({winner: -1, message: <Icon name="circle-outline" style={styles.tileO} />,})}
else if ((arr[0][2] === -1) && (arr[1][2] === -1) && (arr[2][2] === -1)){//Column 3
         this.setState({winner: -1, message: <Icon name="circle-outline" style={styles.tileO} />,})} 
else if ((arr[0][0] === -1) && (arr[1][1] === -1) && (arr[2][2] === -1)){//diagonal
         this.setState({winner: -1, message: <Icon name="circle-outline" style={styles.tileO} />,})}
else if ((arr[0][2] === -1) && (arr[1][1] === -1) && (arr[2][0] === -1)){//diagonal-reverse
         this.setState({winner: -1, message: <Icon name="circle-outline" style={styles.tileO} />,})} 
       
           this.setState({
      counter: this.state.counter + 1,
    })  
      
}
reset = () => {
    const value = this.state.gameState;
    this.setState({
      winner: 0,
      message: "",
      counter: 1,
    });
    for (var i = 0; i < value.length; i++) {
      for (var j = 0; j < value[i].length; j++) {
        const arr = [...this.state.gameState];
        arr[i][j] = 0;
      }
    }
}
render (){
    return (
      <View style={styles.container}>
      <Text style={{fontSize: 50,marginBottom: 100, marginTop:100, marginLeft: 45, }}>TicTacToe</Text>
        <View style={styles.grid}>
          <TouchableOpacity onPress={() => this.onTilePress(0, 0)} style={styles.tile}>
            {this.renderIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(0, 1)} style={styles.tile}>
            {this.renderIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(0, 2)} style={styles.tile}>
            {this.renderIcon(0, 2)}
          </TouchableOpacity>
        </View>
        <View style={styles.grid}>
          <TouchableOpacity onPress={() => this.onTilePress(1, 0)} style={styles.tile}>
            {this.renderIcon(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(1, 1)} style={styles.tile}>
            {this.renderIcon(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(1, 2)} style={styles.tile}>
            {this.renderIcon(1, 2)}
          </TouchableOpacity>
        </View>
        <View style={styles.grid}>
          <TouchableOpacity onPress={() => this.onTilePress(2, 0)} style={styles.tile}>
            {this.renderIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(2, 1)} style={styles.tile}>
            {this.renderIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onTilePress(2, 2)} style={styles.tile}>
            {this.renderIcon(2, 2)}
          </TouchableOpacity>
        </View>
        <View style={styles.status}>
        <View>{this.state.winner !== 2 && this.state.winner !== 0 ?  this.state.message: " "}</View>
        <Text style={styles.text}>{this.state.winner !== 2 && this.state.winner !== 0 ?  "Wins": " "}</Text>
         <Text style={styles.text}>{this.state.winner !== 2 ? "":"No Winner!!! it's a tie"}</Text>
          </View>
        <TouchableOpacity onPress={this.reset} style={styles.newGame}>
          <Text> New Game</Text>
        </TouchableOpacity>
      </View>
        //
        
     
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 55,
    paddingRight: 55,
  },
  grid: {
    flexDirection: 'row',
  },
  tile: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: 100,
    height: 100,
  },
  tileX: {
    color: 'red',
    fontSize: 60,
  },
  tileO: {
    color: 'green',
    fontSize: 60,
  },
  newGame: { 
    width: 100, 
    height: 30, 
    borderWidth: 1, 
    borderRadius: 50, 
    paddingTop: 4, 
    paddingLeft: 10, 
    marginTop: 100, 
    marginLeft: 100,
    backgroundColor: 'gold',
    },
    text: {
      color: "#000", 
      marginTop: 30, 
      height: 80,
        fontSize: 40,
        },
        status: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }
});

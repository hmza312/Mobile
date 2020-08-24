import React from 'react';
import {connect} from 'react-redux';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from '../Styles/categorystyles';

import * as selectors from './MainReducer/selectors';
import * as actions from './MainReducer/actions';

import { categories } from '../data/categoryData';
// import { getNumberOfRecipes } from '../../data/MockDataAPI';
 class CategoriesScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  onPressCategory = item => {
    console.log("presscategory",item);
    const {chooseCategoryItem} = this.props; 
    chooseCategoryItem(item);
    
    // const title = item.name;
    // const category = item;
    const {navigation} = this.props;
    navigation.navigate('ProductsList'
    // , { category, title }
    );
  };

  renderCategory = ({ item }) => (
    console.log("rendercategory",item),
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressCategory(item)}>
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
        <Text style={styles.categoriesName}>{item.name}</Text>
        {/* <Text style={styles.categoriesInfo}>{getNumberOfRecipes(item.name)} recipes</Text> */}
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          data={categories}
          renderItem={this.renderCategory}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {...actions})(CategoriesScreen);

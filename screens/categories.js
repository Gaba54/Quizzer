import React from 'react';
import {StyleSheet, FlatList, Text, View, TouchableOpacity} from 'react-native';
import {useEffect} from 'react';
import {useState} from 'react';

const fetchCategories = async () => {
  const response = await fetch('https://opentdb.com/api_category.php');
  const data = await response.json();
  return data.trivia_categories;
};

const Categories = ({navigation}) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const fetchCategoriesAsync = async () => {
      setisLoading(true);
      const categories = await fetchCategories();
      // console.log(categories);
      setCategories(categories);
      setisLoading(false);
    };
    fetchCategoriesAsync();
  }, []);

  const renderCategoryItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('CategoryDescription', {category: item})
      }>
      <View style={styles.categoryItem}>
        <Text style={styles.categoryName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.question}>Categories available:</Text>
      </View>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>LOADING...</Text>
        </View>
      ) : (
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.categoryList}
        />
      )}
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    height: '100%',
  },
  question: {
    fontSize: 26,
    fontWeight: '600',
    color: '#4D4D4D',
    alignItems: 'center',
  },
  top: {
    marginVertical: 16,
    width: '100%',
    backgroundColor: '#ffd6ff',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 40,
  },
  categoryList: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  categoryItem: {
    marginVertical: 16,
    width: '100%',
    backgroundColor: '#a2d2ff',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  categoryName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4D4D4D',
    alignItems: 'center',
  },
  loadingContainer:{
    display: 'flex',
    justifyContent:'center',
    alignSelf:'center'
  },
  loadingText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4D4D4D',
  },
});

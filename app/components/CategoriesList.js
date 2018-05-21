import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles/CategoriesList';

const CategoriesList = (props) => (
  <View style={styles.root}>
    <View style={styles.categoriesListContentContainer}>
      <ScrollView style={styles.categoriesListScroll}>
        {props.categories.map(category => (
          <TouchableOpacity
            onPress={() => props.showCategoryRecipes({ category })}
            key={`category-${category._id}`}
            style={styles.categoryCard}
          >
            <View style={styles.categoryCardLeftContainer}>
              <Text style={styles.categoryCardTitle}>{category.title}</Text>
            </View>
            <View style={styles.categoryCardRightContainer}>
              <View style={styles.categoryCardButton}>
                <MaterialIcons
                  name='edit'
                  size={35}
                  color={'white'}
                  onPress={() => props.toggleUpdateModal({ category })}
                />
              </View>
              <View style={styles.categoryCardButton}>
                <MaterialIcons
                  name='delete'
                  size={35}
                  color={'white'}
                  onPress={() => props.deleteCategoryRequest({ categoryId: category._id })}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  </View>
);

export default CategoriesList;

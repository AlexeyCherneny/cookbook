import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './styles/RecipesList';

const RecipesList = props => (
  <View style={styles.root}>
    <View style={styles.recipesListTitleContainer}>
      <Text style={styles.recipesListTitle}>{props.category.title}</Text>
    </View>
    <View style={styles.recipesListContentContainer}>
      <ScrollView>
        {props.recipes.map(recipe => (
          <TouchableOpacity
            onPress={() => props.showCurrentRecipe({ recipe })}
            elevation={5}
            key={`recipe-${recipe._id}`}
            style={styles.recipeCard}
          >
            <View>
              <Image
                resizeMode="cover"
                style={styles.preview}
                source={require('../img/s800.webp')}
              />
            </View>
            <View style={styles.recipeCardTopContainer}>
              <Text style={styles.recipeCardTitle}>{recipe.title}</Text>
            </View>
            <View style={styles.recipeCardBottomContainer}>
              <Text style={styles.recipeCardDescription}>{recipe.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  </View>
);

export default RecipesList;

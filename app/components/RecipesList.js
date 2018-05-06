import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles/RecipesList';

const RecipesList = ({ recipes }) => (
  <View style={styles.root}>
    <View style={styles.recipesListTitleContainer}>
      <Text style={styles.recipesListTitle}>My recipes list</Text>
    </View>
    <View style={styles.recipesListContentContainer}>
      <ScrollView>
        {recipes.map((recipe, i) => (
          <View key={i} style={styles.recipeCard}>
            <View style={styles.recipeCardTopContainer}>
              <Text style={styles.recipeCardTitle}>{recipe.title}</Text>
            </View>
            <View style={styles.recipeCardBottomContainer}>
              <Text style={styles.recipeCardDescription}>
                {recipe.description}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  </View>
);

export default RecipesList;

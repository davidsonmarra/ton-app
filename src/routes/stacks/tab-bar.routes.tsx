import React from 'react';
import { ProductsRoutes as ProductsStack } from './products.routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled, { useTheme } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ExampleScreen } from '../screens/example-screen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
const { Navigator, Screen } = createBottomTabNavigator();

export const TabBarRoutes = () => {
  const { colors } = useTheme();
  const { bottom } = useSafeAreaInsets();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.label,
        tabBarStyle: {
          backgroundColor: colors.background,
          paddingBottom: 4,
          paddingTop: 4,
          height: 64 + bottom
        },
        tabBarShowLabel: false
      }}
      initialRouteName='ProductsStack'
    >
      <Screen
        name='ScreenExample1'
        component={ExampleScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <StyledIconContainer color={color}>
              <Icon name='home-filled' color={color} size={size} />
            </StyledIconContainer>
          )
        }}
      />
      <Screen
        name='ProductsStack'
        component={ProductsStack}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <StyledIconContainer color={color}>
              <Icon name='shopping-cart' color={color} size={size} />
            </StyledIconContainer>
          ),
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === 'ProductDetailsScreen') {
              return { display: 'none' };
            }
            return {
              height: 64 + bottom,
              paddingBottom: 4,
              paddingTop: 4,
              backgroundColor: colors.background
            };
          })(route)
        })}
      />
      <Screen
        name='ScreenExample2'
        component={ExampleScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <StyledIconContainer color={color}>
              <Icon name='person' color={color} size={size} />
            </StyledIconContainer>
          )
        }}
      />
      <Screen
        name='ScreenExample3'
        component={ExampleScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <StyledIconContainer color={color}>
              <Icon name='list' color={color} size={size} />
            </StyledIconContainer>
          )
        }}
      />
    </Navigator>
  );
};

const StyledIconContainer = styled.View<{ color: string }>`
  padding-bottom: 5px;
  border-bottom-width: 2.5px;
  border-bottom-color: ${({ color }) => color};
`;

import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageService = {
  async setItem(key: string, value: string) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      return true;
    } catch (error) {
      console.error('Error setting item:', error);
      return false;
    }
  },

  async getItem(key: string) {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Error getting item:', error);
      return null;
    }
  },

  async removeItem(key: string) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing item:', error);
      return false;
    }
  },

  async hasItem(key: string) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value !== null;
    } catch (error) {
      console.error('Error checking item existence:', error);
      return false;
    }
  },

  async getAllKeys() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      return keys;
    } catch (error) {
      console.error('Error getting all keys:', error);
      return [];
    }
  },

  async clearStorage() {
    try {
      await AsyncStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing storage:', error);
      return false;
    }
  },
};

export default AsyncStorageService;

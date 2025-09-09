import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useLocationStore = create()(
  persist(
    set => ({
      city: null,
      setCity: newCity => set({ city: newCity }),
    }),
    {
      name: 'location',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
export default useLocationStore;

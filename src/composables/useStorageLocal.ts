import { storage } from 'webextension-polyfill'
import type {
  MaybeRef,
  RemovableRef,
  StorageLikeAsync,
  UseStorageAsyncOptions,
} from '@vueuse/core'
import {
  useStorageAsync,
} from '@vueuse/core'

const storageLocal: StorageLikeAsync = {
  removeItem(key: string) {
    return storage.local.remove(key)
  },

  async setItem(key: string, value: string) {
    console.log(`Setting ${key} to ${value}`)
    return await storage.local.set({ [key]: value })
  },

  async getItem(key: string) {
    const item = (await storage.local.get(key))[key]
    console.log(`Getting item for key: ${key}`);
    console.log(`\n ${item}`);
    return item
  },
}

export const useStorageLocal = <T>(
  key: string,
  initialValue: MaybeRef<T>,
  options?: UseStorageAsyncOptions<T>,
): RemovableRef<T> => useStorageAsync(key, initialValue, storageLocal, options)

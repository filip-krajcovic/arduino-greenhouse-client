import { computed } from 'vue'
import { defineStore } from 'pinia'

import { useCollection } from 'vuefire'
import { collection, Timestamp, orderBy, query } from 'firebase/firestore'
import { firestore } from '@/plugins/firebase'

interface IMeasurement {
  humidity: number
  moisure_soil: number
  temperature: number
  timestamp: Timestamp
}

export const getDate = (secs: number) => {
  var t = new Date(1970, 0, 1);
  var offset = t.getTimezoneOffset() / 60;
  var hours = t.getHours() + 1;

  t.setHours(hours - offset);
  t.setSeconds(secs);
  return t;
}

export const useMeasurementsStore = defineStore('measurements', () => {

  const collectionRef = collection(firestore, 'sensors');
  const collectionQuery = query(collectionRef, orderBy('timestamp', 'desc'))

  const measurementCollection = useCollection<IMeasurement>(collectionQuery)

  const measurements = computed(() => measurementCollection.data)

  return {
    measurements,
  }
})

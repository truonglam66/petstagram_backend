import { DATA_SOURCE } from '../common/constants'
import { dataSource } from '../typeorm'

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSourceInit = dataSource

      if (!dataSourceInit.isInitialized) {
        const res = await dataSourceInit.initialize()
        try {
          if (res) await res.runMigrations()
        } catch (error) {
          console.log(`Migrations Error: ${error}`)
        }
        return res
      }
    },
  },
]

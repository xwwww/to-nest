import * as moogoose from 'mongoose'

export const databaseProviders = [{
  provide: 'DbConnectionToken',
  useFactory: async (): Promise<moogoose.Connection> => {
    await moogoose.connect('mongodb://localhost/nest')
  }
}]
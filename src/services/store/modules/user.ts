import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
@Module({name: 'User', namespaced: true, stateFactory: true})
export default class User extends VuexModule {
  public language = 'zh-CN';
  get getLanguage() {
    return this.language;
  }

  // action 'decr' commits mutation 'SET_LANGUAGE' when done with return value as payload
  @Action({ commit: 'SET_LANGUAGE' })
  public async setLanguage(lang) {
    return lang;
  }

  @Mutation
  private SET_LANGUAGE(language: string) {
    console.log('language:', language)
    this.language = language
  }
}
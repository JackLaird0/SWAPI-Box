import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import '../../setupTests';

describe('App tests', () => {
  it('Should match the snapshot', () => {
    const appComponent = shallow(<App />, {disableLifecycleMethods: true})

    expect(appComponent).toMatchSnapshot()
  })

  it('Should render with the correct default state', () => {
    const appComponent = shallow(<App />, {disableLifecycleMethods: true})

    expect(appComponent.state('vehicles')).toEqual([])
    expect(appComponent.state('openingCrawl')).toEqual([]);
    expect(appComponent.state('planets')).toEqual([]);
    expect(appComponent.state('people')).toEqual([]);
    expect(appComponent.state('selectedCategory')).toEqual('');
    expect(appComponent.state('favorites')).toEqual([])
  })

  it('Should add to the favorites state when a favorite is saved', () => {
    const appComponent = shallow(<App />, {disableLifecycleMethods: true})
    const favoriteData = {hey: 'hello'}
    appComponent.instance().saveFavorites(favoriteData)

    expect(appComponent.state('favorites')).toEqual([favoriteData])
  })

  it('Should add to the existing state when a favorite is saved', () => {
    const appComponent = shallow(<App />, {disableLifecycleMethods: true})
    const favoriteData = {hey: 'hello'}
    const mockData = {hey: 'hello'}
    appComponent.instance().saveFavorites(favoriteData)
    appComponent.instance().saveFavorites(mockData)
    const expected = [{hey: 'hello'}, {hey: 'hello'}]

    expect(appComponent.state('favorites')).toEqual(expected)
  })
})

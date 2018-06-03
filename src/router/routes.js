/**
 * CREATED DATE: 2018/6/3 21:35:48
 * author: Absent Min
 */
import Rank from 'components/rank/Rank'
import Recommend from 'components/recommend/Recommend'
import Search from 'components/search/Search'
import Singer from 'components/singer/Singer'

export default [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/rank',
    name: 'Rank',
    component: Rank
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/singer',
    name: 'Singer',
    component: Singer
  }
]

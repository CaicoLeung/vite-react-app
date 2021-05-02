import { http } from '#UTILS'

export interface Album {
  userId: number
  id: number
  title: string
}
export interface Post extends Album {
  body: string
}
export function getAlbumList() {
  return http.default.get<Album[]>('/albums')
}
export function getPosts() {
  return http.default.get<Post[]>('/posts')
}
import { http } from '#UTILS'

export interface Albums {
  userId: number
  id: number
  title: string
}
export function getAlbumList() {
  return http.default.get<Albums[]>('/albums')
}
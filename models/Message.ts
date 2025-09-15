export interface MessageData {
  chatId: number
  message?: string
  image?: string
  userId: number
  timeStamp: string
  file?: undefined
  username: string
  profile_pic?: string
}

export interface Message extends MessageData {
  id: number
}

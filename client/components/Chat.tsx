// import { useState } from 'react'
import { useParams } from 'react-router'
import { useGetMessageByChatId } from '../hooks/useMessages.ts'

export function Chat() {
  // const { chatId } = useParams<{ chatId: string }>()
  // const id = Number(chatId)

  const { chatById, messageByChatId } = useGetMessageByChatId(2)

  // if (chatById.isPending || messageByChatId.isPending) {
  //   return <div>..Loading</div>
  // }
  // if (chatById.isError || messageByChatId.isLoading) {
  //   return <div>Error Loading Messages</div>
  // }

  const chat = chatById.data
  const messages = messageByChatId.data
  // console.log(messages && messages[0])
  return (
    <>
      <h1>sdfsdf</h1>
      {}
      {messages != undefined ? (
        messages.map((msg, index) => (
          <li key={index}>
            <img src={msg.profile_pic} alt="Profile" />
            <strong>{msg.username}</strong>
            <p>{msg.chatId}</p>
          </li>
        ))
      ) : (
        <p></p>
      )}
    </>
  )
}

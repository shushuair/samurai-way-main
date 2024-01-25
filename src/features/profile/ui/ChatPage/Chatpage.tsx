import React, { useEffect, useState } from "react"

export type ChatMessageType = {
  message: string
  photo: string
  userId: number
  userName: string
}

export const Chatpage = () => {
  return (
    <div>
      <Chat />
    </div>
  )
}

const Chat = () => {
  const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

  useEffect(() => {
    let ws: WebSocket
    //например рубанули интернет и закрылся канал вебсокет, рекурсивно вызываем функцию createChannel, при закрытии она сама будет пробовать переподключиться и открыть новый канал
    const closeHandler = () => {
      console.log("CLOSE WS")
      setTimeout(createChannel, 3000)
    }
    //т.к. мы закрываем канал, а подписка остается и она будет только накапливаться, надо удалить подписку предыдущую при создании канала в следующий раз первым делом
    // важно! чтобы верно отработал removeEventListener, нужно передать ту же функцию. скопировать текст ф-ции нельзя, т.к. будут совершенно разные. потому надо вынести
    // в отдельную переменную closeHandler
    function createChannel() {
      //вместо проверки на null
      ws?.removeEventListener("close", closeHandler)
      ws?.close()
      ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
      ws.addEventListener("close", closeHandler)
      setWsChannel(ws)
    }
    createChannel()
    //делаем зачистку клинап useEffect
    return () => {
      ws.removeEventListener("close", closeHandler)
      ws.close()
    }
  }, [])

  return (
    <div>
      <Messages wsChannel={wsChannel} />
      <AddMessageForm wsChannel={wsChannel} />
    </div>
  )
}

type MessagesProps = {
  wsChannel: WebSocket | null
}
const Messages = (props: MessagesProps) => {
  const { wsChannel } = props
  const [messages, setMessages] = useState<ChatMessageType[]>([])

  useEffect(() => {
    let messageHandler = (e: MessageEvent) => {
      let newMessages = JSON.parse(e.data)
      //добавить мини редьюсер что приходят старые месседжи. useEffect прикол с тем что затираются старые месседжи, messages из useState
      //замыкание с messages в useState было и всегда был пустой массив, т.о. реакт вызывая логику преобразования
      // засовывает сюда актуальный стейт.мы теперь работаем с тем что пришло в функцию
      setMessages((prevMessages) => [...prevMessages, ...newMessages])
    }
    wsChannel?.addEventListener("message", messageHandler)
    //зачищаем мусор перед тем как нам придёт новый useEffect и будет делать новую подписку
    return () => {
      wsChannel?.removeEventListener("message", messageHandler)
    }
  }, [wsChannel])

  return (
    <div style={{ height: "400px", overflowY: "auto" }}>
      {messages.map((m, index) => (
        <Message key={index} message={m} />
      ))}
    </div>
  )
}

type MessageProps = {
  message: ChatMessageType
}

const Message = (props: MessageProps) => {
  const { message } = props
  return (
    <div>
      <img src={message.photo} style={{ width: "30px" }} alt="avatar" /> <b>{message.userName}</b>
      <br />
      {message.message}
      <hr />
    </div>
  )
}

const AddMessageForm = ({ wsChannel }: { wsChannel: WebSocket | null }) => {
  const [message, setMessage] = useState("")
  const [readyStatus, setReadyStatus] = useState<"pending" | "ready">("pending")

  //rerender не происходит кнопки задизейбленной пока не начнём печатать
  //создаём useState для статуса кнопки, когда канал открыт

  useEffect(() => {
    let openHandler = () => {
      setReadyStatus("ready")
    }
    wsChannel?.addEventListener("open", openHandler)
    //делаем зачистку cleanup useEffect
    return () => {
      wsChannel?.removeEventListener("open", openHandler)
    }
  }, [wsChannel])

  const sendMessage = () => {
    if (!message) {
      return
    }
    wsChannel?.send(message)
    setMessage("")
  }
  return (
    <div>
      <div>
        <textarea onChange={(e) => setMessage(e.currentTarget.value)}></textarea>
      </div>
      <div>
        <button disabled={wsChannel === null || readyStatus !== "ready"} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  )
}

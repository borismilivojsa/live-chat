import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { messageState } from '@/atoms/messageAtoms'

const Message = () => {
    const messages = useRecoilValue(messageState)

    const renderMessage = messages.map((message) => {
        return (
            <div className="row no-gutters" key={ message.id }>

                { message.user_id === 1 ? (
                    <div className="col-md-3 offset-md-9">
                        <div className="chat-bubble chat-bubble--right">
                            { message.value }
                        </div>
                    </div>
                ) : (
                      <div className="col-md-3">
                          <div className="chat-bubble chat-bubble--left">
                              { message.value }
                          </div>
                      </div>
                  ) }

            </div>
        )
    })

    return (
        <div>
            { renderMessage }
        </div>
    )
}

export default Message
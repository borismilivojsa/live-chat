import { atom } from 'recoil'

export const messageState = atom({
    key: 'messageState',
    default: [
        {
            'id': 1,
            'value': 'op op',
            'user_id': 1
        },
        {
            'id': 2,
            'value': 'sta ima',
            'user_id': 1
        },
        {
            'id': 3,
            'value': 'eo nista',
            'user_id': 2
        },
        {
            'id': 4,
            'value': 'kod tebe',
            'user_id': 2
        },
        {
            'id': 5,
            'value': 'nista',
            'user_id': 1
        },
        {
            'id': 25,
            'value': 'nista',
            'user_id': 2
        },
        {
            'id': 51,
            'value': 'nista',
            'user_id': 2
        }
    ]
})

export const newMessageState = atom({
    key: 'newMessageState',
    default: ''
})
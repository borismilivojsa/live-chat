import { atom } from 'recoil'

export const friendsState = atom({
    key: 'friendsState',
    default: [
        {
            id: 1,
            name: 'Boris',
            lastName: 'Milivojsa',
            image: 'https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-1/283467370_5154052214681574_2475012531244521892_n.jpg?stp=dst-jpg_p160x160&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=yXBrKFZ0E7cAX8GYEby&_nc_ht=scontent-frx5-1.xx&oh=00_AfBC_i4Y_1l7rf2E0aNkKQ9SUN7Uv61FyggWUT_32ZlW4A&oe=63D660AF',
            last_message: 'Ee cao',
            last_message_time: '21-02-2023'
        },
        {
            id: 2,
            name: 'Mihajlo',
            lastName: 'Stevanovic',
            image: 'https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-1/283467370_5154052214681574_2475012531244521892_n.jpg?stp=dst-jpg_p160x160&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=yXBrKFZ0E7cAX8GYEby&_nc_ht=scontent-frx5-1.xx&oh=00_AfBC_i4Y_1l7rf2E0aNkKQ9SUN7Uv61FyggWUT_32ZlW4A&oe=63D660AF',
            last_message: 'Sta ima',
            last_message_time: '21-02-2023'
        }
    ]
})

export const newFriendState = atom({
    key: 'newFriendState',
    default: []
})
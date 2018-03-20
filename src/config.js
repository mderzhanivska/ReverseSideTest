const config = {
    table: {
        columns: [
            {
                title: 'Preview',
                width: 120,
                data: 'preview'
            },
            {
                title: 'Время',
                width: 180,
                data: 'time'
            },
            {
                title: 'Статус',
                width: 180,
                data: 'status'
            },
            {
                title: 'Площадка',
                width: 180,
                data: 'place'
            },
            {
                title: 'Тип',
                width: 180,
                data: 'type'
            },
            {
                title: 'Цена',
                width: 180,
                data: 'price'
            },
            {
                title: 'Активность',
                width: 180,
                data: 'activity'
            },
            {
                title: 'Подписок',
                width: 180,
                data: 'subscription'
            },
            {
                title: 'СРА',
                width: 180,
                data: 'cpa'
            },
            {
                title: '',
                width: 180,
                data: 'info'
            },
        ],
        data: [{
            preview: 'image',
            time: new Date(),
            status: 'status',
            place: 'place',
            type: 'Inform text',
            price: '1234.2p',
            activity: {
                likes: 1,
                reposts: 10,
                comments: 22
            },
            subscription: '1',
            cpa: 1,
            info: ''
        }]
    }
};


export default config;
type Tweet = {
    id: number,
    name: string,
    username: string,
    profileUrl: string,
    createdAt: string,
    text: string,
}

interface IEditor {
    create(tweet: string): void;
    read(): void;
    update(text: string, targetId: number): void;
    delete(target: string): void;
}

export default class TweetEditor implements IEditor {
    private tweets: Tweet[] = [
        {
            id: 0,
            name: 'popo',
            username: '@popo',
            profileUrl: 'https://lh3.googleusercontent.com/ogw/AOh-ky2bR5KkWnwa8gBbrxQKurPk8144Ls0y7pVzUXBZKw=s32-c-mo',
            createdAt: 'just now',
            text: 'sdfsdfsdf'
        },
        {
            id: 1,
            name: 'bob',
            username: '@bob',
            profileUrl: 'https://lh3.googleusercontent.com/ogw/AOh-ky2bR5KkWnwa8gBbrxQKurPk8144Ls0y7pVzUXBZKw=s32-c-mo',
            createdAt: '3 seconds ago',
            text: 'sdfsdfsdf'
        },
        {
            id: 2,
            name: 'elli',
            username: '@elli',
            profileUrl: 'https://lh3.googleusercontent.com/ogw/AOh-ky2bR5KkWnwa8gBbrxQKurPk8144Ls0y7pVzUXBZKw=s32-c-mo',
            createdAt: '5 days ago',
            text: 'sdfsdfsdf',
        }
    ]

    async create(text: string) {
        const tweet = {
            id: Date.now(),
            name: 'popo',
            username: '@popo',
            profileUrl: 'https://lh3.googleusercontent.com/ogw/AOh-ky2bR5KkWnwa8gBbrxQKurPk8144Ls0y7pVzUXBZKw=s32-c-mo',
            createdAt: 'just now',
            text
        }
        this.tweets = [tweet, ...this.tweets];
        return tweet;
    }
    async read() {
        return [...this.tweets];
    }
    async update(text, targetId) {
        const tweet = this.tweets.find(tweet => tweet.id === targetId);
        if (!tweet) {
            throw new Error('fail to find');
        }
        tweet.text = text;
        return tweet;
    }
    async delete(targetId) {
        this.tweets = this.tweets.filter(item => item.id !== targetId);
    }
}



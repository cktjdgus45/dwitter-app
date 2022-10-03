type Tweet = {
    id: number,
    name: string,
    email: string,
    profileUrl: string,
    createdAt: string,
    tweet: string,
}

interface IEditor {
    create(tweet: string): void;
    read(): void;
    update(target: string): void;
    delete(target: string): void;
}

export default class TweetEditor implements IEditor {
    private tweets: Tweet[] = [
        {
            id: 0,
            name: 'popo',
            email: '@popo',
            profileUrl: 'https://lh3.googleusercontent.com/ogw/AOh-ky2bR5KkWnwa8gBbrxQKurPk8144Ls0y7pVzUXBZKw=s32-c-mo',
            createdAt: 'just now',
            tweet: 'sdfsdfsdf'
        },
        {
            id: 1,
            name: 'bob',
            email: '@bob',
            profileUrl: 'https://lh3.googleusercontent.com/ogw/AOh-ky2bR5KkWnwa8gBbrxQKurPk8144Ls0y7pVzUXBZKw=s32-c-mo',
            createdAt: '3 seconds ago',
            tweet: 'sdfsdfsdf'
        },
        {
            id: 2,
            name: 'elli',
            email: '@elli',
            profileUrl: 'https://lh3.googleusercontent.com/ogw/AOh-ky2bR5KkWnwa8gBbrxQKurPk8144Ls0y7pVzUXBZKw=s32-c-mo',
            createdAt: '5 days ago',
            tweet: 'sdfsdfsdf',
        }
    ]

    async create(tweet: string) {
        this.tweets = [{
            id: Date.now(),
            name: 'popo',
            email: '@popo',
            profileUrl: 'https://lh3.googleusercontent.com/ogw/AOh-ky2bR5KkWnwa8gBbrxQKurPk8144Ls0y7pVzUXBZKw=s32-c-mo',
            createdAt: 'just now',
            tweet
        }, ...this.tweets]
    }
    async read() {
        return [...this.tweets];
    }
    async update(target) {
        console.log(target);
    }
    async delete(target) {
        console.log(target);
    }
}



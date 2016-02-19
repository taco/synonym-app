let savedState = [{
    key: 'sweather',
    synonyms: ['cold', 'jacket']
}, {
    key: 'boots',
    synonyms: ['tough', 'feet']
}, {
    key: 'words',
    synonyms: ['some more', 'phrases', 'are here']
}];

export const put = state => {
    state.forEach(pair => {
        if (pair.unsaved) {
            delete pair.unsaved;
        }
    });
    savedState = state;
};

export const get = () => {
    return savedState;
};
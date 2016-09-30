export function getCategory(state, suggestionId) {
    let suggestion = state.suggestions.items.find((s) => {
        return s._id === suggestionId;
    });

    if (!suggestion || typeof suggestion.category === 'undefined')
        return null;

    let category = state.categories.items.find((cat) => {
        return cat._id === suggestion.category;
    });

    return typeof category === 'undefined' ? null : category.title;
}
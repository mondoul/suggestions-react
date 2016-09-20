import expect from 'expect';
import {
    REQUEST_SUGGESTIONS, RECEIVE_SUGGESTIONS, RECEIVE_A_SUGGESTION, REQUEST_A_SUGGESTION,
    LIKE_SUGGESTION, DISLIKE_SUGGESTION, UPDATED_SUGGESTION
} from '../actions/actionsConst';
import { suggestions, suggestionsByFilter } from '../reducers/suggestionReducers';

describe('Testing suggestions reducer', () => {

    it('should return the initial state', () => {
       expect(
           suggestions(undefined, {})
       ).toEqual({
           isFetching: false,
           items: []
       })
   });

    it('should handle REQUEST_SUGGESTIONS', () => {
       expect(
           suggestionsByFilter(undefined, {
               type: REQUEST_SUGGESTIONS,
               filter: 'top',
               size: 10
           })
       ).toEqual({
            top: {
                isFetching: true,
                items: []
            }
       })
    });

    it('should handle REQUEST_SUGGESTIONS with existing data', () => {
        expect(
            suggestionsByFilter({
                top: {
                        items: [{id: 1, content: 'text'}],
                        isFetching: false,
                    },
                last: {
                        items: [{id: 1, content: 'text'}],
                        isFetching: true,
                }
                }, {
                type: REQUEST_SUGGESTIONS,
                filter: 'top',
                size: 10
            })
        ).toEqual({
            top: {
                items: [{id: 1, content: 'text'}],
                isFetching: true,
            },
            last: {
                items: [{id: 1, content: 'text'}],
                isFetching: true,
            }
        })
    });

    it('should handle RECEIVE_A_SUGGESTION', () => {
        expect(
            suggestions(undefined, {
                type: RECEIVE_A_SUGGESTION,
                result: {
                    suggestion: { id: 1, text: 'test test' }
                },
                id: 1
            })
        ).toEqual({
            isFetching: false,
            items: [{ id: 1, text: 'test test' }]
        })
    });

    it('should handle RECEIVE_A_SUGGESTION with existing data', () => {
        expect(
            suggestions({isFetching: false, items: [{ id: 1, text: 'test test' }]}, {
                type: RECEIVE_A_SUGGESTION,
                result: {
                    suggestion: { id: 2, text: 'test test' }
                },
                id: 2
            })
        ).toEqual({
            isFetching: false,
            items: [{ id: 2, text: 'test test' }, { id: 1, text: 'test test' }]
        })
    });

    it('should handle RECEIVE_SUGGESTIONS with filter TOP with no prior data', () => {
        expect(
            suggestionsByFilter(undefined, {
                type: RECEIVE_SUGGESTIONS,
                suggestions: [
                    { id: 1, text: 'test test' },
                    { id: 2, text: 'test test' },
                    { id: 3, text: 'test test' },
                    { id: 4, text: 'test test' },
                    { id: 5, text: 'test test' }
                ],
                filter: 'top',
                size: '10'
            })
        ).toEqual({
            top: {
                isFetching: false,
                items: [{ id: 1, text: 'test test' },
                    { id: 2, text: 'test test' },
                    { id: 3, text: 'test test' },
                    { id: 4, text: 'test test' },
                    { id: 5, text: 'test test' }]
            }
        })
    });

    it('should handle RECEIVE_SUGGESTIONS with filter LAST with prior data', () => {
        expect(
            suggestionsByFilter({
                top: {
                    isFetching: false,
                    items: [{ id: 1, text: 'test test' },
                        { id: 2, text: 'test test' },
                        { id: 3, text: 'test test' },
                        { id: 4, text: 'test test' },
                        { id: 5, text: 'test test' }]
                }
            }, {
                type: RECEIVE_SUGGESTIONS,
                suggestions: [
                    { id: 1, text: 'test test' },
                    { id: 2, text: 'test test' },
                    { id: 3, text: 'test test' },
                    { id: 4, text: 'test test' },
                    { id: 5, text: 'test test' }
                ],
                filter: 'last',
                size: '10'
            })
        ).toEqual({
            top: {
                isFetching: false,
                items: [{ id: 1, text: 'test test' },
                    { id: 2, text: 'test test' },
                    { id: 3, text: 'test test' },
                    { id: 4, text: 'test test' },
                    { id: 5, text: 'test test' }]
            },
            last: {
                isFetching: false,
                items: [{ id: 1, text: 'test test' },
                    { id: 2, text: 'test test' },
                    { id: 3, text: 'test test' },
                    { id: 4, text: 'test test' },
                    { id: 5, text: 'test test' }]

            }
        })
    });

    it('should handle LIKE_SUGGESTION', () => {
        expect(
            suggestions({isFetching: false, items: [{ _id: 1, likes: 10 }, { _id: 2, likes: 9 }]}, {
                type: LIKE_SUGGESTION,
                id: 1
            })
        ).toEqual({isFetching: false, items: [{ _id: 1, likes: 11 }, { _id: 2, likes: 9 }]})
    });

    it('should handle DISLIKE_SUGGESTION', () => {
        expect(
            suggestions({isFetching: false, items: [{ _id: 1, likes: 10 }, { _id: 2, likes: 9 }]}, {
                type: DISLIKE_SUGGESTION,
                id: 2
            })
        ).toEqual({isFetching: false, items: [{ _id: 1, likes: 10 }, { _id: 2, likes: 8 }]})
    });

    it('should handle UPDATED_SUGGESTION', () => {
            expect(
                suggestions({
                    isFetching: false,
                    items: [{_id: 123, content: 'azerty', title: 'title 1'}, {
                        _id: 456,
                        content: 'qwerty',
                        title: 'title 2'
                    }]
                }, {
                    type: UPDATED_SUGGESTION,
                    suggestion: {_id: 123, content: 'new content', title: 'new title', updated: '12/12/12'}
                })
            ).toEqual({
                isFetching: false,
                items: [
                    {_id: 123, content: 'new content', title: 'new title', updated: '12/12/12'},
                    {_id: 456, content: 'qwerty', title: 'title 2'}
                ]
            })
        }
    )

});
import expect from 'expect';
import {
    REQUEST_COMMENTS, RECEIVED_COMMENTS, COMMENT_ADDED, ADDING_COMMENT
} from '../actions/actionsConst';
import { comments } from '../reducers/commentReducers';

describe('Testing comments reducer', () => {

    it('should return the initial state', () => {
        expect(
            comments(undefined, {})
        ).toEqual({
            isFetching: false,
            isSaving: false,
            isSaved: false
        })
    });

    it('should handle REQUEST_COMMENTS', () => {
        expect(
            comments(undefined, {
                type: REQUEST_COMMENTS
            })
        ).toEqual({
            isFetching: true,
            isSaving: false,
            isSaved: false
        })
    });

    it('should handle RECEIVED_COMMENTS', () => {
        expect(
            comments({ isFetching: true, isSaving: false }, {
                type: RECEIVED_COMMENTS,
                comments: [{content: 'comment 1'}, {content: 'comment 2'}],
                id: 'suggestionId_QWERTY'
            })
        ).toEqual({
            suggestionId_QWERTY: [{content: 'comment 1'}, {content: 'comment 2'}],
            isFetching: false,
            isSaving: false,
            isSaved: false
        })
    });

    it('should handle RECEIVED_COMMENTS with existing data', () => {
        expect(
            comments({
                suggestionId_QWERTY: [{content: 'comment 1'}, {content: 'comment 2'}],
                suggestionId_AZERTY: [{content: 'comment X'}, {content: 'comment Y'}],
                isFetching: false,
                isSaving: false
            }, {
                type: RECEIVED_COMMENTS,
                comments: [{content: 'comment 1'}, {content: 'comment 2'}, {content: 'comment 3'}, {content: 'comment 4'}],
                id: 'suggestionId_QWERTY'
            })
        ).toEqual({
            suggestionId_QWERTY: [{content: 'comment 1'}, {content: 'comment 2'}, {content: 'comment 3'}, {content: 'comment 4'}],
            suggestionId_AZERTY: [{content: 'comment X'}, {content: 'comment Y'}],
            isFetching: false,
            isSaving: false,
            isSaved: false
        })
    });

    it('should handle ADDING_COMMENTS', () => {
       expect(
           comments(undefined, {
               type: ADDING_COMMENT
           })
       ).toEqual({ isFetching: false, isSaving: true, isSaved: false })
    });

    it('should handle ADDING_COMMENTS with existing data', () => {
        expect(
            comments({
                suggestionId_QWERTY: [{content: 'comment 1'}, {content: 'comment 2'}],
                suggestionId_AZERTY: [{content: 'comment X'}, {content: 'comment Y'}],
                isFetching: false,
                isSaving: false
            }, {
                type: ADDING_COMMENT
            })
        ).toEqual({
            suggestionId_QWERTY: [{content: 'comment 1'}, {content: 'comment 2'}],
            suggestionId_AZERTY: [{content: 'comment X'}, {content: 'comment Y'}],
            isFetching: false,
            isSaving: true,
            isSaved: false })
    });

    it('should handle COMMENT_ADDED', () => {
        expect(
            comments(undefined, {
                type: COMMENT_ADDED,
                comment: {content: 'this is my comment'},
                id: 'suggestionId_QWERTY'
            })
        ).toEqual({
            suggestionId_QWERTY: [{content: 'this is my comment'}],
            isFetching: false,
            isSaving: false,
            isSaved: true
        })
    });

    it('should handle COMMENT_ADDED with existing data', () => {
        expect(
            comments({
                suggestionId_QWERTY: [{content: 'this is my comment'}],
                suggestionId_AZERTY: [{content: 'comment X'}, {content: 'comment Y'}],
                isFetching: false,
                isSaving: true,
            }, {
                type: COMMENT_ADDED,
                comment: {content: 'this is another comment'},
                id: 'suggestionId_AZERTY'
            })
        ).toEqual({
            suggestionId_QWERTY: [{content: 'this is my comment'}],
            suggestionId_AZERTY: [{content: 'this is another comment'}, {content: 'comment X'}, {content: 'comment Y'}],
            isFetching: false,
            isSaving: false,
            isSaved: true
        })
    });
});
import {
    get, post, del, put,
    dummyGet, dummyPost
} from './request';

import { API_ROOT } from 'constants/config';

describe('testing fetching api', () => {

    beforeEach(() => {
        global.fetch = require('jest-fetch-mock');
    });

    afterEach(() => {
        fetch.resetMocks();
    });

    it('should get expected data', async () => {
        expect.assertions(3);

        const data = { foo: 'bar' };
        const successfulFetch = fetch.mockResponseOnce(
            JSON.stringify(data),
            { status: 200 }
        );

        const response = await get('foo');
        const responseJSON = await response.json();

        expect(successfulFetch).toHaveBeenCalledTimes(1);
        expect(successfulFetch).toHaveBeenCalledWith(
            `${API_ROOT}/foo`,
            { method: 'GET' }
        );
        expect(responseJSON).toMatchObject(data);
    });

    it('should post expected data', async () => {
        expect.assertions(2);

        const data = { foo: 'bar' };
        const successfulFetch = fetch.mockResponseOnce(
            JSON.stringify({}),
            { status: 200 }
        );

        const response = await post('foo', data);
        const responseJSON = await response.json();

        expect(successfulFetch).toHaveBeenCalledTimes(1);
        expect(successfulFetch).toHaveBeenCalledWith(
            `${API_ROOT}/foo`,
            {
                method: 'POST',
                body: JSON.stringify(data)
            }
        );
    });

    it('should post empty data', async () => {
        expect.assertions(2);

        const successfulFetch = fetch.mockResponseOnce(
            JSON.stringify({}),
            { status: 200 }
        );

        const response = await post('foo');
        const responseJSON = await response.json();

        expect(successfulFetch).toHaveBeenCalledTimes(1);
        expect(successfulFetch).toHaveBeenCalledWith(
            `${API_ROOT}/foo`,
            {
                method: 'POST',
                body: JSON.stringify({})
            }
        );
    });

    it('should delete expected data', async () => {
        expect.assertions(2);

        const successfulFetch = fetch.mockResponseOnce(
            JSON.stringify({}),
            { status: 200 }
        );

        const response = await del('foo');
        const responseJSON = await response.json();

        expect(successfulFetch).toHaveBeenCalledTimes(1);
        expect(successfulFetch).toHaveBeenCalledWith(
            `${API_ROOT}/foo`,
            { method: 'DELETE' }
        );
    });

    it('should put expected data', async () => {
        expect.assertions(2);

        const data = { foo: 'bar' };
        const successfulFetch = fetch.mockResponseOnce(
            JSON.stringify({}),
            { status: 200 }
        );

        const response = await put('foo', data);
        const responseJSON = await response.json();

        expect(successfulFetch).toHaveBeenCalledTimes(1);
        expect(successfulFetch).toHaveBeenCalledWith(
            `${API_ROOT}/foo`,
            {
                method: 'PUT',
                body: JSON.stringify(data)
            }
        );
    });

    it('should put empty data', async () => {
        expect.assertions(2);

        const successfulFetch = fetch.mockResponseOnce(
            JSON.stringify({}),
            { status: 200 }
        );

        const response = await put('foo');
        const responseJSON = await response.json();

        expect(successfulFetch).toHaveBeenCalledTimes(1);
        expect(successfulFetch).toHaveBeenCalledWith(
            `${API_ROOT}/foo`,
            {
                method: 'PUT',
                body: JSON.stringify({})
            }
        );
    });

    it('should resolve dummyGet', () => {
        expect.assertions(1);

        return expect(dummyGet()).resolves.toBeUndefined();
    });

    it('should resolve dummyPost with expected data', () => {
        expect.assertions(1);

        const data = { foo: 'bar' };

        return expect(dummyPost('foo', data)).resolves.toMatchObject(data);
    });
});

import _ from 'lodash';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const memoizeLast = (fn: (...args: any[]) => any) => {
    let cacheKey: Parameters<typeof fn>;
    let cacheResult: ReturnType<typeof fn>;

    return (...params: Parameters<typeof fn>) => {
        if (!_.isEqual(params, cacheKey)) {
            try {
                const result = fn(...params);

                cacheResult = result;
                cacheKey = params;
            } catch {
                return cacheResult;
            }
        }

        return cacheResult;
    };
};
